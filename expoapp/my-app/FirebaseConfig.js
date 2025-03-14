import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBzY2ncmxzBZ9YyLiDVJq45TQtTVyw3YwQ",

  authDomain: "authentication-project-2ab2c.firebaseapp.com",

  projectId: "authentication-project-2ab2c",

  storageBucket: "authentication-project-2ab2c.firebasestorage.app",

  messagingSenderId: "734891547758",

  appId: "1:734891547758:web:c36c79e85e476f20db1a7f"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);