import moment from 'moment';
import firebase from 'firebase/app';
import 'firebase/auth';
import showData from '../../helpers/data/showData';
import utilities from '../../helpers/utilities';
import './shows.scss';

const buildShowCard = (show) => {
  const domString = `
    <div class="col-4">
      <div class="card">
        <img class="card-img-top" src="${show.imageUrl}" />
        <div class="card-body">
          <h2 class="card-title">${show.name}</h2>
          <p class="card-text">Location: ${show.location}</p>
          <p class="card-text">Date: ${moment(show.date).format('ddd, MMMM D, YYYY')}</p>
          <p class="card-text">Price: $${show.ticket_Price}</p>
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
        domString += '<button class="btn btn-primary">Add New Show</button>';
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

export default { printShows };
