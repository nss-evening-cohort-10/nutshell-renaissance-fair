import $ from 'jquery';
import souvenirData from '../../helpers/data/souvenirData';
import build from '../souvenirs/souvenirs';


const addNewSouvenirCard = (e) => {
  e.stopImmediatePropagation();
  const newSouvenir = {
    name: $('#souvenir-name').val(),
    imageUrl: $('#image-url').val(),
    description: $('#souvenir-description').val(),
    price: $('#souvenir-price').val(),
    type: $('#souvenir-type').val(),
    quantity: $('#souvenir-quantity').val(),
    location: $('#souvenir-location').val(),
  };
  console.log(newSouvenir);
  souvenirData.addNewSouvenir(newSouvenir)
    .then(() => {
      $('#addSouvenirModal').modal('hide');
      $('#souvenirs').removeClass('hide');
      build.buildSouvenirs();
    })
    .catch((error) => console.error(error));
};

export default { addNewSouvenirCard };
