import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getFoods = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/foods.json`)
    .then((response) => {
      const theFoods = response.data;
      const foods = [];
      Object.keys(theFoods).forEach((fbId) => {
        theFoods[fbId].id = fbId;
        foods.push(theFoods[fbId]);
      });
      resolve(foods);
    })
    .catch((error) => reject(error));
});

const deleteFood = (foodId) => axios.delete(`${baseUrl}/foods/${foodId}.json`);

const addNewFood = (newFood) => axios.post(`${baseUrl}/foods.json`, newFood);

const updateFood = (foodId, updatedFood) => axios.put(`${baseUrl}/foods/${foodId}.json`, updatedFood);

const getFoodById = (foodId) => axios.get(`${baseUrl}/foods/${foodId}.json`);

export default {
  getFoods,
  deleteFood,
  addNewFood,
  updateFood,
  getFoodById,
};
