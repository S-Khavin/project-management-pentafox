// Import necessary functions from Firebase Auth SDK
import { auth } from './firebaseConfig'; // Import auth instance from firebaseConfig.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

// Sign up function
export async function signUp({ email, password }) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // Handle user object as needed
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // Handle errors here
    console.error(`Error [${errorCode}]: ${errorMessage}`);
    throw error;
  }
}

// Sign in function
export async function signIn({ email, password }) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // Handle user object as needed
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // Handle errors here
    console.error(`Error [${errorCode}]: ${errorMessage}`);
    throw error;
  }
}

// Check if user is logged in
export function isLoggedIn() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);
      } else {
        resolve(null);
      }
    }, reject);
  });
}
