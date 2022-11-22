// Import the functions you need from the SDKs you need
import app from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyB3R1UdOXn69h9yb6glDuRdIOM5jVuY0",
  authDomain: "chatapp-9f56f.firebaseapp.com",
  databaseURL: "https://chatapp-9f56f-default-rtdb.firebaseio.com",
  projectId: "chatapp-9f56f",
  storageBucket: "chatapp-9f56f.appspot.com",
  messagingSenderId: "111590274302",
  appId: "1:111590274302:web:9e0f6fa9f0d7cab44d61af"
};

// Initialize Firebase
const initFireBase = app.initializeApp(firebaseConfig);
export default initFireBase;