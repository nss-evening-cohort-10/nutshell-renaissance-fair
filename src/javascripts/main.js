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


const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  souvenirData.getSouvenirData();
  souvenir.buildSouvenirs();
  dashboard.buildTheDashboard(boardData.getBoards());
  events.eventListeners();
};

init();
