import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllEvents = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/events.json`)
    .then((response) => {
      const events = response.data;
      const eventsWithIds = [];
      Object.keys(events).forEach((fbId) => {
        events[fbId].id = fbId;
        eventsWithIds.push(events[fbId]);
      });
      resolve(eventsWithIds);
    })
    .catch((err) => reject(err));
});


export default { getAllEvents };
