import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';

const authenticate = $('.logInButton');
// const souvenirs = $('#souvenirs');
const foods = $('#foods');
const shows = $('#shows');
const staff = $('#staffs');
const logout = $('.logout');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      logout.removeClass('hide');
      authenticate.addClass('hide');
      // souvenirs.addClass('hide');
      foods.addClass('hide');
      shows.addClass('hide');
      staff.addClass('hide');
    } else {
      logout.addClass('hide');
      authenticate.removeClass('hide');
      // souvenirs.addClass('hide');
      foods.addClass('hide');
      shows.addClass('hide');
      staff.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
