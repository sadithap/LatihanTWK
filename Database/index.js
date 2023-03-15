import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDE5MDt_HyWIQSJ8VqFb9r8BmcNa0_Xtl8",
    authDomain: "latihan-twk-d31d4.firebaseapp.com",
    projectId: "latihan-twk-d31d4",
    storageBucket: "latihan-twk-d31d4.appspot.com",
    messagingSenderId: "585458452637",
    appId: "1:585458452637:web:9dfcb4c94c60773dd7ac74"
  };

  if(!firebase.app.length){
    firebase.initializeApp(firebaseConfig);
  }

  export {firebase};