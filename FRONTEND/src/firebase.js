// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-2d03a.firebaseapp.com",
  projectId: "mern-auth-2d03a",
  storageBucket: "mern-auth-2d03a.appspot.com",
  messagingSenderId: "1042443101089",
  appId: "1:1042443101089:web:4e44eccee11a0d21a8e1e0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
