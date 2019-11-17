
import utilities from '../../helpers/utilities';
import './dashboard.scss';


const buildTheDashboard = (boardArray) => {
  let domString = '<div class="d-flex flex-wrap justify-content-center">';
  for (let i = 0; i < boardArray.length; i += 1) {
    const board = boardArray[i];
    domString += `
    <div class="card col-4 dashboard-card">
    <img src="${board.imageUrl}" class="dashboard-image" alt="...">
    <div class="card-body d-flex justify-content-center">
    <button id="${board.id}-button" class="btn btn-outline-light dashboard-button">${board.id}</button>
    </div>
  </div>`;
  }
  domString += '</div>';
  domString += `<div id="footer" class="text-center">
  <img id="logo" src="https://user-images.githubusercontent.com/21040719/68823262-de054f00-0658-11ea-800e-575f31684130.png">
  <p id="street">301 Plus Park Blvd</p>
  <p id="city">Nashville, TN 37201</p>
   </div>`;
  utilities.printToDom('boards', domString);
};


export default { buildTheDashboard };
