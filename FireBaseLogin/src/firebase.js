import firebase from '@react-native-firebase/app'



let firebaseConfig = {
    apiKey: "AIzaSyCLKoOMzqtv_oRbFKVBfU2W-sCkmd5UeFk",
    authDomain: "meuapp-69b89.firebaseapp.com",
    databaseURL: "https://meuapp-69b89-default-rtdb.firebaseio.com",
    projectId: "meuapp-69b89",
    storageBucket: "meuapp-69b89.appspot.com",
    messagingSenderId: "357326520117",
    appId: "1:357326520117:web:c2a493c04183c457d0d67c",
    measurementId: "G-WDY69C8YLF"
  };
  
  firebase.initializeApp(firebaseConfig); 
 
  export default firebase;