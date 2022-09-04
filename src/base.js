import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGNiq5pRYT0PKZ1moXwTeogSF3td-yrr0",
  authDomain: "saphill-palace.firebaseapp.com",
  projectId: "saphill-palace",
  storageBucket: "saphill-palace.appspot.com",
  messagingSenderId: "461765478116",
  appId: "1:461765478116:web:3dd8edf9f37e93cffccef1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);