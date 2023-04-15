// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt2yCmKvYqWNjedj3h8tRKB2ky3b8ElsY",
  authDomain: "simple-firebase-585be.firebaseapp.com",
  projectId: "simple-firebase-585be",
  storageBucket: "simple-firebase-585be.appspot.com",
  messagingSenderId: "17146405736",
  appId: "1:17146405736:web:cbf50070b5619a1a01acdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app