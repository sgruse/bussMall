'use strict'

function Images(name, fileLoc, counter) {         //Constructor funciton to hold properties for all images.
  this.name = name;
  this.fileLoc = fileLoc;
  // this.counter = 0;
  // this.randomNumber = [];
  this.timesClicked = 0;                          //timesClicked = total times clicked
  this.timesDisplayed = 0;
  this.percentClicked = 0;
    this.percentClicked = 0;    //Adding in counters
  }                                                 //Create method to calculate the % displayed
  var totalClicks = 0;                             //Global total clicks counting off of handler

function randomNumber(){
  return Math.floor((Math.random() * locationsArray.length));        //randomNumber() returns random number
}

var bag = new Images('bag', 'img/bag.jpg');          //All objects
var banana = new Images('banana', 'img/banana.jpg');
var boots = new Images('boots', 'img/boots.jpg');
var chair = new Images('chair', 'img/chair.jpg');
var cthulhu = new Images('cthulhu', 'img/cthulhu.jpg');
var dragon = new Images('dragon', 'img/dragon.jpg');
var pen = new Images('pen', 'img/pen.jpg');
var scissors = new Images('scissors', 'img/scissors.jpg');
var shark = new Images('shark', 'img/shark.jpg');
var sweep = new Images('sweep', 'img/sweep.png');
var unicorn = new Images('unicorn', 'img/unicorn.jpg');
var usb = new Images('usb', 'img/usb.gif');
var water_can = new Images('water_can', 'img/water-can.jpg');
var wine_glass = new Images('wine_glass', 'img/wine-glass.jpg');

var img1 = document.getElementById('first');
var img2 = document.getElementById('second');
var img3 = document.getElementById('third');

var rand1;
var rand2;
var rand3;

var locationsArray = [bag, banana, boots, chair, cthulhu, dragon, pen, scissors, shark, sweep, unicorn, usb, water_can, wine_glass]

function random(){
  //img1 = document.getElementById('first');
  rand1 = randomNumber();
  img1.src = locationsArray[rand1].fileLoc;
  locationsArray[rand1].timesDisplayed++;               //This is equallying times displayed

  //img2 = document.getElementById('second');
  rand2 = randomNumber();
  while (rand1 === rand2) {
  rand2 = randomNumber();
}
  img2.src = locationsArray[rand2].fileLoc;
  locationsArray[rand2].timesDisplayed++;

  //img3 = document.getElementById('third')
  rand3 = randomNumber();
  while (rand1 === rand3 || rand2 === rand3) {
  rand3 = randomNumber();
}
  img3.src = locationsArray[rand3].fileLoc;
  locationsArray[rand3].timesDisplayed++;
}
  random();

function handleChangeImage(image) {
  image.timesClicked++;
  totalClicks++;
  checkButton();
  random();
  image.percentClicked = (image.timesClicked / image.timesDisplayed).toFixed(2) * 100;
}


first.addEventListener('click', function(){
  handleChangeImage(locationsArray[rand1])     //this is the input for the handler
});

second.addEventListener('click', function(){
  handleChangeImage(locationsArray[rand2])
});

third.addEventListener('click', function(){
  handleChangeImage(locationsArray[rand3])
});

resultButton.addEventListener('click', makeChart);

var hidden;
  function checkButton() {
    if (totalClicks < 1){   
      // locationsArray.length

      resultButton.removeAttribute(hidden);
    } else {
      resultButton.style.display = "block"
    }
  }


  function makeChart() {

var allClicks = [];
var allDisplays = [];
  for (var i = 0; i < locationsArray.length; i++) {
  allClicks[i] = locationsArray[i].timesClicked;
  allDisplays[i] = locationsArray[i].timesDisplayed;
}

  var data = {
      labels: ["bag", "banana", "boots", "chair", "cthulhu", "dragon", "pen", "scissors", "shark", "sweep", "unicorn", "usb", "water_can", "wine_glass"],
      datasets: [
          {
              label: "My First dataset",
              fillColor: "rgba(220,220,220,0.5)",
              strokeColor: "rgba(220,220,220,0.8)",
              highlightFill: "rgba(220,220,220,0.75)",
              highlightStroke: "rgba(220,220,220,1)",
              data: allClicks
          },
          {
              label: "My Second dataset",
              fillColor: "rgba(151,187,205,0.5)",
              strokeColor: "rgba(151,187,205,0.8)",
              highlightFill: "rgba(151,187,205,0.75)",
              highlightStroke: "rgba(151,187,205,1)",
              data: allDisplays
          }
      ]
  };

  var context = document.getElementById('popularity').getContext('2d');
  var myBarChart = new Chart(context).Bar(data);

}
