import $ from 'jquery';
import utilities from '../../helpers/utilities';
import './eventfood.scss';

const addEventFoodModal = () => {
  const title = 'Add Food';
  const body = `<form>
    <div class="form-group">
      <input type="checkbox" name="food1" checked data-toggle="toggle">
      <label for="food1">Food 1</label>
    </div>
    <button type="button" class="btn btn-danger btn-block save-board" id="add-food">SAVE</button>
    </form>`;
  utilities.printModal(title, body);
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
      <th class="text-right" scope="col"><button class="btn btn-danger foodAddBtn">Add</button></th>
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

export default { foodEventBuilder, addEventFoodModal };
