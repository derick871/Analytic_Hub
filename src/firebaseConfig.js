import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "YOUR_API_KEY_FALLBACK",
  authDomain: "task-manager-df5a2.firebaseapp.com",
  projectId: "task-manager-df5a2",
  storageBucket: "task-manager-df5a2.appspot.com",
  messagingSenderId: "847291048201",
  appId: "1:847291048201:web:a1b2c3d4e5f6g7h8i9j0k"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export default app;