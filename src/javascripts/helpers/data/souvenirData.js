import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getSouvenirData = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/souvenirs.json`)
    .then((response) => {
      const theSouvenirs = response.data;
      const souvenirs = [];
      Object.keys(theSouvenirs).forEach((fbId) => {
        theSouvenirs[fbId].id = fbId;
        souvenirs.push(theSouvenirs[fbId]);
      });
      resolve(souvenirs);
      console.log(souvenirs);
    })
    .catch((error) => reject(error));
});

const getSouvenirById = (souvenirId) => axios.get(`${baseUrl}/souvenirs/${souvenirId}.json`);

const addNewSouvenir = (newSouvenir) => axios.post(`${baseUrl}/souvenirs.json`, newSouvenir);

const deleteSouvenir = (singleSouvenir) => axios.delete(`${baseUrl}/souvenirs/${singleSouvenir}.json`);

export default {
  getSouvenirData,
  addNewSouvenir,
  deleteSouvenir,
  getSouvenirById,
};
