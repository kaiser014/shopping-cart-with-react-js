// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-_dQXi--ioghRlZZaJiecxWpKQZ_Rg2s",
  authDomain: "shopping-cart-5e427.firebaseapp.com",
  projectId: "shopping-cart-5e427",
  storageBucket: "shopping-cart-5e427.appspot.com",
  messagingSenderId: "140897062396",
  appId: "1:140897062396:web:3ebb3c133693ec3f0bb679",
  measurementId: "G-PG7JSR5T2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;