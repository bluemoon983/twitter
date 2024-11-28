// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwMDmAOol-IWqbLVTbB1gAHxwT1ELKyv8",
  authDomain: "mwitter-reloaded-91971.firebaseapp.com",
  projectId: "mwitter-reloaded-91971",
  storageBucket: "mwitter-reloaded-91971.firebasestorage.app",
  messagingSenderId: "278921957749",
  appId: "1:278921957749:web:5ef899669ccf7e3004433c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

