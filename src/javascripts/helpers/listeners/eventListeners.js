import $ from 'jquery';
import addS from '../../components/newSouvenir/newSouvenir';
import deleteS from '../../components/deleteSouvenir/deleteSouvenir';
import staffDelete from '../../components/staffDELETE/staffDELETE';
import addStaff from '../../components/staffAdd/staffAdd';
import update from '../../components/souvenirsUpdate/souvenirsUpdate';
import staffUpdate from '../../components/staffUpdate/staffUpdate';
import shows from '../../components/shows/shows';

const eventListeners = () => {
  $('#Shows-button').click(() => {
    $('#boards').addClass('hide');
    $('#shows').removeClass('hide');
  });
  $('#Souvenirs-button').click(() => {
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
  $('body').on('click', '.update-souvenir-button', update.updateSouvenirItem);
  $('body').on('click', '.staff-edit', staffUpdate.getPreFilledStaffModal);
  $('body').on('click', '.update-staff-button', staffUpdate.updateStaffMember);
  $('body').on('click', '#add-new-show', shows.addShowEvent);
  $('body').on('click', '.deleteShow', shows.deleteShowEvent);
  $('body').on('click', '.editShow', shows.editShowEvent);
  // $('.staffCard').hover(() => {
  //   $('.staff-delete-button').removeClass('hide');
  //   $('.edit-staff-button').removeClass('hide');
  // });
};

export default { eventListeners };
