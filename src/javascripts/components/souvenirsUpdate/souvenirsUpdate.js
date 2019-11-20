import $ from 'jquery';
import souvenirData from '../../helpers/data/souvenirData';
// import souvenirData from '../../helpers/data/souvenirData';

const getPreFilledModal = (event) => {
  const souvenirId = event.target.id.split('update-')[1];
  console.log('souvenirid', souvenirId);
  souvenirData.getSouvenirById(souvenirId)
    .then((response) => {
      $('#updateSouvenirModal').modal('show');
      const souvenir = response.data;
      $('#update-souvenir-name').val(souvenir.name);
      $('#update-image-url').val(souvenir.imageUrl);
      $('#update-souvenir-sku').val(souvenir.sku);
      $('#update-souvenir-price').val(souvenir.price);
      $('#update-souvenir-type').val(souvenir.type);
      $('#update-souvenir-quantity').val(souvenir.quantity);
      $('#update-souvenir-location').val(souvenir.location);
      $('.update-souvenir-button').attr('id', souvenirId);
    })
    .catch((error) => console.error(error));
};

export default { getPreFilledModal };
