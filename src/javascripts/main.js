import firebase from 'firebase/app';
import 'firebase/auth';
import apiKeys from './helpers/apiKeys.json';
import '../styles/main.scss';
import 'bootstrap';
import souvenirData from './helpers/data/souvenirData';
import newHomePage from './components/newHomePage/newHomePage';
import login from './components/Auth/auth';
import authData from './helpers/data/authData';
import logout from './components/Auth/logout';
// import staffs from './components/staffBuilder/staffBuilder';
// import souvenirs from './components/souvenirs/souvenirs';
// import foods from './components/Foods/foods';
// import shows from './components/shows/shows';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  souvenirData.getSouvenirData();
  newHomePage.makeHomeCard();
  login.logInButton();
  authData.checkLoginStatus();
  logout.logoutEvent();
  // staffs.printStaffCards();
  // souvenirs.buildSouvenirs();
  // foods.buildFoods();
  // shows.printShows();
};

init();
