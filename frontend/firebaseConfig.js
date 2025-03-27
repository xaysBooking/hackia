// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGbMgBB1tayNP9-2Kuxc-OipQdUkoBVHU",
  authDomain: "facebook-f9e6e.firebaseapp.com",
  projectId: "facebook-f9e6e",
  storageBucket: "facebook-f9e6e.firebasestorage.app",
  messagingSenderId: "1095535031299",
  appId: "1:1095535031299:web:db9dd410f3012b00c20a36",
  measurementId: "G-83NT4998HX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
