const printToDom = (shows) => {
  const domString = '';
  domString += '<dl class="accordion">';
  domString += `<dt><a href="">${shows.name}<a/></dt>`;
  domString += `<dd><p><a href="">${shows.id}</p><a/>
    <p>${shows.id}</p>
    <p>${shows.date}</p>
    <p>${shows.ticketPrice}</p>
    <p>${shows.imageUrl}</p>
    <p>${shows.description}</p>
  </dd>`;
  domString += '</dl>';
    return domString;
};
export default { printToDom };
