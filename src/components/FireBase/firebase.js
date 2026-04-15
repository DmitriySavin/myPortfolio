import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCwD79DaCx__4qF-sWHOFLqeGA40Fbaaw",
  authDomain: "myportfolio-69f98.firebaseapp.com",
  projectId: "myportfolio-69f98",
  storageBucket: "myportfolio-69f98.firebasestorage.app",
  messagingSenderId: "771744341587",
  appId: "1:771744341587:web:bc699736547134da86b0a6",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);