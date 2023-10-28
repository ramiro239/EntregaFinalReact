// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCO5072HMDtWNjZkSMnEvD-bsKlU-ogTs",
  authDomain: "coder-react-2e903.firebaseapp.com",
  projectId: "coder-react-2e903",
  storageBucket: "coder-react-2e903.appspot.com",
  messagingSenderId: "496479813849",
  appId: "1:496479813849:web:8dbd92a1b44a276a813ec8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)