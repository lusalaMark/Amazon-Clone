import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnPW3JPzivDBo2kUOruEdIWljfy_8HnS4",
  authDomain: "e-clone-e6bab.firebaseapp.com",
  projectId: "e-clone-e6bab",
  storageBucket: "e-clone-e6bab.appspot.com",
  messagingSenderId: "1021158008371",
  appId: "1:1021158008371:web:0b2ed957e9973eea6a2546",
  measurementId: "G-NSKV5D5346",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
