import moment from 'moment';
import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import showData from '../../helpers/data/showData';
import utilities from '../../helpers/utilities';
import './shows.scss';

const buildShowCard = (show) => {
  const userSignedIn = firebase.auth().currentUser;

  let domString = `
    <div class="col-4">
      <div class="card">
        <img class="card-img-top" src="${show.imageUrl}" />
        <div class="card-body">
          <h2 class="card-title">${show.name}</h2>
          <p class="card-text">Location: ${show.location}</p>
          <p class="card-text">Date: ${moment(show.date).format('ddd, MMMM D, YYYY')}</p>
          <p class="card-text">Price: $${show.ticket_Price}</p>`;

  if (userSignedIn) {
    domString += `
          <button class="btn btn-outline-warning">Edit</button>
          <button class="btn btn-outline-danger deleteShow" id="${show.id}">Delete</button>
    `;
  }

  domString += `
        </div>
      </div>
    </div>
  `;

  return domString;
};

const printShows = () => {
  const userSignedIn = firebase.auth().currentUser;
  showData.getAllShows()
    .then((shows) => {
      let domString = '<div class="show-header text-center"><h1 class="header">Shows</h1>';
      if (userSignedIn) {
        domString += '<button class="btn btn-primary" id="add-show" data-toggle="modal" data-target="#add-show-modal">Add New Show</button>';
      }
      domString += '</div>';
      domString += '<div class="container"><div class="row">';
      shows.forEach((show) => {
        domString += buildShowCard(show);
      });

      domString += '</div></div>';
      utilities.printToDom('shows', domString);
    })
    .catch((err) => console.error('Error getting shows', err));
};

const addShowEvent = (e) => {
  e.stopImmediatePropagation();
  const newShow = {
    name: $('#show-name').val(),
    location: $('#show-location').val(),
    date: $('#show-date').val(),
    ticket_Price: $('#show-price').val() * 1,
    imageUrl: $('#show-image-url').val(),
  };
  showData.postShow(newShow)
    .then(() => {
      $('#add-show-modal').modal('hide');
      printShows();
    })
    .catch((err) => console.error('Error adding new show', err));
};

const deleteShowEvent = (e) => {
  const idToDelete = e.target.id;
  showData.deleteShow(idToDelete)
    .then(() => {
      printShows();
    })
    .catch((err) => console.error('Error deleting show', err));
};

export default { printShows, addShowEvent, deleteShowEvent };
