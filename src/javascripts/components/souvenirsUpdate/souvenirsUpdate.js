import $ from 'jquery';
import axios from 'axios';
import apiKeys from '../../helpers/apiKeys.json';
import souvenirData from '../../helpers/data/souvenirData';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPreFilledModal = (event) => {
  const souvenirId = event.target.id;
  axios.get(`${baseUrl}/souvenirs/${souvenirId}.json`)
    .then((souvenirs) => {
      const updatedSouvenir = {
        name: $('#souvenir-name').val(`${souvenirs.name}`),
        imageUrl: $('#image-url').val(`${souvenirs.imageUrl}`),
        sku: $('#souvenir-sku').val(`${souvenirs.sku}`),
        price: $('#souvenir-price').val(`${souvenirs.price}`),
        type: $('#souvenir-type').val(`${souvenirs.type}`),
        quantity: $('#souvenir-quantity').val(`${souvenirs.quantity}`),
        location: $('#souvenir-location').val(`${souvenirs.location}`),
      };
      console.log(updatedSouvenir);
    })
    .catch((error) => console.error(error));
};

export default { getPreFilledModal };
