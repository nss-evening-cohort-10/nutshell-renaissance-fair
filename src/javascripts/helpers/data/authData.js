import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';
import staffs from '../../components/staffBuilder/staffBuilder';
import souvenirs from '../../components/souvenirs/souvenirs';
import foods from '../../components/Foods/foods';
import dashboard from '../../components/home-dashboard/dashboard';
import boardData from './boardData';
import events from '../listeners/eventListeners';
import shows from '../../components/shows/shows';

const authenticate = $('.logInButton');
const logout = $('.logout');


const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      logout.removeClass('hide');
      authenticate.addClass('hide');
      $('.createButton').removeClass('hide');
    } else {
      logout.addClass('hide');
      authenticate.removeClass('hide');
    }
    dashboard.buildTheDashboard(boardData.getBoards());
    staffs.printStaffCards();
    souvenirs.buildSouvenirs();
    foods.buildFoods();
    events.eventListeners();
    shows.printShows();
  });
};

const onload = () => {
  $('#souvenirs').addClass('hide');
  $('#foods').addClass('hide');
  $('#shows').addClass('hide');
  $('#staffs').addClass('hide');
};

window.onload = onload;

export default { checkLoginStatus };
