import souvenirData from '../../helpers/data/souvenirData';
import build from '../souvenirs/souvenirs';

const deleteSingleSouvenir = (event) => {
  event.preventDefault();
  const singleSouvenir = event.target.id;
  souvenirData.deleteSouvenir(singleSouvenir)
    .then(() => {
      build.buildSouvenirs();
    })
    .catch((error) => console.error(error));
};

export default { deleteSingleSouvenir };
