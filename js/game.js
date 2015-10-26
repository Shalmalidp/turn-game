	
import $ from 'jquery';

let Game = function(){

	//params = params || {};

	this.shiftRight = function(){
		$('#monkey1').removeClass('position');
		$("#monkey1").removeClass('positionLeft').removeClass('positionRight');
		$('#monkey1').addClass('positionRight').css('transition' , '5s');
		console.log('shiftRight method called');
	};

	this.shiftLeft = function(){
		$('#attack').on('click',function(){
		$('#monkey1').removeClass('position');	
		$('#monkey1').removeClass('positionRight').removeClass('positionLeft');
		$('#monkey1').addClass('positionLeft').css('transition' , '5s');
		console.log('shiftLeft method called');
		});
	};
};


export default Game;