import firebase from 'firebase/app';
import 'firebase/auth';
import apiKeys from './helpers/apiKeys.json';
import '../styles/main.scss';
import 'bootstrap';
import souvenirData from './helpers/data/souvenirData';
import dashboard from './components/home-dashboard/dashboard';
import boardData from './helpers/data/boardData';
import login from './components/Auth/auth';
import authData from './helpers/data/authData';
import logout from './components/Auth/logout';
import update from './components/souvenirsUpdate/souvenirsUpdate';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  souvenirData.getSouvenirData();
  dashboard.buildTheDashboard(boardData.getBoards());
  update.getPreFilledModal();
  login.logInButton();
  authData.checkLoginStatus();
  logout.logoutEvent();
};

init();
