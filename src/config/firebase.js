import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyB4SGNErCCxsJwEnbN2Oa8RNgz7POdlZvI",
    authDomain: "canifa-8de6a.firebaseapp.com",
    databaseURL: "https://canifa-8de6a-default-rtdb.firebaseio.com",
    projectId: "canifa-8de6a",
    storageBucket: "canifa-8de6a.appspot.com",
    messagingSenderId: "867317053008",
    appId: "1:867317053008:web:5d79f4634b4deb15708355",
    measurementId: "G-JK5Y2TPTD9"
  };
 firebase.initializeApp(firebaseConfig);
 firebase.firestore();
 const storage =firebase.storage();
 var db= firebase.firestore();
export {db ,storage,firebase as default};