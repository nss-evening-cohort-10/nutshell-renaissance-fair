import souvenirData from '../../helpers/data/souvenirData';
import souvenirCard from './souvenirCard';
import utilities from '../../helpers/utilities';
import './souvenirs.scss';

const buildSouvenirs = () => {
  souvenirData.getSouvenirData()
    .then((souvenirs) => {
      let domString = '<h2 class="text-center">Souvenirs</h2>';
      domString += ' <div class="cardZone d-flex flex-wrap justify-content-center" id="souvenirCards">';
      souvenirs.forEach((souvenir) => {
        domString += souvenirCard.souvenirDomString(souvenir);
      });
      domString += '</div>';
      utilities.printToDom('souvenirs', domString);
    })
    .catch((error) => console.error(error));
};

export default { buildSouvenirs };
