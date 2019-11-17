import showsData from '../../helpers/data/showsData';
import utils from '../../helpers/utilities';
import showCard from '../showsCard/showsCard';

const buildShows = () => {
  showsData.getShows()
    .then((shows) => {
      let domString = '<h1>List of Shows</h1>';
      domString += '<div class="each-show">Shows';
      shows.forEach((show) => {
        domString += showCard.printCardsToDom(show);
      });
      domString += '</div>';
      utils.printToDom('shows', domString);
    })
    .catch((err) => console.error(err));
};

export default { buildShows };
