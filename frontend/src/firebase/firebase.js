import firebase from 'firebase'
import 'firebase/auth'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBj-FH4aFHdvsrSb91tWyypaKQrsN9gpMs',
  authDomain: 'clone-c76e9.firebaseapp.com',
  databaseURL: 'https://clone-c76e9.firebaseio.com',
  projectId: 'clone-c76e9',
  storageBucket: 'clone-c76e9.appspot.com',
  messagingSenderId: '270866213420',
  appId: '1:270866213420:web:16181a24d0f4f20d173f89',
  measurementId: 'G-GFR2PXCVT8',
})

export const auth = firebase.auth()
