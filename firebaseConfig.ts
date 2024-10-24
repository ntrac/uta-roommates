// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1AGouY5WYHlRgArAuS-bjEdkzLsrs-8Q",
  authDomain: "utaroommates.firebaseapp.com",
  projectId: "utaroommates",
  storageBucket: "utaroommates.appspot.com",
  messagingSenderId: "256942075414",
  appId: "1:256942075414:web:1b1e958d352cd4d9c4cf37",
  measurementId: "G-2JVNYXEJMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore();

export { db };