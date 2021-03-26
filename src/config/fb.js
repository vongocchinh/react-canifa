import firebase from 'firebase';
import 'firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBDc_dbCuPx0RhZIBl6TtYvxxmCwML3c2s",
    authDomain: "do-an-web-ban-hang.firebaseapp.com",
    databaseURL: "https://do-an-web-ban-hang.firebaseio.com",
    projectId: "do-an-web-ban-hang",
    storageBucket: "do-an-web-ban-hang.appspot.com",
    messagingSenderId: "330696788458",
    appId: "1:330696788458:web:29661d2139627230718a93",
    measurementId: "G-PBY8ST2Y4R"
  };
 firebase.initializeApp(firebaseConfig);
const reduxSagaFirebase=new ReduxSagaFirebase(firebase.initializeApp(firebaseConfig));
export {reduxSagaFirebase,firebase as default};