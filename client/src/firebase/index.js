import firebase from "firebase/app";
import "firebase/storage";
var firebaseConfig = {
  apiKey: "AIzaSyBbs0O_ZQuYV2n12TRSK__9-wxCTbHRQpU",
  authDomain: "media-59eb0.firebaseapp.com",
  databaseURL: "https://media-59eb0.firebaseio.com",
  projectId: "media-59eb0",
  storageBucket: "media-59eb0.appspot.com",
  messagingSenderId: "444793252027",
  appId: "1:444793252027:web:ffd8ee7dade748c6be619e",
  measurementId: "G-PM1GHN9196",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebaseConfig as default };
