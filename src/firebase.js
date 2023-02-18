// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbvzD9wrFHl2X8JPLsjUZD1T3AJLyyQsM",
  authDomain: "react-firebase-authentic-97658.firebaseapp.com",
  projectId: "react-firebase-authentic-97658",
  storageBucket: "react-firebase-authentic-97658.appspot.com",
  messagingSenderId: "881525448675",
  appId: "1:881525448675:web:2acacc2b530062de920ad6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };