
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; 
// import firebase from "firebase/app";
// import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlecAK3wkBUnzT5EzMjEacsJP2d_NmbLo",
  authDomain: "messenger-8624c.firebaseapp.com",
  projectId: "messenger-8624c",
  storageBucket: "messenger-8624c.appspot.com",
  messagingSenderId: "814627394632",
  appId: "1:814627394632:web:ca4bce9bdb0c6c634ef47d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;

