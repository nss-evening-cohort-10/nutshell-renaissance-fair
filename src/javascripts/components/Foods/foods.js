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
      $('#add-food-modal').modal('hide');
      // eslint-disable-next-line no-use-before-define
      buildFoods();
    })
    .catch((error) => console.error(error));
};

const openUpdateModal = (e) => {
  const foodId = e.target.id.split('update-')[1];
  foodsData.getFoodById(foodId)
    .then((response) => {
      $('#update-food-modal').modal('show');
      const food = response.data;
      $('#update-food-name').val(food.name);
      $('#update-food-description').val(food.description);
      $('#update-food-price').val(food.price);
      $('#update-food-location').val(food.location);
      $('#update-food-type').val(food.type);
      $('#update-food-quantity').val(food.quantity);
      $('#update-food-image-url').val(food.imageUrl);
      $('.update-food-button').attr('id', foodId);
    })
    .catch((error) => console.error(error));
};

const updateAFood = (e) => {
  e.stopImmediatePropagation();
  const foodId = e.target.id;
  const updatedFood = {
    name: $('#update-food-name').val(),
    description: $('#update-food-description').val(),
    type: $('#update-food-type').val(),
    location: $('#update-food-location').val(),
    price: $('#update-food-price').val(),
    quantity: $('#update-food-quantity').val(),
    imageUrl: $('#update-food-image-url').val(),
  };
  foodsData.updateFood(foodId, updatedFood)
    .then(() => {
      $('#update-food-modal').modal('hide');
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
      $('#foods').on('click', '.update-food', openUpdateModal);
      $('.update-food-button').click(updateAFood);
    })
    .catch((error) => console.error(error));
};

export default { buildFoods };
