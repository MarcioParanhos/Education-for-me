import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZu-ln29VqSAfIdYgjzyCj0JqlHud_Ecw",
  authDomain: "sefe-5c620.firebaseapp.com",
  projectId: "sefe-5c620",
  storageBucket: "sefe-5c620.appspot.com",
  messagingSenderId: "566940307600",
  appId: "1:566940307600:web:f94fff62fa105067228815"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };