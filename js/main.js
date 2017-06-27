console.log('Linked up');

$ (function(){


var $scoreDisplay = $('#score');
var $main = $('#main');
// var $etarget = $('.easyTarget');
// var $mtarget
// var $htarget = $('.hardTarget');

var $targets = $('.hardTarget, .easyTarget');
var score = 0;
var easyTargetArray = ['#target0', '#target1'];
var hardTargetArray = ['#target2'];
var $target0 = $('#target0')
var $target1 = $('#target1')
var interval = setInterval(function(){
	animation();
}, 3000);


	//this only works for hitting easy targets
	//need to find a way to have the click respond based on what's clicked
	//Pref without making an entire new function for each target

	$targets.on('click', function(event){
		var $this = $(this);
		
		var pointsToIncrease = $this.data('points');
		incrementScore(pointsToIncrease);

		$(this).fadeOut();
		$(this).hide();
		// $(this).stop();
		setTimeout(function(){
			$this.css('bottom', '-100px');
			// $this.fadeIn(); 
		}, 2000);


	});

	function incrementScore (points){
		//May have to put if statement depending on target
		score += points;
		$scoreDisplay.html(score);
	};

	function getRandomTarget () {

		var randomNumber = Math.floor(Math.random()*( $targets.length - 0))

		return $('.easyTarget:not(:animated), .hardTarget:not(:animated)').eq(randomNumber);
	}

	function animation(){

		var selection = getRandomTarget()
		console.log(selection);



		if (selection.hasClass('easyTarget')) {
			// var string = $(selection);
			selection.fadeIn();
			selection.show();
			selection.animate({bottom:'100px'},7000,function(){
				setTimeout(function(){
					selection.animate({bottom:'-100px'}, 5000);
				},7000);
			});

		} else if (selection.hasClass('hardTarget')) {
			
			selection.animate({bottom:'30px'},3000,function(){ 
				setTimeout(function(){
					selection.animate({bottom:'-100px'},3000);
				},3000);
			});

		};
	};

	// function arrayselect(){
	// 	var max = 2
	// 	var min = 0
	// 	var number =(Math.floor(Math.random()*(max-min)) + min);

	// 	if (number == 0){ 
	// 		return easySelector(easyTargetArray);

	// 	}

	// 	if (number==1){
	// 		return hardSelector(hardTargetArray);
	// 	}
	// }
	// function easySelector(array) {
	// 	var max = 2;
	// 	var min = 0;
 //  		var number =(Math.floor(Math.random() * (max - min)) + min);
 //  		return (array[number]);
	// }

	// function hardSelector(array) {
	// 	var max = 1;
	// 	var min = 0;
 //  		var number =(Math.floor(Math.random() * (max - min)) + min);
 //  		return (array[number]);

	// }

	animation();
//To-do

//Look into .delay

});