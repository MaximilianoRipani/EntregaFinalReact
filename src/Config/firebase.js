import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC7Yr1UYC5lb9Mn2HnnBRVTUbpJVJL85DM",
    authDomain: "entregafinalreact-69afa.firebaseapp.com",
    projectId: "entregafinalreact-69afa",
    storageBucket: "entregafinalreact-69afa.appspot.com",
    messagingSenderId: "498291947784",
    appId: "1:498291947784:web:ef5fea14219fcafa9c14bd"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export { db };