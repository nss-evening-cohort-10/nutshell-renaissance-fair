// import firebase from 'firebase/app';
// import 'firebase/auth';
import './staffsCard.scss';

const staffsCard = (staffs) => {
  let domString = '';
  // const userSignedIn = firebase.auth().currentUser;
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
    <button type="button" class="btn btn-link staff-buttons hide staff-edit">Edit</button>
    <button type="button" class="btn btn-link staff-buttons hide staff-delete">Delete</button>
    </div>
    </div>`;
  return domString;
};

export default { staffsCard };
