var canvasWidth = 1060;
var canvasHeight = 660;
function setup() {
  // put setup code here
  // called once
  createCanvas(canvasWidth, canvasHeight);
  background('#FFDEAD');
  textAlign(CENTER);

  // the set up
  makeDescription();
  fill(250);
  cardLoc(c1x, c2x, c3x, c4x);
  createBoxes();
  buttonLoc();
}

// making description
function descrip(string, x, y) {
  text(string, canvasWidth / x, y)
}
function makeDescription() {
  fill(0);
  textSize(canvasWidth / 30);
  descrip('24 Points Game', 2, 40);
  textSize(canvasWidth / 75);
  textAlign(LEFT);
  descrip("Directions: use the (, ), *, /, +, - operations to combine the four number cards together to make 24.", 4, 60);
  descrip("To enter an operation, click on the operation buttons above and below the box.", 4, 80);
  descrip("Pressing clear will clear all the operation boxes.", 4, 100);
}

var card1;
var card2;
var card3;
var card4;
var c1x = 1;
var c2x = 3;
var c3x = 5;
var c4x = 7;
function card(x) {
  rect(x * canvasWidth / 10, canvasHeight / 3.5, canvasWidth / 8.25, canvasHeight / 4);
}
function cardLoc(card1x, card2x, card3x, card4x) {
  fill(50);
  card1 = card(card1x);
  fill(100);
  card2 = card(card2x);
  fill(150);
  card3 = card(card3x);
  fill(200);
  card4 = card(card4x);
  fill(250);
}

// creating the boxes to put the operations in
var boxes = [];
var xLocation = [.5, .75, 2.25, 2.5, 2.75, 4.25, 4.5, 4.75, 6.25, 6.5, 6.75, 8.25, 8.5];
var numBoxes = 13;
var opBoxLength = 20;
let xPos;
let newBox;
class OperationBox {
  constructor(x) {
    this.xlocation = x;
    this.operation = '';
  }
  inXBox() {
    xPos = this.xlocation * canvasWidth / 10;
    return (mouseX > xPos && mouseX < xPos + opBoxLength);
  }
}
function opEnter(x, color=false, operation=false) {
  if (color) {
    fill(color);
    rect(x * canvasWidth / 10, canvasHeight / 2.5, opBoxLength, opBoxLength);
  }
  rect(x * canvasWidth / 10, canvasHeight / 2.5, opBoxLength, opBoxLength);
  if (operation) {
    textAlign(CENTER);
    fill(0)
    text(operation, (x * canvasWidth / 10) + 10, (canvasHeight / 2.5) + 15);
    fill(250)
  }
}
function createBoxes() {
  for (i = 0; i < numBoxes; i++) {
    boxes[i] = new OperationBox(xLocation[i]);
  }
  for (i = 0; i < numBoxes; i++) {
    opEnter(boxes[i].xlocation);
  }
}

// creating the operation, switch, and reset buttons
let newB;
function makeButton(string, x, y) {
  newB = createButton(string);
  newB.position(x * canvasWidth / 10, y);
  if (string === 'switch') {
    newB.mousePressed(switchCards);
  }
  // reset the game
  else if (string === 'reset') {
    newB.mousePressed(setup);
  }
  // reset the operations boxes
  else if (string === 'clear') {
    newB.mousePressed(clearBox);
  }
  else if (string === 'submit!') {
    newB.mousePressed(finalEquation);
  }
  else {
    newB.mousePressed(pressedOperation);
  }
}
var switchxLocation = [2.35, 4.35, 6.35];
function buttonLoc() {
  for (i = 0; i < numBoxes - 2; i++) {
    makeButton('(', xLocation[i], (canvasHeight / 2.5) - 75);
  }
  for (i = 2; i < numBoxes; i++) {
    makeButton(')', xLocation[i], (canvasHeight / 2.5) - 50);
  }
  for (i = 2; i < numBoxes - 2; i++) {
    makeButton('*', xLocation[i], (canvasHeight / 2.5) - 25);
    makeButton('/', xLocation[i], (canvasHeight / 2.5) + 25);
    makeButton('+', xLocation[i], (canvasHeight / 2.5) + 50);
    makeButton('-', xLocation[i], (canvasHeight / 2.5) + 75);
  }
  for (i = 0; i < 3; i++) {
    makeButton('switch', switchxLocation[i], 11 * canvasHeight / 20);
  }
  makeButton('clear', 8, 5.7 * canvasHeight / 10);
  makeButton('reset', 8, 6 * canvasHeight / 10);
  makeButton('submit!', 4.75, 6 * canvasHeight / 10)
}

