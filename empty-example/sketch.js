function preload() {
}

const canvasWidth = 1060;
const canvasHeight = 660;
function setup() {
  // put setup code here
  // called once
  createCanvas(canvasWidth, canvasHeight);
  // background('#FFDEAD');
  textAlign(CENTER);
  textFont('Trebuchet MS');

  // the set up
  makeDescription();
  fill(250);
  makeCards();
  chooseCards();
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
  descrip('24 POINTS', 2, 40);
  textSize(canvasWidth / 75);
  textAlign(LEFT);
  descrip("Directions: use the (, ), *, /, +, - operations to combine the four number cards together to make 24.", 4, 60);
  descrip("To enter an operation, click on the operation buttons above and below the box.", 4, 80);
  descrip("Pressing clear will clear all the operation boxes.", 4, 100);
  descrip("If only three cards show, press reset or refresh the page.", 4, 120);
}

// adding the placement of the four cards
let cardImages = [];
let loadedCards = [];
let cardLocations = [1, 3, 5, 7];
let cards = [];
class Cards {
  constructor(thefckingimage, value) {
    this.xlocation = false;
    this.image = thefckingimage;
    this.number = value;
  }
}
function importImages() {
  cardImages[0] = createImg('https://drive.google.com/uc?export=download&id=1u8WThKTdtEIc3cPOpKbfm_imTNHz_wtb').hide();
  cardImages[1] = createImg('https://drive.google.com/uc?export=download&id=1aPKbR_5iUYk3cmP61UeJeXt22I7luXXI').hide();
  cardImages[2] = createImg('https://drive.google.com/uc?export=download&id=1WwD9dhhOY_3h2oG6xzlFOLdCff9AnO7T').hide();
  cardImages[3] = createImg('https://drive.google.com/uc?export=download&id=1R7UPrbWoogAfpoD9yNBJite3T-PbPMyM').hide();
  cardImages[4] = createImg('https://drive.google.com/uc?export=download&id=1X0qRa0ZCMa42ag4tbj-k3ZBvsad0hwNq').hide();
  cardImages[5] = createImg('https://drive.google.com/uc?export=download&id=1oSuvKEPCqGljkFX_UYdBt4pRjrZSBtoc').hide();
  cardImages[6] = createImg('https://drive.google.com/uc?export=download&id=1F2CIxzfsYszRTdfHhGZg1KH06x-pqQrf').hide();
  cardImages[7] = createImg('https://drive.google.com/uc?export=download&id=1nj8zU2VDl2tgFNTlwKzga0NprWaRQUGF').hide();
  cardImages[8] = createImg('https://drive.google.com/uc?export=download&id=1-KWS93xckc-v-02fdtuJjQskqIw-eycd').hide();
}
function makeCards() {
  // making an array for all 10 cards
  importImages()
  for (i = 0; i < 9; i++) {
    // loadedCards[i] = new Cards(i + 1, 0);
    loadedCards[i] = new Cards(cardImages[i], i + 1);
  }
}
let drawnCard;
function chooseCards() {
  console.log(loadedCards)
  //choosing 4 random cards in the loadedCards array
  drawnCard = loadedCards[int(random(9))]
  cards[0] = new Cards(drawnCard.image, drawnCard.number);
  cards[0].xlocation = cardLocations[0];
  cards[0].image.position(cardLocations[0] * canvasWidth / 10, canvasHeight / 3.5);
  cards[0].image.size(canvasWidth / 8.25, canvasHeight / 4);
  cards[0].image.show();
  console.log(cards[0].number, cards[0].xlocation);
  drawnCard = loadedCards[int(random(9))];
  while (drawnCard.number == cards[0].number) {
    drawnCard = loadedCards[int(random(9))];
  }
  cards[1] = new Cards(drawnCard.image, drawnCard.number);
  cards[1].xlocation = cardLocations[1];
  cards[1].image.position(cardLocations[1] * canvasWidth / 10, canvasHeight / 3.5);
  cards[1].image.size(canvasWidth / 8.25, canvasHeight / 4);
  cards[1].image.show();
  console.log(cards[1].number, cards[1].xlocation);
  while (drawnCard.number == cards[0].number || drawnCard.number == cards[1].number) {
    drawnCard = loadedCards[int(random(9))];
  }
  cards[2] = new Cards(drawnCard.image, drawnCard.number);
  cards[2].xlocation = cardLocations[2];
  cards[2].image.position(cardLocations[2] * canvasWidth / 10, canvasHeight / 3.5);
  cards[2].image.size(canvasWidth / 8.25, canvasHeight / 4);
  cards[2].image.show();
  console.log(cards[2].number, cards[2].xlocation);
  while (drawnCard.number == cards[0].number || drawnCard.number == cards[1].number || drawnCard.number == cards[2].number) {
    drawnCard = loadedCards[int(random(9))];
  }
  cards[3] = new Cards(drawnCard.image, drawnCard.number);
  cards[3].xlocation = cardLocations[3];
  cards[3].image.position(cardLocations[3] * canvasWidth / 10, canvasHeight / 3.5);
  cards[3].image.size(canvasWidth / 8.25, canvasHeight / 4);
  cards[3].image.show();
  console.log(cards[3].number, cards[3].xlocation);
  // for (i = 0; i < 4; i++) {
  //   drawnCard = loadedCards[int(random(9))]
  //   cards[i] = new Cards(drawnCard.image, drawnCard.number);
  //   cards[i].xlocation = cardLocations[i];
  //   cards[i].image.position(cardLocations[i] * canvasWidth / 10, canvasHeight / 3.5);
  //   cards[i].image.size(canvasWidth / 8.25, canvasHeight / 4);
  //   cards[i].image.show();
  //   console.log(cards[i].number, cards[i].xlocation);
  // }
  console.log(cards[0].number, cards[1].number, cards[2].number, cards[3].number);
  console.log(cards[0].xlocation, cards[1].xlocation, cards[2].xlocation, cards[3].xlocation);
}
function reprintCards() {
  for (i = 0; i < 4; i++) {
    cards[i].image.position(cards[i].xlocation * canvasWidth / 10, canvasHeight / 3.5);
    cards[i].image.show();
  }
  console.log(cards[0].number, cards[1].number, cards[2].number, cards[3].number);
  console.log(cards[0].xlocation, cards[1].xlocation, cards[2].xlocation, cards[3].xlocation);
}

