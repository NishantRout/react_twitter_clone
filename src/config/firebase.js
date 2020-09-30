import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCuZIMrIy7edn6UMgHsgWcvE4og4OOmVio",
    authDomain: "react-twitter-clone-8db05.firebaseapp.com",
    databaseURL: "https://react-twitter-clone-8db05.firebaseio.com",
    projectId: "react-twitter-clone-8db05",
    storageBucket: "react-twitter-clone-8db05.appspot.com",
    messagingSenderId: "375403433697",
    appId: "1:375403433697:web:004e8a9a1bac0f943cf1a0",
    measurementId: "G-JQM4P83JFG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;