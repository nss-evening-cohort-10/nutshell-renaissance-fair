import firebase from 'firebase';
import 'bootstrap';

import apiKeys from './helpers/apiKeys.json';
import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
};

init();
