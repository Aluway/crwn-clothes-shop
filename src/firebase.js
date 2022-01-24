import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASURMENT_ID,
  apiKey: "AIzaSyDNFYrvuvLBdg32hbtIcGJCqUlnFAR-1sw",
  authDomain: "crwn-db-56fbb.firebaseapp.com",
  projectId: "crwn-db-56fbb",
  storageBucket: "crwn-db-56fbb.appspot.com",
  messagingSenderId: "461590675438",
  appId: "1:461590675438:web:d1bee5a9d6ef787679d8ff",
  measurementId: "G-76G9D27RV6",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
