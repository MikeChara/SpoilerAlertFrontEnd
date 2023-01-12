// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr7LAJWABrTeb19rmsh8IZ7Ann52T1LN8",
  authDomain: "spoileralert-auth.firebaseapp.com",
  projectId: "spoileralert-auth",
  storageBucket: "spoileralert-auth.appspot.com",
  messagingSenderId: "918443131567",
  appId: "1:918443131567:web:6c825d1ba7517beb25ca5a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
