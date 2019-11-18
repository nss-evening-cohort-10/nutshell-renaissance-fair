import staffsData from '../../helpers/data/staffsData';
import staffsCard from '../staffsCard/staffsCard';
import utilities from '../../helpers/utilities';
import './staffBuilder.scss';

const printStaffCards = () => {
  staffsData.getStaffsData()
    .then((staffs) => {
      let domString = '<h1 class="text-center" id="staff-header">Staff</h1>';
      domString += `<div id="addStaffDiv" class="d-flex justify-content-center"><button id="addStaffButton" type="button" class="btn btn-secondary" data-toggle="modal" data-target="#addStaffModal">
      Add New Staff
    </button></div>`;
      domString += ' <div class="cardZone d-flex flex-wrap justify-content-center" id="staffsCards">';
      staffs.forEach((staff) => {
        domString += staffsCard.staffsCard(staff);
      });
      domString += '</div>';
      domString += `<div id="footer" class="text-center">
      <img id="logo" src="https://user-images.githubusercontent.com/21040719/68823262-de054f00-0658-11ea-800e-575f31684130.png">
      <p id="street">301 Plus Park Blvd</p>
      <p id="city">Nashville, TN 37201</p>
       </div>`;
      utilities.printToDom('staffs', domString);
    })
    .catch((error) => console.error(error));
};

export default { printStaffCards };
