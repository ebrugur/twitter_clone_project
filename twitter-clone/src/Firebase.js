import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVcCvZkgniEKCxPhj29jLF-KgPQMC1QXY",
  authDomain: "twitterclone-834a4.firebaseapp.com",
  projectId: "twitterclone-834a4",
  databaseURL: "https://twitterclone-834a4-default-rtdb.firebaseio.com/",
  storageBucket: "twitterclone-834a4.appspot.com",
  messagingSenderId: "959127640798",
  appId: "1:959127640798:web:507a1b0ecb9e86f42dc04f",
  measurementId: "G-7T21Y98WJS"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
