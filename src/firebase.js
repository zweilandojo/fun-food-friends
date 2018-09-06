// src/firebase.js
import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyCtGK1Ls-lM0tPrYegiYAi84dKVqySeR-k",
  authDomain: "fun-food-friends-b3e33.firebaseapp.com",
  databaseURL: "https://fun-food-friends-b3e33.firebaseio.com",
  projectId: "fun-food-friends-b3e33",
  storageBucket: "",
  messagingSenderId: "862333319820"
};
firebase.initializeApp(config);
export default firebase;
