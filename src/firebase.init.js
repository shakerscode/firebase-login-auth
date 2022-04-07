// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbFBU1qzExPYD7qnXp_DcnoIWuQbkmX90",
  authDomain: "a-login-fourm.firebaseapp.com",
  projectId: "a-login-fourm",
  storageBucket: "a-login-fourm.appspot.com",
  messagingSenderId: "930620046777",
  appId: "1:930620046777:web:7f68757c6314c8d31fca68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;