// creating the boxes to put the operations in
let boxes = [];
let xLocation = [.5, .75, 2.25, 2.5, 2.75, 4.25, 4.5, 4.75, 6.25, 6.5, 6.75, 8.25, 8.5];
const numBoxes = 13;
const opBoxLength = 20;
let xPos;
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
    fill(250);
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
  fill(250);
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
const switchxLocation = [2.35, 4.35, 6.35];
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
function switchCards() {
  if (mouseX < 3 * canvasWidth / 10) {
    cardsToSwitch(0, 1);
  }
  else if (mouseX > 6 * canvasWidth / 10) {
    cardsToSwitch(2, 3);
  }
  else {
    cardsToSwitch(1, 2);
  }
}
let tempLocation = false;
let tempCard = false;
function cardsToSwitch(c1, c2) {
  console.log(cards[c1].image,cards[c1].number);
  for (i = 0; i < 4; i++) {
    cards[i].image.hide();
  }
  // switch in the card objects in the array
  tempCard = cards[c1];
  cards[c1] = cards[c2];
  cards[c2] = tempCard;
  // switch the location so that the locations are still 1 3 5 7
  tempLocation = cards[c1].xlocation;
  cards[c1].xlocation = cards[c2].xlocation;
  cards[c2].xlocation = tempLocation;
  reprintCards();
}
function clearBox() {
  for (i = 0; i < numBoxes; i++) {
    opEnter(boxes[i].xlocation, true, false);
    boxes[i].operation = '';
  }
}
let boxNumber;
function pressedOperation() {
  fill(250);
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
  textSize(canvasWidth / 75);
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

let submittedAnswer = '';
function finalEquation() {
  for (i = 0; i < 2; i++) {
    if (boxes[i].operation) {
      submittedAnswer += boxes[i].operation;
    }
  }
  submittedAnswer += cards[0].number.toString();
  for (i = 2; i < 5; i++) {
    if (boxes[i].operation) {
      submittedAnswer += boxes[i].operation;
    }
  }
  submittedAnswer += cards[1].number.toString();
  for (i = 5; i < 8; i++) {
    if (boxes[i].operation) {
      submittedAnswer += boxes[i].operation;
    }
  }
  submittedAnswer += cards[2].number.toString();
  for (i = 8; i < 11; i++) {
    if (boxes[i].operation) {
      submittedAnswer += boxes[i].operation;
    }
  }
  submittedAnswer += cards[3].number.toString();
  for (i = 11; i < 13; i++) {
    if (boxes[i].operation) {
      submittedAnswer += boxes[i].operation;
    }
  }
  console.log(submittedAnswer);
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
  submittedAnswer = '';
}
function draw() {
  // put drawing code here
  // called continuously
}
