
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBDyW0PdUgGZcqc0s1W9jeTIXkN1xqOscM",
  authDomain: "vite-contact-664fb.firebaseapp.com",
  projectId: "vite-contact-664fb",
  storageBucket: "vite-contact-664fb.firebasestorage.app",
  messagingSenderId: "1094663249898",
  appId: "1:1094663249898:web:4e569877a057bcda6edc93"
};

export const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);

export default app;