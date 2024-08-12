// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmF-S4RaeGCWL1co6uXgIBLYnI4vvMJFg",
  authDomain: "bk-react-0219.firebaseapp.com",
  projectId: "bk-react-0219",
  storageBucket: "bk-react-0219.appspot.com",
  messagingSenderId: "328954758771",
  appId: "1:328954758771:web:eeb55f22e2acaa2a2ccc06",
  measurementId: "G-0QVTVJNJPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);