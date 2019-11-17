import firebase from 'firebase/app';
import 'firebase/auth';
import apiKeys from './helpers/apiKeys.json';
import '../styles/main.scss';
import 'bootstrap';
import souvenirData from './helpers/data/souvenirData';
import souvenir from './components/souvenirs/souvenirs';
import dashboard from './components/home-dashboard/dashboard';
import boardData from './helpers/data/boardData';
import events from './helpers/listeners/eventListeners';
import login from './components/Auth/auth';
import authData from './helpers/data/authData';
import logout from './components/Auth/logout';
import food from './components/Foods/foods';
import shows from './components/shows/shows';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  souvenirData.getSouvenirData();
  souvenir.buildSouvenirs();
  dashboard.buildTheDashboard(boardData.getBoards());
  events.eventListeners();
  login.logInButton();
  authData.checkLoginStatus();
  logout.logoutEvent();
  food.buildFoods();
  shows.buildShows();
};

init();
