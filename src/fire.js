import firebase from "firebase/app";
import "firebase/firebase-auth";
import "firebase/firebase-storage";
import "firebase/firebase-firestore";
import "firebase/firebase-performance";
import "firebase/firebase-messaging";

const config = {
  apiKey: "AIzaSyBv1SWT89dxfG7GIHbLA_dzvPU3PKcaNyU",
  authDomain: "adwords-optimize-945f3.firebaseapp.com",
  databaseURL: "https://adwords-optimize-945f3.firebaseio.com",
  projectId: "adwords-optimize-945f3",
  storageBucket: "adwords-optimize-945f3.appspot.com",
  messagingSenderId: "323578352 873",
  appId: "1:323578352873:web:d0f2beed13b84ccd"
};
export default firebase.initializeApp(config);
