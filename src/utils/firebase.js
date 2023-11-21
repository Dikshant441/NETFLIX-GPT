// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC26V8RI5UqxAmwyUuPSxTEOJboJtMSB48",
  authDomain: "netflix-gpt-441.firebaseapp.com",
  projectId: "netflix-gpt-441",
  storageBucket: "netflix-gpt-441.appspot.com",
  messagingSenderId: "735330767296",
  appId: "1:735330767296:web:5310a0b9b55805a8b47825",
  measurementId: "G-9VT5PYY4BJ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


const analytics = getAnalytics(app);
export const auth = getAuth();



