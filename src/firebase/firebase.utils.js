import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
   apiKey: "AIzaSyBzlwA8X1lcD-Y-oPiEycbhPjCy_X78jWE",
   authDomain: "gents-stop.firebaseapp.com",
   databaseURL: "https://gents-stop.firebaseio.com",
   projectId: "gents-stop",
   storageBucket: "gents-stop.appspot.com",
   messagingSenderId: "1073066533077",
   appId: "1:1073066533077:web:e3ec5449039a580597025c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;