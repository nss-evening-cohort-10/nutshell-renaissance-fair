const souvenirDomString = (souvenirs) => {
  let domString = '';
  domString += `
    <div class="card col-4">
    <h2 class="title">${souvenirs.name}</h2>
    <img src=${souvenirs.imageUrl} class="card-img-top" alt="${souvenirs.name}">
    <div class="card-body">
    <p class="card-text">$${souvenirs.price / 100}</p>
    <p class="card-text">${souvenirs.description}</p>
    <p class="card-footer">${souvenirs.quantity}</p>
    <p class="card-footer"><button class="btn btn-info buy-snack ${souvenirs.location}</button></p>
    </div>
    </div>`;
  return domString;
};

export default { souvenirDomString };
