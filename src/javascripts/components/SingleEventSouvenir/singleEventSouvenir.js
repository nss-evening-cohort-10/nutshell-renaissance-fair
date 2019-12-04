import './singleEventSouvenir.scss';

const souvenirEventBuilder = (event) => {
  const { souvenirs } = event;
  let domString = `<table class="table table-striped">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Souvenir</th>
      <th scope="col"><button class="btn btn-danger souvenirAddBtn">Add</button></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Name</td>
      <td>Cost</td>
    </tr>
    <tr>`;
  souvenirs.forEach((x) => {
    domString += `<td>${x.name}</td>
  <td>${x.cost}</td>`;
  });
  domString += `</tr>
    </tbody>
  </table>`;
  return domString;
};

export default { souvenirEventBuilder };
