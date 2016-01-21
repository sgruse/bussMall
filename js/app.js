'use strict';

var allNames = ['bag', 'banana', 'boots', 'chair', 'chtulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'water_can', 'wine_glass'];
var allSources =['img/bag.jpg', 'img/banana.jpg', 'img/boots.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];
var locationsArray = [];
function Images(name, fileLoc) {                 //Constructor funciton to hold properties for all images.
  this.name = name;
  this.fileLoc = fileLoc;
  this.timesClicked = 0;                         //timesClicked = total times clicked
  this.timesDisplayed = 0;
  this.percentClicked = 0;
  this.percentClicked = 0;                       //Adding in counters
}                                                //Create method to calculate the % displayed
var totalClicks = 0;                             //Global total clicks counting off of handler

for (var i = 0; i < allNames.length; i++) {
  locationsArray.push(new Images(allNames[i], allSources[i]));
}

function randomNumber(){
  return Math.floor((Math.random() * locationsArray.length));
}

var img1 = document.getElementById('first');
var img2 = document.getElementById('second');
var img3 = document.getElementById('third');
var rand1, rand2, rand3;

function random(){
  rand1 = randomNumber();
  img1.src = locationsArray[rand1].fileLoc;
  locationsArray[rand1].timesDisplayed++;               //This is equallying times displayed

  rand2 = randomNumber();
  while (rand1 === rand2) {
    rand2 = randomNumber();
  }
  img2.src = locationsArray[rand2].fileLoc;
  locationsArray[rand2].timesDisplayed++;

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
  image.percentClicked = (parseInt(image.timesClicked) / parseInt(image.timesDisplayed)).toFixed(2) * 100;
  localStorage.setItem('dataPersist', JSON.stringify(locationsArray));
}

function checkButton() {
  var hidden;
  if (totalClicks < 1){
    // locationsArray.length
    resultButton.removeAttribute(hidden);
  } else {
    resultButton.style.display = "block"
  }
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

resultButton.addEventListener('click', makeChartOne);
resultButton.addEventListener('click', makeChartTwo);

function makeChartOne() {
  document.getElementById('chartOneHeader').innerHTML = '';
  document.getElementById('chartTwoHeader').innerHTML = '';
  var allClicks = [];
  var allDisplays = [];
  var header = document.createElement('chartOneHeader');
  header.textContent = 'Times displayed vs. Times chosen';
  var headerTwo = document.createElement('chartTwoHeader');
  headerTwo.textContent = 'Percentage Displayed';
  chartOneHeader.appendChild(header);
  chartTwoHeader.appendChild(headerTwo);
  for (var i = 0; i < locationsArray.length; i++) {
    allClicks[i] = locationsArray[i].timesClicked;
    allDisplays[i] = locationsArray[i].timesDisplayed;
  }

  var data = {
    labels: ["bag", "banana", "boots", "chair", "cthulhu", "dragon", "pen", "scissors", "shark", "sweep", "unicorn", "usb", "water_can", "wine_glass"],
    datasets: [
      {
      label: "My First dataset",
              fillColor: "rgb(225,234,253)", highlightFill: "rgb(94,131,205)",
              highlightStroke: "rgba(220,220,220,1)", data: allClicks
          },
          {
              label: "My Second dataset", fillColor: "rgb(176,198,242)",
              strokeColor: "rgba(151,187,205,0.8)", highlightFill: "rgba(151,187,205,0.75)",
              highlightStroke: "rgba(151,187,205,1)", data: allDisplays
          }
      ]
  };

  var context = document.getElementById('popularity').getContext('2d');
  var myBarChartOne = new Chart(context).Bar(data);
}

function makeChartTwo() {

var allPercentClicked = [];
for (var i = 0; i < locationsArray.length; i++) {
allPercentClicked[i] = locationsArray[i].percentClicked;
}

var data = {
    labels: ["bag", "banana", "boots", "chair", "cthulhu", "dragon", "pen", "scissors", "shark", "sweep", "unicorn", "usb", "water_can", "wine_glass"],
    datasets: [
        {
            label: "My First dataset", fillColor: "rgb(176,198,242)",
            strokeColor: "rgba(62,101,178,0.7)", highlightFill: "rgb(94,131,205)",
            highlightStroke: "rgba(220,220,220,1)", data: allPercentClicked
        },
    ]
};

var context = document.getElementById('percent').getContext('2d');
var myBarChartTwo = new Chart(context).Bar(data);
}
var clearLs = document.getElementById('clearLs');
var handleLsClear = function() {
  console.log('clearing local storage');
  localStorage.clear();
};
clearLs.addEventListener('click', handleLsClear);

var chartData = localStorage.getItem('dataPersist');
if(chartData) {
  locationsArray = JSON.parse(chartData);
} else {
  console.log('local storage empty! initializing:');
  localStorage.setItem('dataPersist', JSON.stringify(locationsArray));
}
