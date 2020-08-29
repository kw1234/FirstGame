// build deck
let deck = [];

// build suits
let suits = [];
suits["spades"] = [
  // spades
  ["A", "spade"],
  ["2", "spade"],
  ["3", "spade"],
  ["4", "spade"],
  ["5", "spade"],
  ["6", "spade"],
  ["7", "spade"],
  ["8", "spade"],
  ["9", "spade"],
  ["10", "spade"],
  ["J", "spade"],
  ["Q", "spade"],
  ["K", "spade"],
];
suits["hearts"] = [
  // hearts
  ["A", "heart"],
  ["2", "heart"],
  ["3", "heart"],
  ["4", "heart"],
  ["5", "heart"],
  ["6", "heart"],
  ["7", "heart"],
  ["8", "heart"],
  ["9", "heart"],
  ["10", "heart"],
  ["J", "heart"],
  ["Q", "heart"],
  ["K", "heart"],
];
suits["diamonds"] = [
  // diamonds
  ["A", "diamond"],
  ["2", "diamond"],
  ["3", "diamond"],
  ["4", "diamond"],
  ["5", "diamond"],
  ["6", "diamond"],
  ["7", "diamond"],
  ["8", "diamond"],
  ["9", "diamond"],
  ["10", "diamond"],
  ["J", "diamond"],
  ["Q", "diamond"],
  ["K", "diamond"],
];
suits["clubs"] = [
  // clubs
  ["A", "club"],
  ["2", "club"],
  ["3", "club"],
  ["4", "club"],
  ["5", "club"],
  ["6", "club"],
  ["7", "club"],
  ["8", "club"],
  ["9", "club"],
  ["10", "club"],
  ["J", "club"],
  ["Q", "club"],
  ["K", "club"],
];

// build stock pile
let s = [];

// build waste pile
let w = [];

// build foundations
let spades = [];
let hearts = [];
let diamonds = [];
let clubs = [];

// create deck
function create(deck, suits) {
  console.log("Creating Deck...");
  // loop through each suit
  for (let suit in suits) {
    suit = suits[suit];
    // loop through each card in suit
    for (let card in suit) {
      card = suit[card];
      deck.push(card); // push card to deck
    }
  }
  return deck;
}

// shuffle deck
function shuffle(deck) {
  console.log("Shuffling Deck...");
  // declare vars
  let i = deck.length,
    temp,
    rand;
  // while there remain elements to shuffle
  while (0 !== i) {
    // pick a remaining element
    rand = Math.floor(Math.random() * i);
    i--;
    // and swap it with the current element
    temp = deck[i];
    deck[i] = deck[rand];
    deck[rand] = temp;
  }
  return deck;
}

// deal deck
function deal(deck, table) {
  console.log("Dealing Deck...");
  // move all cards to stock
  table["stock"] = deck;
  // build tableau
  let tabs = table["tab"];
  // loop through 7 tableau rows
  for (let row = 1; row <= 7; row++) {
    // loop through 7 piles in row
    for (let pile = row; pile <= 7; pile++) {
      // build blank pile on first row
      if (row === 1) tabs[pile] = [];
      // deal card to pile
      move(table["stock"], tabs[pile], false);
    }
  }
  return table;
}
