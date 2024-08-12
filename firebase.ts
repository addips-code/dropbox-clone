import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAdysAOIrHs80FL0HjVKmE2vG5VPZ9ZK1g",
    authDomain: "dropbox-clone-31053.firebaseapp.com",
    projectId: "dropbox-clone-31053",
    storageBucket: "dropbox-clone-31053.appspot.com",
    messagingSenderId: "277279053775",
    appId: "1:277279053775:web:020a33f5fd1d27fe4964ba",
    measurementId: "G-T22EG9Y96Z"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };