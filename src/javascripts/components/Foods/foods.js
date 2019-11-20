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

const buildFoods = () => {
  foodsData.getFoods()
    .then((foods) => {
      let domString = '<h2 class="text-center header">Food</h2>';
      domString += ' <div class="d-flex flex-wrap" id="foodsCards">';
      foods.forEach((food) => {
        domString += foodsCard.makeAFood(food);
      });
      domString += '</div>';
      utilities.printToDom('foods', domString);
      $('#foods').on('click', '.delete-food', deleteAFood);
    })
    .catch((error) => console.error(error));
};

export default { buildFoods };
