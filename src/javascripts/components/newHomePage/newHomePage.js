import $ from 'jquery';
import utilities from '../../helpers/utilities';
import './newHomePage.scss';
import dashboard from '../home-dashboard/dashboard';
import boardData from '../../helpers/data/boardData';
import events from '../../helpers/listeners/eventListeners';
import realEvents from '../Events/events';
import eventData from '../../helpers/data/eventData';


const showVendors = () => {
  dashboard.buildTheDashboard(boardData.getBoards());
  $('#home').addClass('hide');
  events.eventListeners();
};

const showEvents = () => {
  realEvents.printEvents(eventData.getAllEvents());
  $('#home').addClass('hide');
  $('#events').removeClass('hide');
  events.eventListeners();
};


const makeHomeCard = () => {
  let domString = `
  <div class="">
  <div class="row justify-content-center">
  <div class="card col-4 dashboard-card">
  <img src="https://media.timeout.com/images/103945391/630/472/image.jpg" class="dashboard-image" alt="...">
    <div class="card-body d-flex justify-content-center">
      <button id="eventHome" class="btn btn-outline-light dashboard-button eventHome">View Events</button>
    </div>
  </div>
<div class="card col-4 dashboard-card">
<img src="https://images.unsplash.com/photo-1511267462094-52a45dd66809?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1250&q=80" class="dashboard-image" alt="...">
  <div class="card-body d-flex justify-content-center">
    <button id="eventVendor" class="btn btn-outline-light dashboard-button eventVendor">View Vendors</button>
  </div>
</div>
</div>
</div>`;

  domString += '</div>';
  domString += `<div id="footer" class="text-center">
<img id="logo" src="https://user-images.githubusercontent.com/21040719/68823262-de054f00-0658-11ea-800e-575f31684130.png">
<p id="street">301 Plus Park Blvd</p>
<p id="city">Nashville, TN 37201</p>
 </div>`;
  utilities.printToDom('home', domString);
  $('.eventVendor').click(showVendors);
  $('.eventHome').click(showEvents);
};

export default { makeHomeCard };
