import './eventfood.scss';

const foodEventBuilder = (event) => {
  const { foods } = event;
  let domString = `<table class="table table-striped">
  <thead class="thead-dark">
    <tr>
      <th scope="col">FOOD</th>
      <th scope="col"><button class="btn btn-danger foodAddBtn">Add</button></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Name</td>
      <td>Cost</td>
    </tr>
    <tr>`;
  foods.forEach((x) => {
    domString += `<td>${x.name}</td>
  <td>${x.cost}</td>`;
  });
  domString += `</tr>
    </tbody>
  </table>`;
  return domString;
};

export default { foodEventBuilder };
