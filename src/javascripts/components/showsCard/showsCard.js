import './showsCard.scss';

const printCardsToDom = (show) => {
  let domString = '';
  domString += '<dl class="accordion">';
  domString += `<dt><a href="#"><h4>${show.name}</h4><a/></dt>`;
  domString += `<dd>
    <p>${show.id}</p>
    <p>${show.date}</p>
    <p>${show.location}</p>
    <p>${show.ticket_Price}</p>
    <p><img src = '${show.imageUrl}'></p>
  </dd>`;
  domString += '</dl>';
  return domString;
};
export default { printCardsToDom };
