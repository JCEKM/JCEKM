// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { user } from "./users/User";

const firebaseConfig = {
  
  apiKey: "AIzaSyDZ6OZVrmCS8y387cvNyG8dwRTe4wYmI-U",
  authDomain: "jcekm-b86ba.firebaseapp.com",
  projectId: "jcekm-b86ba",
  storageBucket: "jcekm-b86ba.appspot.com",
  messagingSenderId: "833427920919",
  appId: "1:833427920919:web:744728d1ad36697f992452",
  measurementId: "G-XTB73ML5EE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Usuario activo
const auth = getAuth();
onAuthStateChanged(auth, (usereg) => {
  if (usereg) {
    // User is signed in, see docs for a list of available properties
    user.setUser({ usereg });
    // ...
  }
});
const db = getFirestore(app);

export { signOut,db };
export const provider = new GoogleAuthProvider();
