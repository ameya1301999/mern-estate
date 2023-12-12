// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-14801.firebaseapp.com",
  projectId: "mern-estate-14801",
  storageBucket: "mern-estate-14801.appspot.com",
  messagingSenderId: "963366047164",
  appId: "1:963366047164:web:94906bf2346906ac5e2fb9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
