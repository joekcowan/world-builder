import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqMstQCDAr-oLWIcAmewFKdMdssN1JmZw",
  authDomain: "world-builder-redux.firebaseapp.com",
  projectId: "world-builder-redux",
  storageBucket: "world-builder-redux.appspot.com",
  messagingSenderId: "748734380864",
  appId: "1:748734380864:web:6f50f5b9a3a12016cd98a5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };