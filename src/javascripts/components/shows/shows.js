import showData from '../../helpers/data/showData';

const printShows = () => {
  showData.getAllShows()
    .then((shows) => {
      console.log(shows);
    })
    .catch((err) => console.error('Error getting shows', err));
};

export default { printShows };
