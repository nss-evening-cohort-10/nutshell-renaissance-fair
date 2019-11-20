import firebase from 'firebase/app';
import 'firebase/auth';
import souvenirData from '../../helpers/data/souvenirData';
import souvenirCard from './souvenirCard';
import utilities from '../../helpers/utilities';
import './souvenirs.scss';

const buildSouvenirs = () => {
  const userSignedIn = firebase.auth().currentUser;
  souvenirData.getSouvenirData()
    .then((souvenirs) => {
      let domString = '';
      if (userSignedIn) {
        domString = '<h2 class="text-center">Souvenirs</h2>';
        domString += `<div class="d-flex justify-content-center"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addSouvenirModal">
      Add New Souvenir
    </button></div>`;
        domString += ' <div class="cardZone d-flex flex-wrap justify-content-center" id="souvenirCards">';
      } else {
        domString = '<h2 class="text-center">Souvenirs</h2>';
      } domString += ' <div class="cardZone d-flex flex-wrap justify-content-center" id="souvenirCards">';
      souvenirs.forEach((souvenir) => {
        domString += souvenirCard.souvenirDomString(souvenir);
      });
      domString += '</div>';
      utilities.printToDom('souvenirs', domString);
    })
    .catch((error) => console.error(error));
};

export default { buildSouvenirs };
