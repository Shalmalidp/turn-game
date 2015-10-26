import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';


import Monkey1 from './monkey1';
import Monkey2 from './monkey2';
import Game    from './game';

'use strict'

// Good Guy Instance
let purple= new Monkey1();

// Bad Guy Instance
let king= new Monkey2();

//game instance 
let move = new Game();


// DOM Nodes Selected
let ggHealth = $('.ggHealth');
let bgHealth = $('.bgHealth');

let ggAttack = $('#attack');

// Show current (default) health
ggHealth.text(purple.health);
bgHealth.text(king.health);

// Generate a random amount of hit points
let num1 = _.random(0, 10);
let num = _.random(0, 10);

// displaying health
    // ggHealth.text(purple.health);
    // bgHealth.text(king.health);

// Setting up ON Events
ggAttack.on('click', function () {
	if(num1 < num){
    move.shiftLeft();
  }

  // Then attack!!!
	 king.tug(num);
 	 purple.tug(num1);

    ggHealth.text(purple.health);
    bgHealth.text(king.health);

   //CHECK WHICH TUG IS MORE AND MOVE IN THAT DIRECTION
  if (purple.health > king.health){
    move.shiftLeft();
  } 
  else{
    move.shiftRight();
  };

  if (purple.health === king.health){
   // $('#monkey1').removeClass('positionRight').removeClass('positionLeft');
    $('#monkey1').addClass('position');
  }

  if (king.health <= 0){
    bgHealth.text('DEFEATED!!');
  } 
  else{
        if (purple.health <= 0){
            ggHealth.text('DEFEATED!!');
            console.log('purple lost');
         }
  } 
 

	//DISABLE BUTTON ONCE ONE OF THE 2 HEALTH METERS REACH 0
	if ((purple.health <= 0) || (king.health <= 0)){
		$('#attack').prop({disabled : true});
	};

    // ggHealth.css('color', 'red');
    // //ggHealth.text(purple.health);
    // setTimeout( function(){
    //   ggHealth.css('color', 'black');
    // }, 1000);
  //}
console.log(purple);
console.log(king);
});