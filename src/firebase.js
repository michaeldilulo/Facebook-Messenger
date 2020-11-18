import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB1W_WVT8qggQDjfHut637snfj-5QfwlGw",
    authDomain: "facebook-messenger-62aa1.firebaseapp.com",
    databaseURL: "https://facebook-messenger-62aa1.firebaseio.com",
    projectId: "facebook-messenger-62aa1",
    storageBucket: "facebook-messenger-62aa1.appspot.com",
    messagingSenderId: "501221189584",
    appId: "1:501221189584:web:4789a1de521582a31afbd5"
})

const db = firebaseApp.firestore();

export { db }