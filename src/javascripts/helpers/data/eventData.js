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
const getEventById = (eventId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/events/${eventId}.json`)
    .then((response) => {
      resolve(response.data);
    })
    .catch((err) => reject(err));
});
const updateEvent = (eventId, updatedEvent) => axios.put(`${baseUrl}/events/${eventId}.json`, updatedEvent);
const postEvent = (event) => axios.post(`${baseUrl}/events.json`, event);
const deleteEvent = (eventId) => axios.delete(`${baseUrl}/events/${eventId}.json`);

export default {
  getAllEvents,
  updateEvent,
  getEventById,
  postEvent,
  deleteEvent,
};
