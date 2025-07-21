// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxVKP_89TpUEI5A0vOv7O-TPttnWd4gNY",
  authDomain: "netflixgpt-5ceaf.firebaseapp.com",
  projectId: "netflixgpt-5ceaf",
  storageBucket: "netflixgpt-5ceaf.firebasestorage.app",
  messagingSenderId: "238594469364",
  appId: "1:238594469364:web:67d92d8d3d3d4fd8f1dda1",
  measurementId: "G-9DZBS8SL6R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();