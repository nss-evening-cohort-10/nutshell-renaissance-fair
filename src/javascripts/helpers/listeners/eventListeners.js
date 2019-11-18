import $ from 'jquery';
import addS from '../../components/newSouvenir/newSouvenir';
import deleteS from '../../components/deleteSouvenir/deleteSouvenir';

const eventListeners = () => {
  $('#Shows-button').click(() => {
    $('#boards').addClass('hide');
    $('#shows').removeClass('hide');
  });
  $('#Souvenirs-button').click(() => {
    console.error('souvenir button');
    $('#boards').addClass('hide');
    $('#souvenirs').removeClass('hide');
  });
  $('#Food-button').click(() => {
    $('#boards').addClass('hide');
    $('#foods').removeClass('hide');
  });
  $('#Staff-button').click(() => {
    $('#boards').addClass('hide');
    $('#staffs').removeClass('hide');
  });
  $('#add-new-souvenir').click(addS.addNewSouvenirCard);
  $('body').on('click', '.deleteSouvenir', deleteS.deleteSingleSouvenir);
};

export default { eventListeners };
