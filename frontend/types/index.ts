import { StaticImageData } from "next/image";

export type Interview = {
  id: string;
  userId: string;
  role: string;
  image: string | StaticImageData;
  type: string;
  techstack: string[];
  icon: string;
  level: string;
  questions: string[];
  finalized: boolean;
  createAt: string; 
};

export type SignUpParams ={
    uid: string;
    email: string;
    password: string;
    name: string;
}

export type SignInParams = {
    email: string;
    idToken: string;
}