import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventFoodByEventId = (eventId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/eventFood.json?orderBy="eventId"&equalTo="${eventId}"`)
    .then((response) => {
      const eventFood = response.data;
      const food = [];
      Object.keys(eventFood).forEach((fbId) => {
        eventFood[fbId].id = fbId;
        food.push(eventFood[fbId]);
      });
      resolve(food);
    })
    .catch((err) => reject(err));
});

const getEventFoods = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/eventFood.json`)
    .then((response) => {
      const eventFood = response.data;
      const food = [];
      Object.keys(eventFood).forEach((fbId) => {
        eventFood[fbId].id = fbId;
        food.push(eventFood[fbId]);
      });
      resolve(food);
    })
    .catch((err) => reject(err));
});

export default { getEventFoodByEventId, getEventFoods };
