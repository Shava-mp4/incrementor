// INCREMENTING VARIABLES & RANDOM VALUES

// 1. Saving elements as variables cleans up your code.
var Output = document.getElementById("display");
var minus50btn = document.getElementById("minus50");
var minus10btn = document.getElementById("minus10");
var minus1btn = document.getElementById("minus1");
var plus1btn = document.getElementById("plus1");
var plus10btn = document.getElementById("plus10");
var plus50btn = document.getElementById("plus50");
var rand1btn = document.getElementById("rand1");
var rand1out = document.getElementById("rand1-out");
var rand2btn = document.getElementById("rand2");
var rand2out = document.getElementById("rand2-out");
var rand3btn = document.getElementById("rand3");
var rand3out = document.getElementById("rand3-out");
var rand4btn = document.getElementById("rand4");
var rand4out = document.getElementById("rand4-out");
var ranNum1 = +document.getElementById("rand-in1").value;
var ranNum2 = +document.getElementById("rand-in2").value;
var ranSize = document.getElementById("random-size");
var ranColour = document.getElementById("random-rgb");
var clear = document.getElementById("reset");

var num = 0;

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
minus50btn.addEventListener("click", minus50);
minus10btn.addEventListener("click", minus10);
minus1btn.addEventListener("click", minus1);
plus1btn.addEventListener("click", plus1);
plus10btn.addEventListener("click", plus10);
plus50btn.addEventListener("click", plus50);

function minus50() {
  num = num - 50;
  Output.innerHTML = num;
}

function minus10() {
  num = num - 10;
  Output.innerHTML = num;
}

function minus1() {
  num = num - 1;
  Output.innerHTML = num;
}

function plus50() {
  num += 50;
  Output.innerHTML = num;
}

function plus10() {
  num += 10;
  Output.innerHTML = num;
}

function plus1() {
  num += 1;
  Output.innerHTML = num;
}

// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!

var stringOutEl = document.getElementById("strOut");
var stringInEl = document.getElementById("strIn");

var story = "Once upon a time, ";

// change event: runs when 'enter' is pressed
// or when mouse clicks outside input
stringInEl.addEventListener("change", updateStory);

function updateStory() {
  // input: read the word, store as variable
  var word = stringInEl.value;
  stringInEl.value = "";

  // process: add word to the story
  story += word + " ";
  console.log(story);

  // output: display the story
  stringOutEl.innerHTML = story;
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.
rand1btn.addEventListener("click", random1);
rand2btn.addEventListener("click", random2);
rand3btn.addEventListener("click", random3);
rand4btn.addEventListener("click", random4);
ranSize.addEventListener("click", randomSize);
ranColour.addEventListener("click", randomColour);

function random1() {
  var rand = Math.random();
  rand = rand.toFixed(3);
  rand1out.innerHTML = rand;
}

function random2() {
  var rand = Math.random();
  rand = rand * 100; // decimal 0 - 0.999...
  rand = Math.floor(rand); // integer 0 - 99

  rand2out.innerHTML = rand;
}

function random3() {
  var rand = Math.random();
  rand = rand * 10 - 5;
  rand = Math.floor(rand);

  rand3out.innerHTML = rand;
}

function random4() {
  var rand = Math.random();
  rand = rand * (ranNum2 - ranNum1) + ranNum1;
  rand = Math.floor(rand);

  rand4out.innerHTML = rand;
}

function randomSize() {
  var randSize = Math.round(Math.random() * 75);

  document.getElementById("body").style.fontSize = `${randSize}`;
}

function randomColour() {
  var randC1 = Math.random();
  randC1 = randC1 * 255;
  randC1 = Math.floor(randC1);

  var randC2 = Math.random();
  randC2 = randC2 * 255;
  randC2 = Math.floor(randC2);

  var randC3 = Math.random();
  randC3 = randC3 * 255;
  randC3 = Math.floor(randC3);

  var rgbString = `rgb(${randC1}, ${randC2}, ${randC3})`;
  document.getElementById("HTML").style.background = rgbString;
}

// Check your understanding
// 1. Complete the rest of the incrementing buttons.
// 2. Complete the random __ to __ button.
// 3. Complete the Random Size button. This button should change the font size of all text in the body to a value between 0 and 75
// 4. Complete the Random Color button. This should change the html background to a random rgb color.  Hint:  `rgb(34, 245, 128)` is a value rgb color, where the numbers each range from 0 to 255. You will need three random numbers, then you will need to create a string using those numbers.

// i.e.  var rgbString = `rgb(34, 245, 128)`;
//       document.getElementById('HTML').style.background = rgbString

// Your job is to make the values random in the above code snippet.

// 4. Code the reset button. This will reset all variables back to initial values and clear out all input fields and reset span boxes back to dashes. It's like refresing the page without actually refreshing the page.
