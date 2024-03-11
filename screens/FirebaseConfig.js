import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBzv32yvkY4IHjbxHU2rT5DV-ILnpep1E4",
  authDomain: "hid-cam-a2905.firebaseapp.com",
  projectId: "hid-cam-a2905",
  storageBucket: "hid-cam-a2905.appspot.com",
  messagingSenderId: "253249184813",
  appId: "1:253249184813:web:6df919c57d21ec9c81c4a4"
};

firebase.initializeApp(firebaseConfig);

export default firebase;