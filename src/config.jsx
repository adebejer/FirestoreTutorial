// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM9maTILUa_GQzqU1mt301rdFjePbb7fs",
  authDomain: "firestoretest-a897e.firebaseapp.com",
  projectId: "firestoretest-a897e",
  storageBucket: "firestoretest-a897e.appspot.com",
  messagingSenderId: "1030695960453",
  appId: "1:1030695960453:web:cd0ef00d6fd3945611ceec"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firestore
export const db = getFirestore(app);