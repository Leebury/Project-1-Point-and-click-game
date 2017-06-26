console.log('Linked up');

$ (function(){


var $scoreDisplay = $('#score');
var $main = $('#main');
var $target = $('.easyTarget');
var score = 0;

//Change to target when needed
	$target.on('click', function(event){
		console.log('Body click');
		incrementScore();
		$(this).slideUp(1000);

	});

	function incrementScore (){

		score += 10;
		$scoreDisplay.html(score);
	}

	$target.animate({bottom:'100px'},7000,function(){ //can set time after 100px

		setTimeout(function(){
		$target.animate({bottom:'-100px'});
		},7000);

	});


	// function decend (){
	// 	$(".easyTarget").slideUp(3000);
 //    };


//For now use div to add click function
//On click adds 10 to the score





});