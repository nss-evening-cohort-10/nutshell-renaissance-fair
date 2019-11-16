import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';

const authenticate = $('.logInButton');
const logout = $('.logout');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      logout.removeClass('hide');
      authenticate.addClass('hide');
    } else {
      logout.addClass('hide');
      authenticate.removeClass('hide');
    }
  });
};

export default { checkLoginStatus };
