import firebase from "firebase/app";
import 'firebase/firestore'

var firebaseConfig = {
      apiKey: "AIzaSyCaCpM26vr3kqlO983OcpE228PvAGWgEhY",
      authDomain: "newpro-4df7e.firebaseapp.com",
      projectId: "newpro-4df7e",
      storageBucket: "newpro-4df7e.appspot.com",
      messagingSenderId: "90858009327",
      appId: "1:90858009327:web:a9ca8aed01335dec5ba11a",
      measurementId: "G-VB7FWH780T"
    };

export const app= firebase.initializeApp(firebaseConfig);
