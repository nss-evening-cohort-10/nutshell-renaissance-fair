import staffData from '../../helpers/data/staffsData';
import staffBuilder from '../staffBuilder/staffBuilder';

const deleteStaffMember = (e) => {
  const staffMemberId = e.target.id;
  staffData.deleteStaffCard(staffMemberId)
    .then(() => {
      staffBuilder.printStaffCards();
    })
    .catch((error) => console.error(error));
};

export default { deleteStaffMember };
