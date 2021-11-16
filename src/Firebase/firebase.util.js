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
