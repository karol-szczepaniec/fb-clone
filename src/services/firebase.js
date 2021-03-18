import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB-6XaUy_pOA2tp-cXZXkFLyqERMQPWcUA",
    authDomain: "facebook-clone-21dad.firebaseapp.com",
    projectId: "facebook-clone-21dad",
    storageBucket: "facebook-clone-21dad.appspot.com",
    messagingSenderId: "585146175587",
    appId: "1:585146175587:web:48176944705222bb83a856"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;