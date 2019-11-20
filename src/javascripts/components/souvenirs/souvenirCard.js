import firebase from 'firebase/app';
import 'firebase/auth';
import './souvenirCard.scss';

const souvenirDomString = (souvenirs) => {
  let domString = '';
  const userSignedIn = firebase.auth().currentUser;
  if (userSignedIn) {
    domString += `
    <div class="card col-3">
    <h2 class="title text-center">${souvenirs.name}</h2>
    <div class="d-flex justify-content-center">
    <img src=${souvenirs.imageUrl} class="card-img-top d-flex align-content-center" alt="${souvenirs.name}">
    </div>
    <div class="card-body text-center">
    <p class="card-text">Price: $${souvenirs.price / 100}</p>
    <p class="card-text">SKU: ${souvenirs.sku}</p>
    <p class="card-footer">Quantity: ${souvenirs.quantity}</p>
    <p class="card-footer">Located at the: ${souvenirs.location}</p>
    <p class="card-footer">
    <button class="btn btn-outline-danger deleteSouvenir" id="${souvenirs.id}">Delete</button>
    <button type="button" class="btn btn-outline-warning updateSouvenirButton" id="update-${souvenirs.id}">
      Edit Souvenir
    </button>
    </p>
    </div>
    </div>`;
  } else {
    domString += `
    <div class="card col-3">
    <h2 class="title text-center">${souvenirs.name}</h2>
    <div class="d-flex justify-content-center">
    <img src=${souvenirs.imageUrl} class="card-img-top d-flex align-content-center" alt="${souvenirs.name}">
    </div>
    <div class="card-body text-center">
    <p class="card-text">$${souvenirs.price / 100}</p>
    <p class="card-text">${souvenirs.description}</p>
    <p class="card-footer">${souvenirs.quantity}</p>
    <p class="card-footer">${souvenirs.location}</p>
    </div>
    </div>`;
  }
  return domString;
};

export default { souvenirDomString };
