import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBxZxXF001dz342zEFvnJ6Zt_K1uNTGV1w",
    authDomain: "clothing-db-ba358.firebaseapp.com",
    databaseURL: "https://clothing-db-ba358.firebaseio.com",
    projectId: "clothing-db-ba358",
    storageBucket: "",
    messagingSenderId: "1051031824235",
    appId: "1:1051031824235:web:e5060df4c1b23738"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;