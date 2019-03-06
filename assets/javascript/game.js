//make sure java is linked up and working
console.log("I'm here! still!");

//define variables
var generateMatchScore = [Math.floor(Math.random() * 102 + 19)];
var matchScore = Number(generateMatchScore);
var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;
var winsCounter = 0;
var lossesCounter = 0;
var userCounter = 0;
var userTotal = 0;

//set up functions for win and lose
var lose = function lose() {
	lossesCounter = Number(lossesCounter) + 1;
	$("#lossesCounter").text("Losses: " + lossesCounter);
	$("#lossesCounter").attr("value", lossesCounter);
};
var win = function win() {
	winsCounter = Number(winsCounter) + 1;
	$("#winsCounter").attr("value", winsCounter);
	$("#winsCounter").text("Wins: " + winsCounter);
};
var tallyWin = function tallyWin() {
	userTotal = Number(userTotal) + Number(generateMatchScore);
	$("#userTotal").text("Total Score: " + userTotal);
};

//have 'new round' do the following:
//have computer select random number from 19-120
//have computer display it as matchScore
//set userCounter to 0
//have each crystal generate number 1-12 (do not display)
var newRound = function newRound() {
	var generateMatchScore = [Math.floor(Math.random() * 102 + 19)];
	matchScore = Number(generateMatchScore);
	$("#matchScore").attr("value", generateMatchScore);
	$("#matchScore").text("Number to Match: " + generateMatchScore);
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
newRound();

//add each crystal's value to user counter on click
$(".btn").click(function() {
	userCounter = Number(userCounter) + Number($(this).val());
	$("#userCounter").text("User Counter: " + userCounter);

	//if user wins, add user counter amount to user total
	//add 1 to wins counter
	//initiate new round
	if (Number(userCounter) > matchScore) {
		lose();
		tallyLose();
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

//
