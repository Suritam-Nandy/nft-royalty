import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; // <- needed if using firestore
import "firebase/storage";
import { createFirestoreInstance } from "redux-firestore"; // <- needed if using firestore

// import { initializeApp } from "firebase/app";
// import {getAuth} from 'firebase/auth';

// ! am credentials
// const firebaseConfig = {
//   apiKey: "AIzaSyAWtZCluMN7ftbQLIHy3rneC_ZzwJvvNHc",
//   authDomain: "optima-payments.firebaseapp.com",
//   projectId: "optima-payments",
//   storageBucket: "optima-payments.appspot.com",
//   messagingSenderId: "693710911455",
//   appId: "1:693710911455:web:4e52d0f3bb240d6392766a",
//   measurementId: "G-D6S5PT1LB8",
// };
// !sn credentials
const firebaseConfig = {
  apiKey: "AIzaSyDJMiCHRS5VCeoKxNoeTxtynP7dwIEFXwY",
  authDomain: "nft-royalty.firebaseapp.com",
  projectId: "nft-royalty",
  storageBucket: "nft-royalty.appspot.com",
  messagingSenderId: "281317255677",
  appId: "1:281317255677:web:c1324c028050768cf55194",
  measurementId: "G-YN4XNMHBYL",
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: `users`,

  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);
let storage = firebase.storage();
// Initialize other services on firebase instance
firebase.firestore();
const db = firebase.firestore(); // <- needed if using firestore
export { db, storage };
const store = createStore(rootReducer, composeWithDevTools());

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export default store;
