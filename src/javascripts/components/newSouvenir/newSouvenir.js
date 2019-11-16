import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import souvenirData from '../../helpers/data/souvenirData';


const addNewBoardByUser = (e) => {
  e.stopImmediatePropagation();
  const { uid } = firebase.auth().currentUser;
  const newSouvenir = {
    name: $('#souvenir-name').val(),
    imageUrl: $('#image-url').val(),
    description: $('#souvenir-description').val(),
    price: $('#souvenir-price').val(),
    type: $('#souvenir-type').val(),
    quantitiy: $('#souvenir-quantity').val(),
    location: $('#souvenir-location').val(),
  };
  console.log(newSouvenir);
  souvenirData.addNewSouvenir(newSouvenir)
    .then(() => {
      $('#addSouvenirModal').modal('hide');
      $('#souvenirs').removeClass('hide');
    })
    .catch((error) => console.error(error));
};

export default { addNewBoardByUser };
