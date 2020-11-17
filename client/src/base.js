import firebase from "firebase";
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA9qRITjl1hXtxl-k9Ka3nVoRMIy9cZhXA",
    authDomain: "weij-c2efd.firebaseapp.com",
    databaseURL: "https://weij-c2efd.firebaseio.com",
    projectId: "weij-c2efd",
    storageBucket: "weij-c2efd.appspot.com",
    messagingSenderId: "386703781468",
    appId: "1:386703781468:web:bd8d2df3449d6bebea0099"
  };
  // Initialize Firebase
  export const app = firebase.initializeApp(firebaseConfig);