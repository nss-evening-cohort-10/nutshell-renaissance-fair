import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllShows = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/shows.json`)
    .then((response) => {
      const shows = response.data;
      const showsWithIds = [];
      Object.keys(shows).forEach((fbId) => {
        shows[fbId].id = fbId;
        showsWithIds.push(shows[fbId]);
      });
      resolve(showsWithIds);
    })
    .catch((err) => reject(err));
});

export default { getAllShows };
