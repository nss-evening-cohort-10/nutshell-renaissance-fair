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

const getShowById = (showId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/shows/${showId}.json`)
    .then((response) => {
      resolve(response.data);
    })
    .catch((err) => reject(err));
});

const postShow = (show) => axios.post(`${baseUrl}/shows.json`, show);

const deleteShow = (showId) => axios.delete(`${baseUrl}/shows/${showId}.json`);

export default {
  getAllShows,
  getShowById,
  postShow,
  deleteShow,
};
