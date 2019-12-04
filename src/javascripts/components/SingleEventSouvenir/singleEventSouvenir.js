import './singleEventSouvenir.scss';

const souvenirEventBuilder = (event) => {
  const { souvenirs } = event;
  let total = 0;
  let domString = `<div class="container">
  <table class="table table-striped">
  <thead class="thead-dark">
    <tr>
      <th scope="col">SOUVENIR</th>
      <th class="text-right" scope="col"><button class="btn btn-danger souvenirAddBtn">Add</button></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Name</td>
      <td class="text-right">Cost</td>
    </tr>
    <tr>`;
  souvenirs.forEach((x) => {
    total += x.cost;
    domString += `<td>${x.name}</td>
  <td class="text-right">$${(x.cost).toFixed(2)}</td>
  </tr>`;
  });
  domString += `</tr>
  <tr class="table-primary">
    <td>TOATAL</td>
    <td class="text-right">$${(total).toFixed(2)}</td>
    </tbody>
  </table></div>`;
  return domString;
};

export default { souvenirEventBuilder };
