import firebase from 'firebase/app';
import 'firebase/auth';
import apiKeys from './helpers/apiKeys.json';
import '../styles/main.scss';
import 'bootstrap';
import souvenirData from './helpers/data/souvenirData';
import souvenir from './components/souvenirs/souvenirs';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  souvenirData.getSouvenirData();
  souvenir.buildSouvenirs();
};

init();
