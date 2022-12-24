// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyDsCU4EnjFzFOabX0pnMk-_770Jwf36Sls",
  authDomain: "find-bus-dc65f.firebaseapp.com",
  databaseURL: "https://find-bus-dc65f-default-rtdb.firebaseio.com",
  projectId: "find-bus-dc65f",
  storageBucket: "find-bus-dc65f.appspot.com",
  messagingSenderId: "119053998077",
  appId: "1:119053998077:web:e9e41303673f436a152b94",
  measurementId: "G-TP4Y8D8K2P"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export default database;