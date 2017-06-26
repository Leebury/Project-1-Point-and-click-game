console.log('Linked up');

$ (function(){


var $scoreDisplay = $('#score');
var $main = $('#main');
var $etarget = $('.easyTarget');
// var $mtarget
var $htarget = $('.hardTarget');
var score = 0;
var easyTargetArray = ['#target0', '#target1'];
var hardTargetArray = [];
var $target0 = $('#target0')
var $target1 = $('#target1')
var interval = setInterval(function(){
	animation();
},9000);

//Change to target when needed
	$etarget.on('click', function(event){
		console.log('Body click');
		incrementScore();
		$(this).fadeOut(1000);
		$(this).stop();

	});

	function incrementScore (){

		score += 10;
		$scoreDisplay.html(score);
	};


	// $target.animate({bottom:'100px'},7000,function(){
	// 	setTimeout(function(){
	// 	$target.animate({bottom:'-100px'}, 5000);
	// 	},7000);

	// });

	function animation(){

		var selection = easySelector(easyTargetArray);
		console.log(selection);

		if ((selection == '#target0')||(selection =='#target1')) {
					var string = $(selection);
					string.animate({bottom:'100px'},7000,function(){
					setTimeout(function(){
					string.animate({bottom:'-100px'}, 5000);
					},7000);
			});

		}


		// if ($htarget){
		// 			$(this).animate({bottom:'30px'},3000) setTimeout(function(){
		// 			$(this).animate({bottom:'-100px'},3000);
		// 	},3000);
		// };

	};
	
	function easySelector(array) {
		var max = 2;
		var min = 0;
  		var number =(Math.floor(Math.random() * (max - min)) + min);
  		return (array[number]);
}
	animation();

//To-do

//Create and independant animate function
//Set elements to be visable
//Look into .delay






});