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

// create new profile and store in firestore while signing up
export const createUserProfileDoc = async (userAuth, additionalData) => {
   if (!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);
   const snapshot = await userRef.get();

   // check if user already exists
   if (!snapshot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         // create the user and store in firestore
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
         });
      } catch (error) {
         console.log("Error Creating User", error.message);
      }
   }

   return userRef;
};


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
   const collectionRef = firestore.collection(collectionKey);

   const batch = firestore.batch(); // upload either full doc or don't at all

   objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc(); // create random unique id
      batch.set(newDocRef, obj); // upload
   });

   return await batch.commit(); // returns a promise
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;