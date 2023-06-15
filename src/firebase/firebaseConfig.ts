import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "portfolio-f1d88.firebaseapp.com",
    databaseURL: "https://portfolio-f1d88-default-rtdb.firebaseio.com",
    projectId: "portfolio-f1d88",
    storageBucket: "portfolio-f1d88.appspot.com",
    messagingSenderId: "280654948451",
    appId: "1:280654948451:web:ffc168b0073cff8e33b056"
};

const firebaseApp = (getApps().length == 0)? initializeApp(firebaseConfig) : getApps()[0];

export const storage = getStorage(firebaseApp);
export const db = getFirestore(firebaseApp);

export default firebaseApp;