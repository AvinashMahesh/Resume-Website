import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCyt9-vQ_s8IjgsGupmZwxhl084EAmTd_8",
  authDomain: "avinash-mahesh-resume.firebaseapp.com",
  databaseURL: "https://avinash-mahesh-resume-default-rtdb.firebaseio.com",
  projectId: "avinash-mahesh-resume",
  storageBucket: "avinash-mahesh-resume.appspot.com",
  messagingSenderId: "939467001851",
  appId: "1:939467001851:web:042ae7b98207046f22055e"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
