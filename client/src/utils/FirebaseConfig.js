import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCE5QaFUjXQkc8YNxoiTdPeBDL5QdLL--8",
  authDomain: "whatsapp-clone-cbbe0.firebaseapp.com",
  projectId: "whatsapp-clone-cbbe0",
  storageBucket: "whatsapp-clone-cbbe0.appspot.com",
  messagingSenderId: "757495806548",
  appId: "1:757495806548:web:55a1a22181ba008f9fcbc1",
  measurementId: "G-03RDVZRZEL",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
