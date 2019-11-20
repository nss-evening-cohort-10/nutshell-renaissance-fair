import $ from 'jquery';
import staffsData from '../../helpers/data/staffsData';
import staffBuilder from '../staffBuilder/staffBuilder';

const getPreFilledStaffModal = (event) => {
  const staffId = event.target.id.split('update-')[1];
  console.error('staffId', staffId);
  staffsData.getStaffById(staffId)
    .then((response) => {
      $('#updateStaffModal').modal('show');
      const staff = response.data;
      $('#edit-staff-name').val(`${staff.name}`);
      $('#edit-staff-phone').val(`${staff.phone}`);
      $('#edit-staff-image-url').val(`${staff.imageUrl}`);
      $('#edit-staff-email').val(`${staff.email}`);
      $('#edit-employee-id').val(`${staff.employeeId}`);
      $('#edit-staff-role').val(`${staff.role}`);
      $('#edit-staff-location').val(`${staff.location}`);
      $('.update-staff-button').attr('id', staffId);
    })
    .catch((error) => console.error(error));
};

const updateStaffMember = (event) => {
  event.stopImmediatePropagation();
  const staffId = event.target.id;
  console.error('staffId', staffId);
  const updatedStaff = {
    name: $('#edit-staff-name').val(),
    phone: $('#edit-staff-phone').val(),
    imageUrl: $('#edit-staff-image-url').val(),
    email: $('#edit-staff-email').val(),
    employeeId: $('#edit-employee-id').val(),
    role: $('#edit-staff-role').val(),
    location: $('#edit-staff-location').val(),
  };
  console.error('updated staff', updatedStaff);
  staffsData.updateStaff(staffId, updatedStaff)
    .then(() => {
      $('#updateStaffModal').modal('hide');
      $('#staffs').removeClass('hide');
      staffBuilder.printStaffCards();
    })
    .catch((error) => console.error(error));
};

export default { getPreFilledStaffModal, updateStaffMember };
