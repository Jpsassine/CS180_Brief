// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1wcptSfsTAygK9X0CvyfmKc7IvWCMy8w",
  authDomain: "shining-lamp-378600.firebaseapp.com",
  projectId: "shining-lamp-378600",
  storageBucket: "shining-lamp-378600.appspot.com",
  messagingSenderId: "915039922825",
  appId: "1:915039922825:web:e9394cc8cf91156e1e3458",
  measurementId: "G-PX74FZPENY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
