//make sure java is linked up and working
console.log("I'm here! still!");

//define variables
var generateMatchScore = Math.floor(Math.random() * 102 + 19);
var matchScore = Number(generateMatchScore);
var crystalOne = [];
var crystalTwo = [];
var crystalThree = [];
var crystalFour = [];
var winsCounter = 0;
var lossesCounter = 0;
var userCounter = [];
var userTotal = [];
$("#winsCounter").attr("value", winsCounter);
console.log(winsCounter);
$("#winsCounter").attr("value", winsCounter);

console.log(winsCounter);
console.log(lossesCounter, "Losses");
console.log(generateMatchScore, "generate outside");

//define functions for win and lose before game begins
var lose = function lose() {
	lossesCounter = parseInt(lossesCounter) + 1;
	$("#lossesCounter").text("Losses: " + lossesCounter);
	$("#lossesCounter").attr("value", lossesCounter);
};
var win = function win() {
	winsCounter = Number(winsCounter) + 1;
	$("#winsCounter").attr("value", winsCounter);
	$("#winsCounter").text("Wins: " + winsCounter);
	if (winsCounter === 1) {
		audio.play();
	}
};
var tallyWin = function tallyWin() {
	userTotal = Number(userTotal) + Number(generateMatchScore);
	$("#userTotal").text("Total Score: " + userTotal);
};

console.log(crystalOne);
console.log(crystalTwo);

//have 'new round' do the following:
//select random number from 19-120
//have computer display it as matchScore
//set userCounter to 0
//have each crystal generate number 1-12 (do not display)
var newRound = function newRound() {
	var generateMatchScore = Math.floor(Math.random() * 102 + 19);
	matchScore = Number(generateMatchScore);
	console.log(generateMatchScore, "generate inside");
	$("#matchScore").attr("value", generateMatchScore);
	$("#matchScore").text(generateMatchScore);
	userCounter = 0;
	$("#userCounter").text("User Counter: " + userCounter);
	var crystalOne = [Math.floor(Math.random() * 12) + 1];
	var crystalTwo = [Math.floor(Math.random() * 12) + 1];
	var crystalThree = [Math.floor(Math.random() * 12) + 1];
	var crystalFour = [Math.floor(Math.random() * 12) + 1];
	$("#btn1").attr("value", crystalOne);
	$("#btn2").attr("value", crystalTwo);
	$("#btn3").attr("value", crystalThree);
	$("#btn4").attr("value", crystalFour);
};

//start game after linking variables to html
//assign variables to divs
$("#userTotal").text("Total Score: " + userTotal);
$("#winsCounter").text("Wins: " + winsCounter);
$("#winsCounter").attr("value", winsCounter);
$("#lossesCounter").text("Losses: " + lossesCounter);
$("#lossesCounter").attr("value", lossesCounter);
$("#userCounter").attr("value", userCounter);

//add each crystal's value to user counter on click
$(".btn").click(function() {
	userCounter = Number(userCounter) + Number($(this).val());
	$("#userCounter").text("User Counter: " + userCounter);

	//if user wins, add user counter amount to user total
	//add 1 to wins counter
	//initiate new round
	if (Number(userCounter) > matchScore) {
		lose();
		newRound();
	}
	// if user counter > matchScore
	//add 1 to losses counter
	//initiate new round
	if (Number(userCounter) == matchScore) {
		win();
		tallyWin();
		newRound();
	}
});
newRound();
