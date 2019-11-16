
import utilities from '../../helpers/utilities';
import './dashboard.scss';


const buildTheDashboard = (boardArray) => {
  let domString = '';
  for (let i = 0; i < boardArray.length; i += 1) {
    const board = boardArray[i];
    domString += `<div class="col-5 card">
    
    <img src="${board.imageUrl}" class="dashboard-image" alt="...">
    <div class="card-body d-flex justify-content-center">
    <button id="${board.id}-button" class="btn btn-primary">${board.id}</button>
    </div>
  </div>`;
  }
  // domString += `<div>
  // <h6>Freelancer</h6>
  // <p>301 Plus Park Blvd</p>
  // <p>Nashville, TN 37201<p/>
  //  </div>`;
  utilities.printToDom('boards', domString);
};


export default { buildTheDashboard };