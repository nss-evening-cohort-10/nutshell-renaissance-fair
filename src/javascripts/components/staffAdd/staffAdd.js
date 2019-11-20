import $ from 'jquery';
import staffBuilder from '../staffBuilder/staffBuilder';
import staffsData from '../../helpers/data/staffsData';

const addStaffCard = (e) => {
  e.stopImmediatePropagation();
  const newStaffMember = {
    name: $('#staff-name').val(),
    phone: $('#staff-phone').val(),
    imageUrl: $('#staff-image-url').val(),
    email: $('#staff-email').val(),
    employeeId: $('#employee-id').val(),
    role: $('#staff-role').val(),
    location: $('#staff-location').val(),
  };
  staffsData.addNewStaff(newStaffMember)
    .then(() => {
      $('#addStaffModal').modal('hide');
      $('#staffs').removeClass('hide');
      staffBuilder.printStaffCards();
    })
    .catch((error) => console.error(error));
};

export default { addStaffCard };
