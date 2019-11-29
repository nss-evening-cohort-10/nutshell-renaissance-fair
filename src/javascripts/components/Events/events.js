import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import eventData from '../../helpers/data/eventData';
import utilities from '../../helpers/utilities';
import './events.scss';


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
          <p class="card-text">Date: ${event.date}</p>`;
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


export default { printEvents, addEvent };
