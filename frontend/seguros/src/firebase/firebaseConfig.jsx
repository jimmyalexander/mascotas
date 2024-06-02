// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHhhvHRdpAY26uDdohC3Q8-ai8fII1yIA",
  authDomain: "seguros-2f08e.firebaseapp.com",
  projectId: "seguros-2f08e",
  storageBucket: "seguros-2f08e.appspot.com",
  messagingSenderId: "955225159554",
  appId: "1:955225159554:web:59503cba6a84382630019b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {
  db,
  googleAuthProvider,
  facebookAuthProvider,
  firebase
}