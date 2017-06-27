console.log('Linked up');

$(function(){


	var $scoreDisplay = $('#score');
	var $main = $('#main');
	var $timeDisplay = $('#time')
	var $targets = $('.hardTarget, .easyTarget');
	var score = 0;
	var time = 100;
	var countdown= setInterval(timesUp, 1000);
	var easyTargetArray = ['#target0', '#target1'];
	var hardTargetArray = ['#target2'];
	var $target0 = $('#target0')
	var $target1 = $('#target1')
	var interval = setInterval(function(){
		animation();
	}, 1000);


	$('#finish').hide();

	$targets.on('click', function(event){
		var $this = $(this);		
		var pointsToIncrease = $this.data('points');
		incrementScore(pointsToIncrease);
		$(this).fadeOut();
		$(this).hide();
		

		// setTimeout(function() {


			if ($this.hasClass('bottom')) {

					$this.css('bottom', '-100px');	
					$this.show();

			} else if ($this.hasClass('left')){

				$this.css('left', '-35px');
				$this.show();
			} else if ($this.hasClass('right')){

				$this.css('right', '-35px');
				$this.show();
			}
			$(this).stop();
		// } , 2000);
	});

	function incrementScore (points){
		//May have to put if statement depending on target
		score += points;
		$scoreDisplay.html(score);
	};

	function timesUp(){
	 	time=time-1
	 	if (time <= -1){
	 	 	clearInterval(countdown);
	 	 	return;
	 	}
	 	$("#timer").html(time + " seconds");
	 	if (time == 0){
			$('#main').hide();
			$('#finish').show();
			$targets.stop();
			clearInterval(interval);
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

		if (selection.hasClass('easyTarget') && selection.hasClass('bottom')) {

			selection.fadeIn();
			// selection.show();
			selection
				.animate({bottom:'+=100px'},7000)
				.delay(7000)
				.animate({ bottom: '-=100px' }, 5000);

		} else if (selection.hasClass('hardTarget') && selection.hasClass('bottom')) {
			
			// selection.fadeIn();
			// selection.animate({bottom:'+=100px'},3000,function(){ 
			// 	setTimeout(function(){
			// 		selection.animate({bottom:'-=100px'},3000);
			// 	},3000);
			// })
			selection.fadeIn();

			selection
				.animate({ bottom:'+=100px'},3000)
				.delay(3000)
				.animate({ bottom:'-=100px'},3000);
			
		} else if (selection.hasClass('hardTarget') && selection.hasClass('left')){

			selection.fadeIn();
			selection
				.animate({left:'+=100px'}, 3000)
				.delay(3000)
				.animate({left:'-=100px'}, 3000);
				
	};

};

//Incase of code break
// && selection.data('position') === "bottom")


	animation();
//To-do

//Look into .delay

});