import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';
import newHomePage from '../../components/newHomePage/newHomePage';

const authenticate = $('.logInButton');
const logout = $('.logout');


const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      logout.removeClass('hide');
      authenticate.addClass('hide');
      $('.createButton').removeClass('hide');
    } else {
      $('#eventHome').removeClass('eventHome');
      $('.eventVendor').removeClass('eventVendor');
      logout.addClass('hide');
      authenticate.removeClass('hide');
      newHomePage.makeHomeCard();
    }
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
