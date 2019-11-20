import $ from 'jquery';
import souvenirData from '../../helpers/data/souvenirData';
// import souvenirData from '../../helpers/data/souvenirData';
import build from '../souvenirs/souvenirs';

const getPreFilledModal = (event) => {
  const souvenirId = event.target.id.split('update-')[1];
  souvenirData.getSouvenirById(souvenirId)
    .then((response) => {
      $('#updateSouvenirModal').modal('show');
      const souvenir = response.data;
      $('#update-souvenir-name').val(souvenir.name);
      $('#update-image-url').val(souvenir.imageUrl);
      $('#update-sku').val(souvenir.sku);
      $('#update-souvenir-price').val(souvenir.price);
      $('#update-souvenir-type').val(souvenir.type);
      $('#update-souvenir-quantity').val(souvenir.quantity);
      $('#update-souvenir-location').val(souvenir.location);
      $('.update-souvenir-button').attr('id', souvenirId);
    })
    .catch((error) => console.error(error));
};

const updateSouvenirItem = (event) => {
  event.stopImmediatePropagation();
  const souvenirId = event.target.id;
  const updatedSouvenir = {
    name: $('#update-souvenir-name').val(),
    imageUrl: $('#update-image-url').val(),
    sku: $('#update-sku').val(),
    price: $('#update-souvenir-price').val(),
    type: $('#update-souvenir-type').val(),
    quantity: $('#update-souvenir-quantity').val(),
    location: $('#update-souvenir-location').val(),
  };
  souvenirData.updateSouvenir(souvenirId, updatedSouvenir)
    .then(() => {
      $('#updateSouvenirModal').modal('hide');
      $('#souvenirs').removeClass('hide');
      build.buildSouvenirs();
    })
    .catch((error) => console.error(error));
};

export default { getPreFilledModal, updateSouvenirItem };
