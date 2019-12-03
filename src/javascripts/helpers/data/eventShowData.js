import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventShowByEventId = (eventId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/eventShow.json?orderBy="eventId"&equalTo="${eventId}"`)
    .then((response) => {
      const eventShow = response.data;
      const show = [];
      Object.keys(eventShow).forEach((fbId) => {
        eventShow[fbId].id = fbId;
        show.push(eventShow[fbId]);
      });
      resolve(show);
    })
    .catch((err) => reject(err));
});

export default { getEventShowByEventId };