// functions for when a specific button is pressed
let switchLocation;
let switchValue;
function switchCards() {
  if (mouseX < 4 * canvasWidth / 10) {
    cardLoc(c2x, c1x, c3x, c4x);
  }
  else if (mouseX > 5 * canvasWidth / 10) {
    cardLoc(c1x, c2x, c4x, c3x);
  }
  else {
    cardLoc(c1x, c3x, c2x, c4x);
  }
}
function clearBox() {
  for (i = 0; i < numBoxes; i++) {
    opEnter(boxes[i].xlocation, color=250);
    boxes[i].operation = '';
  }
}
let boxNumber;
function pressedOperation() {
  for (i = 0; i < numBoxes; i++) {
    if (boxes[i].inXBox()) {
      boxNumber = i;
      break;
    }
  }
  boxes[boxNumber].operation = yLocation();
  opEnter(boxes[boxNumber].xlocation, false, boxes[boxNumber].operation);
}
function yLocation() {
  if (mouseY < (canvasHeight / 2.5) - 55) {
    return '(';
  }
  else if ((mouseY > (canvasHeight / 2.5) - 50) && (mouseY < (canvasHeight / 2.5) - 30)) {
    return ')';
  }
  else if ((mouseY > (canvasHeight / 2.5) - 25) && (mouseY < (canvasHeight / 2.5) - 5)) {
    return '*';
  }
  else if ((mouseY > (canvasHeight / 2.5) + 25) && (mouseY < (canvasHeight / 2.5) + 45)) {
    return '/';
  }
  else if ((mouseY > (canvasHeight / 2.5) + 50) && (mouseY < (canvasHeight / 2.5) + 70)) {
    return '+';
  }
  else if (mouseY > (canvasHeight / 2.5) + 75) {
    return '-';
  }
}
var numbers = [4, 7, 8, 8];
var submittedAnswer = '';
function finalEquation() {
  for (i = 0; i < 2; i++) {
    if (boxes[i].operation) {
      submittedAnswer += boxes[i].operation;
    }
  }
  submittedAnswer += numbers[0].toString();
  // submittedAnswer += cards[0].number.toString();
  for (i = 2; i < 5; i++) {
    if (boxes[i].operation) {
      submittedAnswer += boxes[i].operation;
    }
  }
  submittedAnswer += numbers[1].toString();
  // submittedAnswer += cards[1].number.toString();
  for (i = 5; i < 8; i++) {
    if (boxes[i].operation) {
      submittedAnswer += boxes[i].operation;
    }
  }
  submittedAnswer += numbers[2].toString();
  // submittedAnswer += cards[2].number.toString();
  for (i = 8; i < 11; i++) {
    if (boxes[i].operation) {
      submittedAnswer += boxes[i].operation;
    }
  }
  submittedAnswer += numbers[3].toString();
  // submittedAnswer += cards[3].number.toString();
  for (i = 11; i < 13; i++) {
    if (boxes[i].operation) {
      submittedAnswer += boxes[i].operation;
    }
  }
  omgFINALLY();
}
//tbh i really dont need this but
function omgFINALLY() {
  if (eval(submittedAnswer) == 24) {
    textSize(canvasWidth / 20);
    textAlign(CENTER);
    fill(50);
    descrip('UWU you did it!', 2, 7 * canvasHeight / 10);
    textSize(canvasWidth / 75);
    descrip('Press reset to play again.', 2, 7.5 * canvasHeight / 10);
  }
  else {
    alert('try again!');
  }
}
function draw() {
  // put drawing code here
  // called continuously
}
