// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
