import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHzfHGVqrhrp3665rNCI16vdL9T3SSTiE",
  authDomain: "instagram-clone-49be4.firebaseapp.com",
  projectId: "instagram-clone-49be4",
  storageBucket: "instagram-clone-49be4.appspot.com",
  messagingSenderId: "897602290912",
  appId: "1:897602290912:web:d514d6f4f95147f47dfc85",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
