// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCShPS0nWRbKjwQva82goYlmJxfGZjAIjo",
  authDomain: "chatapp-c7d41.firebaseapp.com",
  databaseURL: "https://chatapp-c7d41-default-rtdb.firebaseio.com",
  projectId: "chatapp-c7d41",
  storageBucket: "chatapp-c7d41.appspot.com",
  messagingSenderId: "826820604306",
  appId: "1:826820604306:web:88f804363f1cd109d9d14b",
  measurementId: "G-G00V1GQD6C"
};

// Initialize 
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
export const analytics = getAnalytics(app);
