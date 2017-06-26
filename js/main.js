console.log('Linked up');

$ (function(){


var $scoreDisplay = $('#score');
var $main = $('#main');
var $target = $('.target');
var score = 0;

//Change to target when needed
	$target.on('click', function(event){
		console.log('Body click');
		incrementScore();
		decend();

	});

	function incrementScore (){

		score += 10;
		$scoreDisplay.html(score);
	}

	function decend (){
		$("#easyTarget").slideUp(3000);
    };


//For now use div to add click function
//On click adds 10 to the score





});