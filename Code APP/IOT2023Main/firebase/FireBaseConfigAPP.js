import * as firebase from 'firebase/app'



var firebaseConfig = {
    apiKey: "AIzaSyAXDfYJ3F-N2C5QuoT4PLQv7xRYU9NoKQc",
    authDomain: "hieu-6e438.firebaseapp.com",
    projectId: "hieu-6e438",
    storageBucket: "hieu-6e438.appspot.com",
    messagingSenderId: "991666691591",
    appId: "1:991666691591:web:8aecf9b4d156abaee554a2",
    measurementId: "G-ES0PWRSHSJ",
    serviceAccount: "serviceAccount.json",
    databaseURL: "https://hieu-6e438-default-rtdb.firebaseio.com/"
};

export const FireBaseConfigAPP=firebase.initializeApp(firebaseConfig);
