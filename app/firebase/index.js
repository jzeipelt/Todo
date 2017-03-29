import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyA4TNv5FViFf6UIcea3Zj-1w4pdvKcgFEo",
    authDomain: "todo-app-a4fe0.firebaseapp.com",
    databaseURL: "https://todo-app-a4fe0.firebaseio.com",
    storageBucket: "todo-app-a4fe0.appspot.com",
    messagingSenderId: "1059183021434"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
