import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAj4Ba0gvFvYoCqxyk7OzF-jDfOdVPulVU",
    authDomain: "fbstorage-6327f.firebaseapp.com",
    projectId: "fbstorage-6327f",
    storageBucket: "fbstorage-6327f.appspot.com",
    messagingSenderId: "699175341489",
    appId: "1:699175341489:web:3c56429953ea7a27d24190",
    measurementId: "G-5Q02VJ5FBR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db