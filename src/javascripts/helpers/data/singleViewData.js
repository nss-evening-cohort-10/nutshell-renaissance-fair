import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getSingleEventData = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/events.json`)
    .then((response) => {
      const events = response.data;
      const eventId = [];
      Object.keys(events).forEach((fbId) => {
        events[fbId].id = fbId;
        eventId.push(events[fbId]);
      });
      resolve();
    })
    .catch((err) => reject(err));
});

export default { getSingleEventData };
