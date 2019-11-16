import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

const authenticate = $('.logInButton');
const logout = $('.logout');

const logoutEvent = () => {
  logout.click((e) => {
    e.preventDefault();
    firebase.auth().signOut()
      .then(() => {
        authenticate.removeClass('hide');
        logout.addClass('hide');
      }).catch((err) => console.error('your still logged in', err));
  });
};

export default { logoutEvent };
