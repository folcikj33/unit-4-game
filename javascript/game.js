function initialize() {
	//code.jquery.com/jquery-3.3.1.min.js
}
$(initialize);

var generateMatchScore = [Math.floor(Math.random()*(102)+19)];
var generateCrystalScore = []
var matchScore;
var winsCounter = 0;
var lossesCounter = 0;
var userCounter = 0;
var userTotal = 0;
var newRound = function(){

}

console.log("I'm here!")

console.log(generateMatchScore)

//display userCounter
//display userTotal
//have 'new round' do the following:
    //have computer select random number from 19-120
    //have computer display it as matchScore
    //set userCounter to 0
    //have each crystal generate number 1-12 (do not display)
//have each click of crystal add its value to user counter
//if user counter = matchScore
    //add user counter amount to user total
    //add 1 to wins counter
    //initiate new round
//else, if user counter > matchScore
    //add 1 to losses counter
    //initiate new round
//else, wait for user to click