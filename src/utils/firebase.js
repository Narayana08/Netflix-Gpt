// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs21Cid1Hir4OTVZXSYdNpKoZn7JVko7M",
  authDomain: "netflixgpt-8873c.firebaseapp.com",
  projectId: "netflixgpt-8873c",
  storageBucket: "netflixgpt-8873c.appspot.com",
  messagingSenderId: "534686611905",
  appId: "1:534686611905:web:9f3cad4214e0df40ec5740",
  measurementId: "G-MDGZNM2DWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()