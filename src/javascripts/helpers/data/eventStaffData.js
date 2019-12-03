import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventStaffByEventId = (eventId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/eventStaff.json?orderBy="eventId"&equalTo="${eventId}"`)
    .then((response) => {
      const eventStaff = response.data;
      const staff = [];
      Object.keys(eventStaff).forEach((fbId) => {
        eventStaff[fbId].id = fbId;
        staff.push(eventStaff[fbId]);
      });
      resolve(staff);
    })
    .catch((err) => reject(err));
});

export default { getEventStaffByEventId };
