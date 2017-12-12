'use strict';

var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN docs
}

var storeLocations = [];

function Cookiestand(locationName, minCustsPerHour, maxCustsPerHour, avgCookiesPerCust) {
  this.locationName = locationName;
  this.minCustsPerHour = minCustsPerHour;
  this.maxCustsPerHour = maxCustsPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custsEachHour = [];
  this.cookiesEachHour = [];
  console.log(locationName);
  console.log(maxCustsPerHour);

  this.calcCustsEachHour = function() {
    for(var i = 0; i < hours.length; i++) {
      this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
      console.log(this.custsEachHour);
    }
  },

  this.calcCookiesEachHour = function() {
    // this.custsEachHour();
    for(var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
      console.log(oneHour, 'one hour');
      this.cookiesEachHour.push(oneHour);
      console.log(this.cookiesEachHour);
      this.totalDailySales += oneHour;
    }
  }
}

var pike = new Cookiestand('1st and Pike', 23, 65, 6.3);
// console.log(pike);
// new Cookiestand('Seatac Airport', 3, 24, 1.2);
// new Cookiestand('Seattle Center', 11, 38, 2.3);
// new Cookiestand('Capitol Hill', 20, 38, 2.3);
// new Cookiestand('Alki', 2, 16, 4.6);






// var pikePlaceMarket = {
//
//   name: '1st and Pike',
//   minCustsPerHour: 23,
//   maxCustsPerHour: 65,
//   avgCookiesPerCust: 6.3,
//   custsEachHour: [],
//   cookiesEachHour: [],
//   totalDailySales: 0,
//   calcCustsEachHour: function(){
//     for(var i = 0; i < hours.length; i++){
//       this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
//     }
//   },
//
//   calcCookiesEachHour: function(){
//     this.calcCustsEachHour();
//     for(var i = 0; i < hours.length; i++){
//       var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
//       // console.log(oneHour, 'one hour');
//       this.cookiesEachHour.push(oneHour);
//       this.totalDailySales += oneHour;
//       // console.log(this.totalDailySales, 'total');
//     }
//   },
//
//   render: function(){
//     this.calcCookiesEachHour();
//     // access the element in the DOM where our stuff will go
//     var ulEl = document.getElementById('pike');
//     // console.log(ulEl, 'ulEl');
//     for(var i = 0; i < hours.length; i++){
//
//       // create an element
//       var liEl = document.createElement('li');
//
//       // give it content
//       // 11am: 77 cookies
//       liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
//
//       // append it to the parent
//       ulEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
//     ulEl.appendChild(liEl);
//   }
// }
//
// var seatacAirport = {
//   name: 'Seatac Airport',
//   minCustsPerHour: 3,
//   maxCustsPerHour: 24,
//   avgCookiesPerCust: 1.2,
//   custsEachHour: [],
//   cookiesEachHour: [],
//   totalDailySales: 0,
//   calcCustsEachHour: function(){
//     for(var i = 0; i < hours.length; i++){
//       this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
//     }
//   },
//
//   calcCookiesEachHour: function(){
//     this.calcCustsEachHour();
//     for(var i = 0; i < hours.length; i++){
//       var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
//       // console.log(oneHour, 'one hour');
//       this.cookiesEachHour.push(oneHour);
//       this.totalDailySales += oneHour;
//       // console.log(this.totalDailySales, 'total');
//     }
//   },
//
//   render: function(){
//     this.calcCookiesEachHour();
//     // access the element in the DOM where our stuff will go
//     var ulEl = document.getElementById('seatac');
//     // console.log(ulEl, 'ulEl');
//     for(var i = 0; i < hours.length; i++){
//
//       // create an element
//       var liEl = document.createElement('li');
//
//       // give it content
//       // 11am: 77 cookies
//       liEl.textContent = hours[i] + this.cookiesEachHour[i] + ' cookies';
//
//       // append it to the parent
//       ulEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
//     ulEl.appendChild(liEl);
//   }
// }
//
// var seattleCenter = {
//
//   name: 'Seattle Center',
//   minCustsPerHour: 11,
//   maxCustsPerHour: 38,
//   avgCookiesPerCust: 3.7,
//   custsEachHour: [],
//   cookiesEachHour: [],
//   totalDailySales: 0,
//
//   calcCustsEachHour: function() {
//     for(var i = 0; i < hours.length; i++) {
//       this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
//     }
//   },
//   calcCookiesEachHour: function() {
//     this.calcCustsEachHour();
//     for(var i = 0; i < hours.length; i++) {
//       var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
//       this.cookiesEachHour.push(oneHour);
//       this.totalDailySales += oneHour;
//     }
//   },
//   render: function() {
//     this.calcCookiesEachHour();
//     var ulEl = document.getElementById('sc');
//
//     for(var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + this.cookiesEachHour[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
//     ulEl.appendChild(liEl);
//   }
// }
//




//
//
//
//
// pikePlaceMarket.render();
// seatacAirport.render();
// seattleCenter.render();
