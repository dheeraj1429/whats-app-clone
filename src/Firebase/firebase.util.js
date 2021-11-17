import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const App = {
  apiKey: "AIzaSyAyecoj7TtnfpXQJstJZscFkH3BSoYWrOQ",
  authDomain: "whats-app-clone-dbcdb.firebaseapp.com",
  projectId: "whats-app-clone-dbcdb",
  storageBucket: "whats-app-clone-dbcdb.appspot.com",
  messagingSenderId: "282970150602",
  appId: "1:282970150602:web:49e9ecd5c53fe5f466c633",
};

// CREATE USER PRODILE
export const CreateUserProfileDoc = async function (userAuth) {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const entrytime = new Date();

    try {
      await userRef.set({
        username: displayName,
        email,
        entrytime,
        image: photoURL,
      });
    } catch (err) {
      console.log(err);
    }
  }
};

// Initializeapp
firebase.initializeApp(App);

// Export firebase, auth, store
export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const store = firebase.storage();

// Google auth provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
