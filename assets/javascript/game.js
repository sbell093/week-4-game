
//Keeps track of stats
var wins = 0;
var losses = 0;
var totalScore = 0;

//Randomly chooses a number 
var randomNumber = Math.floor((Math.random() * 120) + 19);
	console.log("randomNumber" + randomNumber);

var crystalValue = Math.floor((Math.random() * 12) + 1);
	console.log("crystalValue" + crystalValue);

//Game reset function
function reset () {
	console.log("reset");

};

reset();

$("#button1").on("click", function(){
	crystalValue();
	});

