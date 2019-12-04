import $ from 'jquery';
import addS from '../../components/newSouvenir/newSouvenir';
import deleteS from '../../components/deleteSouvenir/deleteSouvenir';
import staffDelete from '../../components/staffDELETE/staffDELETE';
import addStaff from '../../components/staffAdd/staffAdd';
import update from '../../components/souvenirsUpdate/souvenirsUpdate';
import staffUpdate from '../../components/staffUpdate/staffUpdate';
import shows from '../../components/shows/shows';
import events from '../../components/Events/events';
import eventFood from '../../components/eventFood/eventfood';

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

  $('#events').on('click', '.viewEvent', (e) => {
    $('#events').addClass('hide');
    $('#singleEventView').removeClass('hide');
    events.getSingleEvent(e.target.id);
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
  $('body').on('click', '#update-show', shows.updateShowEvent);
  $('body').on('click', '#add-new-event', events.addEvent);
  $('body').on('click', '.editEvent', events.openEventsModal);
  $('body').on('click', '.update-event-button', events.updateAEvent);
  $('body').on('click', '.deleteEvent', events.deleteAnEvent);
  $('#body').click('.fooAddBtn', eventFood.addEventFoodModal);
  // $('.staffCard').hover(() => {
  //   $('.staff-delete-button').removeClass('hide');
  //   $('.edit-staff-button').removeClass('hide');
  // });
};

export default { eventListeners };
