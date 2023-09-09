import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDAAFCz6oZlN0At2gSsybm454YRGH3h94M",
    authDomain: "react-native-firebase-c1bc0.firebaseapp.com",
    projectId: "react-native-firebase-c1bc0",
    storageBucket: "react-native-firebase-c1bc0.appspot.com",
    messagingSenderId: "385376608875",
    appId: "1:385376608875:web:e21d24229d2beb1ba9872e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export default {
    firebase,
    db
  }