console.log('Linked up');

$ (function(){


var $scoreDisplay = $('#score');
var $main = $('#main');
var $target = $('.target');
var score = 0;

//Change to target when needed
	$main.on('click', function(event){
		console.log('Body click');
		incrementScore();
	});

	function incrementScore (){

		score += 10;
		$scoreDisplay.html(score);
	}


//For now use div to add click function
//On click adds 10 to the score





});