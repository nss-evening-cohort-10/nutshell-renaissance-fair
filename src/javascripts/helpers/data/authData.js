import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';
import newHomePage from '../../components/newHomePage/newHomePage';
import staffs from '../../components/staffBuilder/staffBuilder';
import souvenirs from '../../components/souvenirs/souvenirs';
import foods from '../../components/Foods/foods';
import shows from '../../components/shows/shows';
import events from '../../components/Events/events';

const authenticate = $('.logInButton');
const logout = $('.logout');


const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      logout.removeClass('hide');
      authenticate.addClass('hide');
      $('.createButton').removeClass('hide');
    } else {
      $('.eventHome').removeClass('eventHome');
      $('.eventVendor').removeClass('eventVendor');
      logout.addClass('hide');
      authenticate.removeClass('hide');
      newHomePage.makeHomeCard();
    }
    events.printEvents();
    staffs.printStaffCards();
    souvenirs.buildSouvenirs();
    foods.buildFoods();
    shows.printShows();
  });
};

const onload = () => {
  $('#events').addClass('hide');
  $('#souvenirs').addClass('hide');
  $('#foods').addClass('hide');
  $('#shows').addClass('hide');
  $('#staffs').addClass('hide');
};

window.onload = onload;

export default { checkLoginStatus };
