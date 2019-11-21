import moment from 'moment';
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
  showData.getAllShows()
    .then((shows) => {
      let domString = '<h1 class="text-center header">Shows</h1><div class="container"><div class="row">';

      shows.forEach((show) => {
        domString += buildShowCard(show);
      });

      domString += '</div></div>';
      utilities.printToDom('shows', domString);
    })
    .catch((err) => console.error('Error getting shows', err));
};

export default { printShows };
