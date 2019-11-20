import $ from 'jquery';
import addS from '../../components/newSouvenir/newSouvenir';
import deleteS from '../../components/deleteSouvenir/deleteSouvenir';
import staffDelete from '../../components/staffDELETE/staffDELETE';
import addStaff from '../../components/staffAdd/staffAdd';
import update from '../../components/souvenirsUpdate/souvenirsUpdate';

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
  $('body').on('click', '.staff-delete-button', staffDelete.deleteStaffMember);
  $('#add-new-staff').click(addStaff.addStaffCard);
  $('body').on('click', '.updateSouvenirButton', update.getPreFilledModal);

  // $('.staffCard').hover(() => {
  //   $('.staff-delete-button').removeClass('hide');
  //   $('.edit-staff-button').removeClass('hide');
  // });
};

export default { eventListeners };
