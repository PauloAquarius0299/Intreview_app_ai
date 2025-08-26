'use server';

import { db, auth } from "@/firebase/admin";
import { SignInParams, SignUpParams } from "@/types";
import { cookies } from "next/headers";

const ONE_WEEK = 60 * 60 * 24 * 7;

export async function signUp(params: SignUpParams){
    const {uid, name, email} = params;

    try {
        const userRecord = await db.collection('users').doc(uid).get();
        if(userRecord.exists){
            return {
                success: false,
                message: "User already exists"
            }
        }

        await db.collection('users').doc(uid).set({
            name, email 
        });

        return {
            success: false,
            message: 'Account created successfully. Please sing in'
        }
        
    } catch (e: any) {
        console.error("Error during sign up:", e);

        if(e.code === 'auth/email-already-in-use') {
            return {
                success: false,
                message: "Email is already in use."
            }
        }
        return {
            success: false,
            message: "Failed to created an account"
        }
    }

}

export async function signIn(params: SignInParams){
    const {email, idToken} = params;

    try {
        const userRecord = await auth.getUserByEmail(email);

        if(!userRecord){
            return {
                success: false,
                message: 'User does not exist. Create an account first.'
            }
        }
        await setSessionCookie(idToken);
    } catch (e) {
        console.log(e);
        return {
            success: false,
            message: 'Failed to sign in'
        }
    }
}

export async function setSessionCookie(idToken: string){
    const cookieStore = await cookies();

    const sessionCookie = await auth.createSessionCookie(idToken, {expiresIn: ONE_WEEK * 1000});

    cookieStore.set('session', sessionCookie, {
        maxAge: ONE_WEEK,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax',
    })
}

export async function getCurrentUser(): Promise<{ uid: string; name?: string; email?: string } | null>{
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('session')?.value;

    if(!sessionCookie) return null;

    try {
        const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);

        const userRecord = await db.collection('users').doc(decodedClaims.uid).get();

        if(!userRecord.exists) return null;

        return {
           ...userRecord.data(),
           uid: userRecord.id,
        };
    } catch (e) {
        console.log('Error verifying session cookie:', e);
        return null;
    }
}

export async function isAuthenticated(){
    const user = await getCurrentUser();

    return !!user;
}