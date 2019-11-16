import souvenirData from '../../helpers/data/souvenirData';
import souvenirCard from './souvenirCard';
import utilities from '../../helpers/utilities';

const buildSouvenirs = () => {
  souvenirData.getSouvenirData()
    .then((souvenirs) => {
      let domString = '<h2>Souvenirs</h2>';
      domString += '<div id="souvenirCards" class="d-flex flex-wrap">';
      souvenirs.forEach((souvenir) => {
        domString += souvenirCard.souvenirDomString(souvenir);
      });
      domString += '</div>';
      utilities.printToDom('souvenirs', domString);
    })
    .catch((error) => console.error(error));
};

export default { buildSouvenirs };
