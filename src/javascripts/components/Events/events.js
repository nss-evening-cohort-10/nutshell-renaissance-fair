import moment from 'moment';
import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import eventData from '../../helpers/data/eventData';
import utilities from '../../helpers/utilities';
import './events.scss';


const openEventsModal = (e) => {
  const eventId = e.target.id;
  $('#update-event-modal').modal('show');
  eventData.getEventById(eventId)
    .then((event) => {
      $('#update-event-image').val(event.image);
      $('#update-event-name').val(event.name);
      $('#update-event-location').val(event.location);
      $('#update-event-date').val(event.date);
      $('#update-event-modal').find('.event-modal-footer').attr('id', eventId);
    })
    .catch((error) => console.error(error));
};

const updateAEvent = (e) => {
  const eventToUpdate = e.target.parentNode.id;

  const updatedEvent = {
    image: $('#update-event-image').val(),
    name: $('#update-event-name').val(),
    location: $('#update-event-location').val(),
    date: $('#update-event-date').val(),
  };

  eventData.updateEvent(eventToUpdate, updatedEvent)
    .then(() => {
      $('#update-event-modal').modal('hide');
      // eslint-disable-next-line no-use-before-define
      printEvents();
    })
    .catch((error) => console.error(error));
};

const addEvent = (e) => {
  e.stopImmediatePropagation();
  const newEvent = {
    image: $('#add-event-image').val(),
    name: $('#add-event-name').val(),
    location: $('#add-event-location').val(),
    date: $('#add-event-date').val(),
  };
  eventData.postEvent(newEvent)
    .then(() => {
      $('#add-event-modal').modal('hide');
      // eslint-disable-next-line no-use-before-define
      printEvents();
    })
    .catch((err) => console.error('Error adding new event', err));
};


const buildEventCard = (event) => {
  const userSignedIn = firebase.auth().currentUser;
  let domString = `
    <div class="col-4">
      <div class="card">
        <img class="card-img-top" src="${event.image}" />
        <div class="card-body">
          <h2 class="card-title">${event.name}</h2>
          <p class="card-text">Location: ${event.location}</p>
          <p class="card-text">Date: ${moment(event.date).format('ddd, MMMM D, YYYY')}</p>`;
  if (userSignedIn) {
    domString += `
          <button class="btn btn-outline-warning editEvent" id="${event.id}">Edit</button>
          <button class="btn btn-outline-danger deleteEvent" id="${event.id}">Delete</button>
    `;
  }
  domString += `
        </div>
      </div>
    </div>
  `;
  return domString;
};

const printEvents = () => {
  const userSignedIn = firebase.auth().currentUser;
  eventData.getAllEvents()
    .then((events) => {
      let domString = '<div class="event-header text-center"><h1 class="header">Events</h1>';
      if (userSignedIn) {
        domString += '<button class="btn btn-primary" id="add-event" data-toggle="modal" data-target="#add-event-modal">Add New Event</button>';
      }
      domString += '</div>';
      domString += '<div class="container"><div class="row">';
      events.forEach((event) => {
        domString += buildEventCard(event);
      });

      domString += '</div></div>';
      utilities.printToDom('events', domString);
    })
    .catch((err) => console.error('Error getting events', err));
};


export default {
  printEvents,
  addEvent,
  openEventsModal,
  updateAEvent,
};
