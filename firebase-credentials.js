// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnmA7jocPVujpNlnC6nQDcdIopPLzFVYk",
  authDomain: "lab4-b6fde.firebaseapp.com",
  projectId: "lab4-b6fde",
  storageBucket: "lab4-b6fde.appspot.com",
  messagingSenderId: "158333499113",
  appId: "1:158333499113:web:a1df0e9ab4dfa64010e278",
  measurementId: "G-GXK3Y1SD8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig