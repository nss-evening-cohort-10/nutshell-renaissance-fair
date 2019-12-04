import './eventShow.scss';

// import eventShowData from '../../helpers/data/eventShowData';

// const addEventShow = (e) => {
//   e.stopImmediatePropagation();
//   const newEventShow = {
//     name: $('#show-name').val(),
//     cost: $('#show-cost').val(),
//   };
//   eventShowData.postEventShow(newEventShow)
//     .then(() => {
//       $('#add-show-modal').modal('hide');
//       // eslint-disable-next-line no-use-before-define
//       showEventBuilder();
//     })
//     .catch((err) => console.error('Error adding new event show', err));
// };

const showEventBuilder = (event) => {
  const { shows } = event;
  let total = 0;
  let domString = `<div class="container">
  <table class="table table-striped">
  <thead class="thead-dark">
    <tr>
      <th scope="col">SHOW</th>
      <th class="text-right" scope="col"><button class="btn btn-danger showAddBtn">Add</button></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Name</td>
      <td class="text-right">Cost</td>
    </tr>
    <tr>`;
  shows.forEach((x) => {
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

export default { showEventBuilder };
