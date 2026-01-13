// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDyW0PdUgGZcqc0s1W9jeTIXkN1xqOscM",
  authDomain: "vite-contact-664fb.firebaseapp.com",
  projectId: "vite-contact-664fb",
  storageBucket: "vite-contact-664fb.firebasestorage.app",
  messagingSenderId: "1094663249898",
  appId: "1:1094663249898:web:4e569877a057bcda6edc93"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);