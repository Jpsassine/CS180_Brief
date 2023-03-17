// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPLuygvL1qQM4_-HAQ6ZRvpEuApvVxel8",
  authDomain: "cs180-bfa53.firebaseapp.com",
  projectId: "cs180-bfa53",
  storageBucket: "cs180-bfa53.appspot.com",
  messagingSenderId: "910224660440",
  appId: "1:910224660440:web:c82175a76ac13dbafdc4ad",
  measurementId: "G-55HN0ZKEJH",

  // clientID: "559312935666-8op8kep5dc3io118hqus8qq88v7o1u26.apps.googleusercontent.com",
  // scopes: [
  //   "email",
  //   "profile",
  //   "https://www.googleapis.com/auth/gmail.readonly"
  // ],
  // discoveryDocs: [
  //   "https://gmail.googleapis.com/$discovery/rest?version=v1"
  //   ]
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const initFirebase = () => {
  return app;
};
