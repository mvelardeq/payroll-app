// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5MjjmoTFt5um09cT_AdpZ9ElLiBGJEno",
  authDomain: "payroll-app-mvelardeq.firebaseapp.com",
  projectId: "payroll-app-mvelardeq",
  storageBucket: "payroll-app-mvelardeq.appspot.com",
  messagingSenderId: "850535170306",
  appId: "1:850535170306:web:5264c8019b53c4fda0021b",
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp)
