import $ from 'jquery';
import foodsData from '../../helpers/data/foodsData';
import foodsCard from '../FoodsCard/foodsCard';
import utilities from '../../helpers/utilities';
import './foods.scss';

const deleteAFood = (e) => {
  e.preventDefault();
  const foodId = e.target.id.split('delete-')[1];
  foodsData.deleteFood(foodId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildFoods();
    })
    .catch((error) => console.error(error));
};

const addAFood = (e) => {
  e.stopImmediatePropagation();
  const newFood = {
    name: $('#food-name').val(),
    description: $('#food-description').val(),
    type: $('#food-type').val(),
    location: $('#food-location').val(),
    price: $('#food-price').val(),
    quantity: $('#food-quantity').val(),
    imageUrl: $('#food-image-url').val(),
  };
  foodsData.addNewFood(newFood)
    .then(() => {
      $('#foodModal').modal('hide');
      // eslint-disable-next-line no-use-before-define
      buildFoods();
    })
    .catch((error) => console.error(error));
};

const buildFoods = () => {
  foodsData.getFoods()
    .then((foods) => {
      let domString = '<div id="food-header">';
      domString += '<h1 class="text-center header">Food</h1>';
      domString += '<button class="btn btn-success" id="add-food-button" data-toggle="modal" data-target="#add-food-modal">Add new food item</button>';
      domString += '</div>';
      domString += '<div class="d-flex flex-wrap" id="foodsCards">';
      foods.forEach((food) => {
        domString += foodsCard.makeAFood(food);
      });
      domString += '</div>';
      utilities.printToDom('foods', domString);
      $('#foods').on('click', '.delete-food', deleteAFood);
      $('#add-new-food').click(addAFood);
    })
    .catch((error) => console.error(error));
};

export default { buildFoods };
