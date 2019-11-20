import firebase from 'firebase/app';
import 'firebase/auth';
import './foodsCard.scss';

const makeAFood = (food) => {
  let domString = '';
  const userSignedIn = firebase.auth().currentUser;
  if (userSignedIn) {
    domString += `<div class="card mb-3 foodCard">
  <img src="${food.imageUrl}" class="food-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${food.name}</h5>
    <p class="card-text">${food.description}</p>
    <p class="card-text">Price: $${food.price * 1}</p>
<button type="button" class="auth-button btn btn-outline-warning">Edit</button>
            <button type="button" class="delete-food auth-button btn btn-outline-danger" id="delete-${food.id}">Delete</button>
  </div>
</div>
  `;
  } else {
    domString += `<div class="card mb-3 foodCard">
  <img src="${food.imageUrl}" class="food-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${food.name}</h5>
    <p class="card-text">${food.description}</p>
    <p class="card-text">Price: $${food.price * 1}</p>
  </div>
</div>
  `;
  }
  return domString;
};

export default { makeAFood };
