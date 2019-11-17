import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getShows = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/shows.json`)
    .then((response) => {
      const demShows = response.data;
      const shows = [];
      Object.keys(demShows).forEach((showId) => {
        demShows[showId].id = showId;
        shows.push(demShows[showId]);
      });
      resolve(shows);
    })
    .catch((err) => reject(err));
});
export default { getShows };
