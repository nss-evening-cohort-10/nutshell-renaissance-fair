import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getStaffsData = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/staffs.json`)
    .then((response) => {
      const theStaffs = response.data;
      const staffs = [];
      Object.keys(theStaffs).forEach((fbId) => {
        theStaffs[fbId].id = fbId;
        staffs.push(theStaffs[fbId]);
      });
      resolve(staffs);
      console.log(staffs);
    })
    .catch((error) => reject(error));
});

const addNewStaff = (newStaff) => axios.post(`${baseUrl}/staffs.json`, newStaff);

export default { getStaffsData, addNewStaff };
