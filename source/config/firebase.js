
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import  Constants  from "expo-constants";

const firebaseConfig =  {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.measurementId,
  appId: Constants.manifest.extra.appId,
  measurementId: Constants.manifest.extra.measurementId
};


  //inicialise firebase
  initializeApp(firebaseConfig);

  //esporte firestore instance 
  export const baseDatos = getFirestore ();

  