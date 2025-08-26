// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPyV_7RJuchLy7VH8h0R4jzHO3QFJo2mA",
  authDomain: "talkwise-1eae0.firebaseapp.com",
  projectId: "talkwise-1eae0",
  storageBucket: "talkwise-1eae0.firebasestorage.app",
  messagingSenderId: "140933084676",
  appId: "1:140933084676:web:e9f555798998fd8981a751",
  measurementId: "G-SQV0JG5ZT0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);