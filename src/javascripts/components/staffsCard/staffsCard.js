import firebase from 'firebase/app';
import 'firebase/auth';
import './staffsCard.scss';

const staffsCard = (staffs) => {
  let domString = '';

  const userSignedIn = firebase.auth().currentUser;
  if (userSignedIn) {
    domString += `
    
    <div class="card col-2 staffCard" id="${staffs.id}">
    <div class="d-flex rounded justify-content-center">
    <img src=${staffs.imageUrl} class="card-img-top d-flex staff-image rounded-circle align-content-center" alt="${staffs.name}">
    </div>
    
    <div class="card-body staffCardBody text-center">
    <h5 class="title text-center">${staffs.name}</h5>
    <p class="card-text staffId">Id: ${staffs.id}</p>
    <p class="card-text phone">Phone: ${staffs.phone}</p>
    <p class="card-footer email">Email: ${staffs.email}</p>
    <button id="update-${staffs.id}" type="button" class="btn btn-outline-warning staff-edit" data-toggle="modal" data-target="#updateStaffModal">
      Edit
    </button>
    <button id="${staffs.id}" type="button" class="btn btn-outline-danger staff-delete-button">Delete</button>
    </div>
    </div>`;
  } else {
    domString += `
    <div class="card col-2 staffCard">
    <div class="d-flex rounded justify-content-center">
    <img src=${staffs.imageUrl} class="card-img-top d-flex staff-image rounded-circle align-content-center" alt="${staffs.name}">
    </div>
    
    <div class="card-body staffCardBody text-center">
    <h5 class="title text-center">${staffs.name}</h5>
    <p class="card-text staffId">Id: ${staffs.id}</p>
    <p class="card-text phone">Phone: ${staffs.phone}</p>
    <p class="card-footer email">Email: ${staffs.email}</p>
    </div>
    </div>`;
  }
  return domString;
};

export default { staffsCard };
