'use strict'

function Images(name, fileLoc, counter) {         //Constructor funciton to hold properties for all images.
  this.name = name;
  this.fileLoc = fileLoc;
  this.counter = 0;
  this.randomNumber = [];

}

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


var locationsArray = [bag, banana, boots, chair, cthulhu, dragon, pen, scissors, shark, sweep, unicorn, usb, water_can, wine_glass]

function random(){
  var img1 = document.getElementById('first');
  var rand1 = randomNumber();
  img1.src = locationsArray[rand1].fileLoc;

  var img2 = document.getElementById('second');
  var rand2 = randomNumber();
  while (rand1 === rand2) {
  rand2 = randomNumber();
}
  img2.src = locationsArray[rand2].fileLoc;

  var img3 = document.getElementById('third')
  var rand3 = randomNumber();
  while (rand1 === rand3 || rand2 === rand3) {
  rand3 = randomNumber();
}
  img3.src = locationsArray[rand3].fileLoc;
}
random();

function handleChangeImage() {
  random();
}

first.addEventListener('click', handleChangeImage);

second.addEventListener('click', handleChangeImage);

third.addEventListener('click', handleChangeImage);


//
// first.addEventListener('click', function() {
//   handleChangeImage('first')
// });
//
// second.addEventListener('click', function() {
//   handleChangeImage('second')
// });                                                          //Event listener for 'click'
//
// third.addEventListener('click', function() {
//   handleChangeImage('third')
// });                                                          // second.addEventListener('click', handleChangeImage('second'));
//                                                           // third.addEventListener('click', handleChangeImage('third'));
//
// function handleChangeImage(whichId) {                     //Event Handler for changing image
//   var random = randomNumber();                            //calling random number funciton and storing inside 'random'
//   var image = document.getElementById(whichId);
//
//   image.src = locationsArray[random].fileLoc;              //[random]= the random number refering to object within locationsArray = the first object in sources array, targeting the Image object fileLoc
//   console.log('I clicked')
//   console.log('i ' + random)
// }
//
