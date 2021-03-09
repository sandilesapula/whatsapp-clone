// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDyvI2rsYKk-b-ep14HnR-kkEyGRyti5XY",
    authDomain: "whatsappclone-cab7a.firebaseapp.com",
    projectId: "whatsappclone-cab7a",
    storageBucket: "whatsappclone-cab7a.appspot.com",
    messagingSenderId: "821322449987",
    appId: "1:821322449987:web:4f0abc83aa4589b61580f6",
    measurementId: "G-905H87LWLF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;