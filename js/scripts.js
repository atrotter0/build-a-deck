function buildDeck(cardPrefixes, cardSuits) {
  cardSuits.forEach(function(suit) {
    cardPrefixes.forEach(function(prefix) {
      var finalCard = prefix + " of " + suit;
      console.log();
      $("#yourCards").append("<li>" + finalCard + "</li>");
    });
  });
}

function getCardPrefixes() {
  var cardPrefix = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
  return cardPrefix;
}

function getCardSuits() {
  var cardSuits = ["Spades", "Clubs", "Diamonds", "Hearts"];
  return cardSuits;
}

$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();

    $(".output-block").show();
    buildDeck(getCardPrefixes(), getCardSuits());
  });
});
