import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const logInButton = () => {
  $('.logInButton').click(signMeIn);
};

export default { logInButton };
