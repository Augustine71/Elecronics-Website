import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

  const firebaseConfig = {
    apiKey: "AIzaSyDXyfCW0nfZCLVzQnpJag3gFEoSot5YEnI",
    authDomain: "react-http-req-20687.firebaseapp.com",
    databaseURL: "https://react-http-req-20687-default-rtdb.firebaseio.com",
    projectId: "react-http-req-20687",
    storageBucket: "react-http-req-20687.appspot.com",
    messagingSenderId: "701179281306",
    appId: "1:701179281306:web:06ae59a799acb0381b0423"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}