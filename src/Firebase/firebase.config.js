// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxiDTc-ejITOXC3MuL8qJNwcQ5DeJj_H8",
  authDomain: "employee-management-syst-a90b2.firebaseapp.com",
  projectId: "employee-management-syst-a90b2", 
  storageBucket: "employee-management-syst-a90b2.appspot.com",
  messagingSenderId: "1001569448078",
  appId: "1:1001569448078:web:d1a632f145375f42c159df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;