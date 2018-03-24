// Execute this code when the DOM has fully loaded.
$(document).ready(function () {

	//set initial value
	var wins = 0;
	var losses = 0;

	// random number you need to match in order to win
	var target = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
	var total = 0;

	// gives random number to each crystal
	var blue = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
	var yellow = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
	var red = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
	var green = Math.floor(Math.random() * ((12 - 1) + 1) + 1);

	var winScore = function () {
		if (total === target) {
			// adds a win to you total wins 
			wins++;
			// prints wins to screen
			$('#wins').text(wins);
			reset();
		} else if (total > target) {
			// adds a loss to total losses
			losses++;
			// prints losses to screen
			$('#losses').text(losses);
			// reset function
			reset();
		}
	};

	// create a reset function
	var reset = function () {
		target = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
		total = 0;
		blue = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
		yellow = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
		red = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
		green = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
		$('#winningNum').text(target);
		$('#total').text("");
	};

	$('#winningNum').text(target);

	// Creates an onclick function for the gems
	// Blue Gem
	$("#blueClick").on("click",function() {
		total = total + blue;
		$('#total').text(total);
		winScore();
	});

	// Yellow Gem
	$("#yellowClick").on("click", function() {
		total = total + yellow;
		$('#total').text(total);
		winScore();
	});

	// Red Gem
	$("#redClick").on("click", function() {
		total = total + red;
		$('#total').text(total);
		winScore();
	});

	// Green Gem
	$("#greenClick").on("click", function() {
		total = total + green;
		$('#total').text(total);
		winScore();
	});
});