var cards =["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkForMatch = function(){
		if (cardsInPlay.length === 2) 
	{if (cardsInPlay[0]===cardsInPlay[1]) {alert("You found a match!")}
	else {alert("Sorry, try again.")}};
}
var flipCard = function(cardID) {
	console.log("user flipped"+ " " + cards[cardID])
	cardsInPlay.push(cards[cardID])
	checkForMatch()
};
flipCard(0);
flipCard(2);
	
