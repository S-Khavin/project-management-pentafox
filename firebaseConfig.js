// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnhDKFm_lL3HKtw_M4N1jm4jqywuljXgE",
  authDomain: "pentafox-pm.firebaseapp.com",
  projectId: "pentafox-pm",
  storageBucket: "pentafox-pm.appspot.com",
  messagingSenderId: "48695709595",
  appId: "1:48695709595:web:f79f3dbb88ef2618439b3e",
  measurementId: "G-EBMGV6NLRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
