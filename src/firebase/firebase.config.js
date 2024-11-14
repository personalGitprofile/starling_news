
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBwdJaEqxet-ylJoJn76wwh9DT-Hyp0myM",
  authDomain: "mr-career.firebaseapp.com",
  projectId: "mr-career",
  storageBucket: "mr-career.firebasestorage.app",
  messagingSenderId: "783552436915",
  appId: "1:783552436915:web:0c0cc21b144bc5d6faaec6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;