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
	}, 3000);


	$('#finish').hide();

	$targets.on('click', function(event){
		var $this = $(this);		
		var pointsToIncrease = $this.data('points');
		incrementScore(pointsToIncrease);
		$(this).fadeOut();
		$(this).hide();
		$(this).stop();

		setTimeout(function() {

			if ($this.data('position') === ('bottom') {
					$this.css('bottom', '-100px');	
					$this.show();

			},2000);

			else if ($this.data('left')){
				$this.css('left', '-100px');
				$this.show();
			}
		} , 2000);
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

		if (selection.hasClass('easyTarget') && selection.data('position') === "bottom") {

			selection.fadeIn();
			selection.show();
			selection.animate({bottom:'100px'},7000,function(){
				setTimeout(function () {
					selection.animate({ bottom: '-100px' }, 5000);
				}, 7000);
			});

		} else if (selection.hasClass('hardTarget') && selection.data('position') === "bottom") {
			
			selection.fadeIn();
			selection.animate({bottom:'30px'},3000,function(){ 
				setTimeout(function(){
					selection.animate({bottom:'-100px'},3000);
				},3000);
})
		} else if (selection.hasClass('hardTarget') && selection.data('position') === "bottom"){

			selection.fadeIn();
			selection.animate({left:'100px'},3000,function(){ 
				setTimeout(function(){
					selection.animate({left:'-100px'},3000);
				},3000);
		})
	};

};

//Incase of code break
// && selection.data('position') === "bottom")


	animation();
//To-do

//Look into .delay

});