import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAWtZCluMN7ftbQLIHy3rneC_ZzwJvvNHc",
  authDomain: "optima-payments.firebaseapp.com",
  projectId: "optima-payments",
  storageBucket: "optima-payments.appspot.com",
  messagingSenderId: "693710911455",
  appId: "1:693710911455:web:4e52d0f3bb240d6392766a",
  measurementId: "G-D6S5PT1LB8"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth();

export { app,auth };