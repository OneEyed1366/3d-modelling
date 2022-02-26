// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import firebase from 'firebase/compat';
import initializeApp = firebase.initializeApp;

const firebaseConfig = {
  apiKey: 'AIzaSyApUOmUNmqoSX0CbDTO5CFN_9PsU58tGOc',
  authDomain: 'd-modelling-48789.firebaseapp.com',
  projectId: 'd-modelling-48789',
  storageBucket: 'd-modelling-48789.appspot.com',
  messagingSenderId: '241707658945',
  appId: '1:241707658945:web:f38be95e38da3503462e40',
  measurementId: 'G-NYD1HBH9J3',
};

const app = initializeApp(firebaseConfig);

getAnalytics(app);
