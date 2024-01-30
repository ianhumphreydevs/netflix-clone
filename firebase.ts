// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2eyFpMW92EDacyzlHozJH1xRdGihoyRI",
    authDomain: "netflix-clone-efd77.firebaseapp.com",
    projectId: "netflix-clone-efd77",
    storageBucket: "netflix-clone-efd77.appspot.com",
    messagingSenderId: "660669167504",
    appId: "1:660669167504:web:a5119549954bf3cc8fe515"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }