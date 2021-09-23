import firebase from "firebase"


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAqFm1tnyrNbSKYnBDs70DJ9zueJU2TUsc",
  authDomain: "dwaine-todo-app.firebaseapp.com",
  projectId: "dwaine-todo-app",
  storageBucket: "dwaine-todo-app.appspot.com",
  messagingSenderId: "204600578628",
  appId: "1:204600578628:web:e18d5f8147273ac5e6a211"
});

const db = firebaseApp.firestore();

export default db;
