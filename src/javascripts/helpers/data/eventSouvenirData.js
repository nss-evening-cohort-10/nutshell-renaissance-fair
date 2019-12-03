import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventSouvenirByEventId = (eventId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/eventSouvenir.json?orderBy="eventId"&equalTo="${eventId}"`)
    .then((response) => {
      const eventSouvenir = response.data;
      const souvenir = [];
      Object.keys(eventSouvenir).forEach((fbId) => {
        eventSouvenir[fbId].id = fbId;
        souvenir.push(eventSouvenir[fbId]);
      });
      resolve(souvenir);
    })
    .catch((err) => reject(err));
});

export default { getEventSouvenirByEventId };
