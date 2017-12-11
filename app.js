'use strict';

var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

var patsLocations = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];


function firstAndPike() {
  var container = document.createElement('div');
  container.innerHTML = '<p>' + patsLocations[0] + '</p>';
  document.body.appendChild(container);

  var list = document.createElement('ul');
  var listArr = [];

  var cookies = Math.round((Math.random() * (65 - 23) + 23) * 6.3);

  for (var i = 0; i < hours.length; i++){
    listArr.push('<li>' + hours[i] + cookies +  ' cookies </li>');
  }

var fullList = listArr.join('');
list.innerHTML = fullList;
document.body.appendChild(list);
}

firstAndPike();


function seaTac() {
  var container = document.createElement('div');
  container.innerHTML = '<p>' + patsLocations[1] + '</p>';
  document.body.appendChild(container);

  var list = document.createElement('ul');
  var listArr = [];

  var cookies = Math.round((Math.random() * (24 - 3) + 3) * 1.2);

  for(var i = 0; i < hours.length; i++) {
    listArr.push('<li>' + hours[i] + cookies + ' cookies </li>')
  }
  var fullList = listArr.join('');
  list.innerHTML = fullList;
  document.body.appendChild(list);
}

seaTac();
