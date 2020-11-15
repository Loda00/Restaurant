import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDMRO758TEzG9rvfuXauMeSGi-1ynbkRug",
  authDomain: "tenedores-11ca4.firebaseapp.com",
  databaseURL: "https://tenedores-11ca4.firebaseio.com",
  projectId: "tenedores-11ca4",
  storageBucket: "tenedores-11ca4.appspot.com",
  messagingSenderId: "406917357984",
  appId: "1:406917357984:web:2b1eb9ae912956c48444c5"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)