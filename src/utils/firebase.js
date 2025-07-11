// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRzHTVVvG0ZfPEm0W1U3EN3Gpq16UtsIY",
  authDomain: "netflixgpt-91f25.firebaseapp.com",
  projectId: "netflixgpt-91f25",
  storageBucket: "netflixgpt-91f25.firebasestorage.app",
  messagingSenderId: "643991040205",
  appId: "1:643991040205:web:82fb065725e7384189f984",
  measurementId: "G-N7REB8R1YN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();