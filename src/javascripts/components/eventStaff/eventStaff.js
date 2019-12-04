import './eventStaff.scss';

const staffEventBuilder = (event) => {
  const { staffs } = event;
  console.log(staffs);
  let total = 0;
  let domString = `<div class="container">
  <table class="table table-striped">
  <thead class="thead-dark">
    <tr>
      <th scope="col">STAFF</th>
      <th class="text-right" scope="col"><button class="btn btn-danger staffAddBtn">Add</button></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Name</td>
      <td class="text-right">Cost</td>                   
    </tr>
    <tr>`;
  staffs.forEach((x) => {
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

export default { staffEventBuilder };
