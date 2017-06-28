console.log('Linked up');

$(function(){


	var $scoreDisplay = $('#score');
	var $main = $('#main');
	var $timeDisplay = $('#time')
	var $targets = $('.hardTarget, .easyTarget');
	var score = 0;
	var time = 5;
	var $start = $('#start');
	// var countdown = setInterval(timesUp, 1000);
	var $startGame = $('#startGame');
	// var easyTargetArray = ['#target0', '#target1'];
	// var hardTargetArray = ['#target2'];
	var $target0 = $('#target0')
	var $target1 = $('#target1')
	// var interval = setInterval(function(){
	// 	animation();
	// }, 2000);



	$('#finish').hide();
	$main.hide();

	$startGame.on('click', function(event){
		var countdown = setInterval(timesUp, 1000);
		$start.hide();
		$main.show();
		var interval = setInterval(function(){
			animation();
		}, 2000);
	})

	$targets.on('click', function(event){
		var $this = $(this);		
		var pointsToIncrease = $this.data('points');
		incrementScore(pointsToIncrease);
		$(this).fadeOut();
		$(this).hide();
		$(this).stop();
		
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

					$this.css('left', '-35px');
					$this.show();
					$this.fadeOut();

			} else if ($this.hasClass('right')){

					$this.css('right', '-35px');
					$this.show();
			}

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
	 	 	 // clearInterval(countdown);
	 	 	return;
	 	}
	 	$("#timer").html(time + " seconds");
	 	if (time == 0){
			$('#main').hide();
			$('#finish').show();
			$targets.stop();

			// clearInterval(interval);
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
			// selection.show();
			selection
				.animate({bottom:'+=100px'},3000)
				// .delay(3000)
				.animate({ bottom:'-=100px'},3000);

		} else if (selection.hasClass('bottomHard')) {
			
			//Old code, keep for now
			// selection.fadeIn();
			// selection.animate({bottom:'+=100px'},3000,function(){ 
			// 	setTimeout(function(){
			// 		selection.animate({bottom:'-=100px'},3000);
			// 	},3000);
			// })
			selection.fadeIn();
			selection
				.animate({ bottom:'+=100px'},1000)
				// .delay(1000)
				.animate({ bottom:'-=100px'},1000);
			
		} else if (selection.hasClass('leftEasy')){

			selection.fadeIn();
			selection
				.animate({left:'+=100px'},1000)
				// .delay(1000)
				.animate({left:'-=100px'}, 1000);
				
	} else if (selection.hasClass('leftHard')){
			selection.fadeIn();
			selection
				.animate({left:'+=100px'},3000)
				// .delay(3000)
				.animate({left:'-=100px'}, 3000);
	}

};

//Incase of code break
// && selection.data('position') === "bottom")


	animation();


});