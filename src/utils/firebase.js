// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ3SI_Nr3X2WzE6uTxt8cCdNTj1a73vqw",
  authDomain: "netflix-gpt-49046.firebaseapp.com",
  projectId: "netflix-gpt-49046",
  storageBucket: "netflix-gpt-49046.appspot.com",
  messagingSenderId: "130879571570",
  appId: "1:130879571570:web:a7783b77ec21f15ae1a4eb",
  measurementId: "G-0100L3ZDDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);