// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsTCUuJbIYcvWoTmTYcwI16l4lWaZ9TKE",
  authDomain: "smsapp-d4bf3.firebaseapp.com",
  databaseURL: "https://smsapp-d4bf3-default-rtdb.firebaseio.com",
  projectId: "smsapp-d4bf3",
  storageBucket: "smsapp-d4bf3.appspot.com",
  messagingSenderId: "784673516638",
  appId: "1:784673516638:web:1158ef703e5a6aa6e3d8cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;