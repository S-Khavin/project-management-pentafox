// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
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
export const db = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
