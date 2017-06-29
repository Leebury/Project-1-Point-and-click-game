console.log('Linked up');

$(function(){

//To-do
//Add sounds to click
//Leaderboard
//Diagonal targets

	var $scoreDisplay = $('#score');
	var $main = $('#main');
	var $timeDisplay = $('#time')
	var $targets = $('.hardTarget, .easyTarget');
	var score = 0;
	var time = 60;
	var $start = $('#start');
	var $startGame = $('#startGame');
	var $playAgain = $('#playAgain');
	var $target0 = $('#target0')
	var $target1 = $('#target1')
	var sndThrow = new Audio("Throw.wav");
	var sndQuack = new Audio("quack.wav")





	$('#finish').hide();
	$main.hide();
	$startGame.on('click', function(event){
		var countdown = setInterval(timesUp, 1000);
		$start.hide();
		$main.show();
		var interval = setInterval(function(){
			animation();
		}, 1000);
	})

	$main.on('click', function(event){
		sndThrow.play();
	})

	$targets.on('click', function(event){
		var $this = $(this);		
		var pointsToIncrease = $this.data('points');
		incrementScore(pointsToIncrease);
		$(this).fadeOut();
		$(this).hide();
		$(this).stop();
		sndQuack.play();

		
			if ($this.hasClass('bottomHard')) {

					$this.css('bottom', '-100px');	
					$this.show();
					$this.fadeOut();

			} else if ($this.hasClass('bottomEasy')) {

					$this.css('bottom', '-100px');	
					$this.show();
					$this.fadeOut();

			} else if ($this.hasClass('leftHard')){

					$this.css('left', '-35px');
					$this.show();
					$this.fadeOut();

			} else if ($this.hasClass('leftEasy')){

					$this.css('left', '-100px');
					$this.show();
					$this.fadeOut();

			} else if ($this.hasClass('rightEasy')){

					$this.css('right', '-70px');
					$this.show();

			} else if ($this.hasClass('rightHard')){

					$this.css('right', '-35px');
					$this.show();
			}

		// } , 2000);
	});

	$(document).ready(function() {
    $main.on("contextmenu",function(e){
       return false;
    }); 
}); 


	function incrementScore (points){
		score += points;
		$scoreDisplay.html(score);
	};

	function timesUp(){
	 	time=time-1
	 	if (time <= -1){
	 	 	return;
	 	}
	 	$("#timer").html(time + " seconds");
	 	if (time == 0){
			$('#main').hide();
			$('#finish').show();
			$targets.stop();
			endScore();
	 	};
	};

	function endScore(){

		var finalScore=$scoreDisplay.html();
		$('#finalScore').append(finalScore);
	}
	


	function getRandomTarget () {

		var randomNumber = Math.floor(Math.random()*( $targets.length - 0))
		return $('.easyTarget:not(:animated), .hardTarget:not(:animated)').eq(randomNumber);
	}

	function animation(){

		var selection = getRandomTarget()
		console.log(selection);

		if (selection.hasClass('bottomEasy')) {

			selection.fadeIn();
			selection
				.animate({bottom:'+=120px'},2000, function(){
				// .delay(3000)
				$(this).animate({ bottom:'-=120px'},2000);
			});

		} else if (selection.hasClass('bottomHard')) {
			selection.fadeIn();
			selection
				.animate({ bottom:'+=150px'},1000,function(){
				// .delay(1000)
				$(this).animate({ bottom:'-=150px'},1000);
			});		

		} else if (selection.hasClass('leftEasy')){
			selection.fadeIn();
			selection
				.animate({left:'+=100px'},2000,function(){
				// .delay(1000)
				$(this).animate({left:'-=100px'},2000);
			});

	} else if (selection.hasClass('leftHard')){
			selection.fadeIn();
			selection
				.animate({left:'+=135px'},1000,function(){
				// .delay(3000)
				$(this).animate({left:'-=135px'}, 1000);
		});
	} else if (selection.hasClass('rightEasy')){
			selection.fadeIn();
			selection
				.animate({right:'+=100px'},1000,function(){
				// .delay(3000)
				$(this).animate({right:'-=100px'}, 1000);
		});
	} else if (selection.hasClass('rightHard')){
			selection.fadeIn();
			selection
				.animate({right:'+=135px'},1000,function(){
				// .delay(3000)
				$(this).animate({right:'-=135px'}, 1000);
		});
	}
};

$playAgain.on('click',function(event){

	location.reload();
})

	animation();


});