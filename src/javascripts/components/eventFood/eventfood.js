import $ from 'jquery';
import utilities from '../../helpers/utilities';
import foodData from '../../helpers/data/foodsData';
import './eventfood.scss';
// import smashData from '../../helpers/data/smashData';

const addFood = () => {
  $('#uniModal').modal('hide');
};

const addEventFoodModal = () => {
  // const eventId = e.target.id.split('addFood-')[1];
  const title = 'Add Food';
  let body = '<form>';
  foodData.getFoods()
  // smashData.allFoodsEvents()
    .then((foods) => {
      foods.forEach((x) => {
        body += `
      <div class="form-check">
      <input class="form-check-input" type="checkbox" value="${x.id}" id="${x.id}" ${x.isSelected === true ? 'checked' : ''}>
      <label class="form-check-label" for="${x.id}">
        ${x.name}
      </label></div><p></p>`;
      });
      body += `<button type="button" class="btn btn-danger btn-block save-board" id="add-food-event">SAVE</button>
    </form>`;
      utilities.printModal(title, body);
    })
    .catch((err) => console.error('Error getting events', err));
  $('#uniModal').modal('show');
  // $('#add-undefined').click('.save-board', addBoard);
  // $(`#update-${id}`).click('.save-board', updateBoard);
};

const foodEventBuilder = (event) => {
  const { foods } = event;
  let total = 0;
  let domString = `<div class="container">
  <table class="table table-striped">
  <thead class="thead-dark">
    <tr>
      <th scope="col">FOOD</th>
      <th class="text-right" scope="col"><button class="btn btn-danger foodAddBtn" id="addFood-${event.id}">Add</button></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Name</td>
      <td class="text-right">Cost</td>
    </tr>
    <tr>`;
  foods.forEach((x) => {
    total += x.cost;
    domString += `<td>${x.name}</td>
  <td class="text-right">$${(x.cost).toFixed(2)}</td>
  </tr>`;
  });
  domString += `</tr>
  <tr class="table-primary">
    <td>TOTAL</td>
    <td class="text-right">$${(total).toFixed(2)}</td>
    </tbody>
  </table></div>`;
  return domString;
};

export default { foodEventBuilder, addEventFoodModal, addFood };
