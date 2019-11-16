import firebase from 'firebase/app';
import 'firebase/auth';
import apiKeys from './helpers/apiKeys.json';
import '../styles/main.scss';
import 'bootstrap';
import souvenirData from './helpers/data/souvenirData';
import souvenir from './components/souvenirs/souvenirs';
import login from './components/Auth/auth';
import authData from './helpers/data/authData';
import logout from './components/Auth/logout';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  souvenirData.getSouvenirData();
  souvenir.buildSouvenirs();
  login.logInButton();
  authData.checkLoginStatus();
  logout.logoutEvent();
};

init();
