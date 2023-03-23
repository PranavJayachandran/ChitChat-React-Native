// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCiPk28tMaFXj5JU3cNoHzQhv9rWYVxIHs",
    authDomain: "chitchat-app-1ff2e.firebaseapp.com",
    projectId: "chitchat-app-1ff2e",
    storageBucket: "chitchat-app-1ff2e.appspot.com",
    messagingSenderId: "917684836128",
    appId: "1:917684836128:web:4a17cab91c0060417f6945",
    measurementId: "G-EZF9SKSFLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
export const storage = getStorage(app);