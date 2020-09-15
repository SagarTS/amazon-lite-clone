import firebase from "firebase";

const firebaseConfig = {
  apiKey: "", //Your API Key
  authDomain: "clone-50a06.firebaseapp.com",
  databaseURL: "https://clone-50a06.firebaseio.com",
  projectId: "clone-50a06",
  storageBucket: "clone-50a06.appspot.com",
  messagingSenderId: "258940900892",
  appId: "1:258940900892:web:3b98fddb877c951fcb71d9",
  measurementId: "G-XJQ339KJZK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
