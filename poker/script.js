const cards = [
  "cards/2_of_clubs.png",
  "cards/2_of_diamonds.png",
  "cards/2_of_hearts.png",
  "cards/2_of_spades.png",

  "cards/3_of_clubs.png",
  "cards/3_of_diamonds.png",
  "cards/3_of_hearts.png",
  "cards/3_of_spades.png",

  "cards/4_of_clubs.png",
  "cards/4_of_diamonds.png",
  "cards/4_of_hearts.png",
  "cards/4_of_spades.png",

  "cards/5_of_clubs.png",
  "cards/5_of_diamonds.png",
  "cards/5_of_hearts.png",
  "cards/5_of_spades.png",

  "cards/6_of_clubs.png",
  "cards/6_of_diamonds.png",
  "cards/6_of_hearts.png",
  "cards/6_of_spades.png",

  "cards/7_of_clubs.png",
  "cards/7_of_diamonds.png",
  "cards/7_of_hearts.png",
  "cards/7_of_spades.png",

  "cards/8_of_clubs.png",
  "cards/8_of_diamonds.png",
  "cards/8_of_hearts.png",
  "cards/8_of_spades.png",

  "cards/9_of_clubs.png",
  "cards/9_of_diamonds.png",
  "cards/9_of_hearts.png",
  "cards/9_of_spades.png",

  "cards/10_of_clubs.png",
  "cards/10_of_diamonds.png",
  "cards/10_of_hearts.png",
  "cards/10_of_spades.png",

  "cards/ace_of_clubs.png",
"cards/ace_of_diamonds.png",
"cards/ace_of_hearts.png",
"cards/ace_of_spades.png",
"cards/ace_of_spades2.png",
"cards/black_joker.png",
"cards/jack_of_clubs.png",
"cards/jack_of_clubs2.png",
"cards/jack_of_diamonds.png",
"cards/jack_of_diamonds2.png",
"cards/jack_of_hearts.png",
"cards/jack_of_hearts2.png",
"cards/jack_of_spades.png",
"cards/jack_of_spades2.png",
"cards/king_of_clubs.png",
"cards/king_of_clubs2.png",
"cards/king_of_diamonds.png",
"cards/king_of_diamonds2.png",
"cards/king_of_hearts.png",
"cards/king_of_hearts2.png",
"cards/king_of_spades.png",
"cards/king_of_spades2.png",
"cards/queen_of_clubs.png",
"cards/queen_of_clubs2.png",
"cards/queen_of_diamonds.png",
"cards/queen_of_diamonds2.png",
"cards/queen_of_hearts.png",
"cards/queen_of_hearts2.png",
"cards/queen_of_spades.png",
"cards/queen_of_spades2.png",
"cards/red_joker.png",
];

const hand = document.getElementById("hand");
const dealButton = document.getElementById("dealButton");
const closeGameButton = document.getElementById("closeGame");
const closeProgramButton = document.getElementById("closeProgram");
let gameWindow; 

dealButton.addEventListener("click", function () {
  dealCards(); 
  checkWin(); 
});




closeGameButton.addEventListener("click", closeGame);
closeProgramButton.addEventListener("click", closeProgram);

function dealCards() {
  resetHand();
  for (let i = 0; i < 5; i++) {
      const cardIndex = Math.floor(Math.random() * cards.length);
      const cardImage = document.createElement("img");
      cardImage.src = cards[cardIndex];
      cardImage.classList.add("card");
      cardImage.style.width = "160px"; 
        cardImage.style.height = "240px"; 
      hand.appendChild(cardImage);
  }
}

function resetHand() {
  while (hand.firstChild) {
      hand.removeChild(hand.firstChild);
  }
}

function closeGame() {
  resetHand(); 
}

function closeProgram() {
  window.close();
}


function checkWin() {
  const cardsInHand = hand.children;
  const cardValues = [];

  for (let i = 0; i < cardsInHand.length; i++) {
      const cardSrc = cardsInHand[i].src;

      const cardValue = cardSrc.split("/").pop().split("_")[0];
      cardValues.push(cardValue);
  }

  const counts = {};

  for (let i = 0; i < cardValues.length; i++) {
      const cardValue = cardValues[i];
      if (counts[cardValue]) {
          counts[cardValue]++;
      } else {
          counts[cardValue] = 1;
      }
  }


  for (const value in counts) {
      if (counts[value] === 2) {
          setTimeout(function () {
              alert("¡Tienes una pareja! ¡Has ganado!");
          }, 500); 
          return;
      }
  }

  setTimeout(function () {
      alert("No has ganado esta vez. Inténtalo de nuevo.");
  }, 500); 
}
