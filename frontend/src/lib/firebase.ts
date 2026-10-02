import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDfsmhQovrCM76M2nvFHZWIJMFzP6mllD4",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "arogyaai-bf683.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "arogyaai-bf683",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "arogyaai-bf683.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "469764884397",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:469764884397:web:81e4b4ab9c6db69021c324",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-XX3XRGPEJL"
};

// Initialize Firebase only if it hasn't been initialized already
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Analytics is only available in supported browser environments
let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) analytics = getAnalytics(app);
  });
}

export { app, auth, db, storage, analytics };
