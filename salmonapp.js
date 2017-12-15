'use strict';

var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

var salmonCookiesTable = document.getElementById('salmon-cookies');

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN docs
}

// making form function here

var form = document.getElementById('locations-form');
form.addEventListener('submit', cookieData);
var data = [];

function NewLocation (location, min, max, avg) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.custsEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailySales = 0;

  this.calcCustsEachHour = function() {
    for(var i = 0; i < hours.length; i++) {
      this.custsEachHour.push(random(this.min, this.max));
    }
  }

  this.calcCookiesEachHour = function() {
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++) {
      var oneHour = Math.ciel(this.custsEachHour[i] * this.avg);
      data.push(oneHour);
      this.totalDailySales += oneHour;
      createNewRow();
    }
  }
}

function cookieData(event) {
  event.preventDefault();

  var locationName = event.target.location.value;
  var minCustomers = event.target.min.value;
  var maxCustomers = event.target.max.value;
  var averageCookies = event.target.avg.value;
  new Cookiestand(null, locationName, minCustomers, maxCustomers, averageCookies)
  storeLocations[storeLocations.length - 1].render();
  var total = document.getElementById("total");
  total.remove();
  makeFooterRow();
  form.reset;
  console.log(storeLocations)
}


//end of form and bottom new row


var storeLocations = [];

// function for entire head row

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);

  //hours table header

  for(var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  salmonCookiesTable.appendChild(trEl);

  //daily totals header

  thEl = document.createElement('th');
  thEl.textContent = 'Daily Totals';
  trEl.appendChild(thEl);
}

makeHeaderRow();


//constructor function

function Cookiestand(id, locationName, minCustsPerHour, maxCustsPerHour, avgCookiesPerCust) {
  this.id = id;
  this.locationName = locationName;
  this.minCustsPerHour = minCustsPerHour;
  this.maxCustsPerHour = maxCustsPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.totalDailySales = 0;
  this.custsEachHour = [];
  this.cookiesEachHour = [];
  storeLocations.push(this);

  this.calcCustsEachHour = function() {
    for(var i = 0; i < hours.length; i++) {
      this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },

  this.calcCookiesEachHour = function() {
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
    }
  }


  // REST OF THE TABLE HAPPENS HERE!!! //



  this.render = function(){
      this.calcCookiesEachHour();

      // location name

      var trEl = document.createElement('tr');
      var tdEl = document.createElement('td');
      tdEl.textContent = locationName;
      trEl.appendChild(tdEl);

      //num cookies each hour

      for(var i = 0; i < hours.length; i++) {
        tdEl = document.createElement('td');
        tdEl.textContent = this.cookiesEachHour[i];
        trEl.appendChild(tdEl);
      }
       //daily totals

       tdEl = document.createElement('tr');
       tdEl.textContent = this.totalDailySales;
       trEl.appendChild(tdEl);

       salmonCookiesTable.appendChild(trEl);
    }
}



// Cookiestand instances //

new Cookiestand('pike', '1st and Pike', 23, 65, 6.3);
new Cookiestand('seatac','Seatac Airport', 3, 24, 1.2);
new Cookiestand('sc', 'Seattle Center', 11, 38, 2.3);
new Cookiestand('cap-hill', 'Capitol Hill', 20, 38, 2.3);
new Cookiestand('alki', 'Alki', 2, 16, 4.6);



// HOURLY TOTALS


function makeFooterRow() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');

  tdEl = document.createElement('td');
  tdEl.textContent = 'Hourly Totals:';
  trEl.appendChild(tdEl);


  var counter = 0;

  for(var i = 0; i < hours.length + 1; i++) {
    var hourlyTotal = 0;
    for(var j = 0; j < storeLocations.length; j++) {
      counter++
      hourlyTotal += storeLocations[j].cookiesEachHour[i];
    }
    tdEl = document.createElement('td');
    tdEl.textContent = hourlyTotal;
    trEl.appendChild(tdEl);
    trEl.setAttribute("id", "total");
    salmonCookiesTable.appendChild(trEl);
  }

//sum of total daily sales

  var totalTotal = 0;
  for(var i = 0; i < storeLocations.length; i++) {
    totalTotal += storeLocations[i].totalDailySales;
  }

  tdEl.textContent = totalTotal;
  trEl.appendChild(tdEl);
  salmonCookiesTable.appendChild(trEl);
}

for(var i = 0; i < storeLocations.length; i++) {
  storeLocations[i].render();
}

//calling footer row AFTER RENDER ABOVE
makeFooterRow();
