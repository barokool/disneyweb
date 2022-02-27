import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCyQDUlZqHqAT-4d3oIundAr1V_vXZTitg",
    authDomain: "disneyclone-63b82.firebaseapp.com",
    projectId: "disneyclone-63b82",
    storageBucket: "disneyclone-63b82.appspot.com",
    messagingSenderId: "602838694309",
    appId: "1:602838694309:web:eae70656052d12716ad04c"
  };


const app = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app)
const db = getFirestore(app)

//missing storage

export {googleProvider,auth,db}
