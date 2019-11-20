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

const getStaffById = (staffId) => axios.get(`${baseUrl}/staffs/${staffId}.json`);
const addNewStaff = (newStaff) => axios.post(`${baseUrl}/staffs.json`, newStaff);
const deleteStaffCard = (staffMemberId) => axios.delete(`${baseUrl}/staffs/${staffMemberId}.json`);
const updateStaff = (staffId, updatedStaff) => axios.put(`${baseUrl}/staffs/${staffId}.json`, updatedStaff);

export default {
  getStaffById,
  getStaffsData,
  addNewStaff,
  deleteStaffCard,
  updateStaff,
};
