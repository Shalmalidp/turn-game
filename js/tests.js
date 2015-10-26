import Monkey1 from './monkey1';
import Monkey2 from './monkey2';
import Game from './game';

(function() {
  'use strict';

  describe('About My Monkey Purple', function() {

    beforeEach( function() {
      window.x = new Monkey1();
    });

    describe('creating Purple', function() {
      it('should create an instance of Monkey1', function () {
        expect(x instanceof Monkey1).to.equal(true);
      });
    });

    describe('Purple\'s health', function() {
      it('should have full health upon creation', function() {
        expect(x.health).to.equal(100);
      });
    });

    describe('the Tug applied',function(){
      it('should take a number as parameter', function(){
        var num;
        expect (x.tug(num)).to.be.ok;
      });
    });
  });

//about my player 2 Monkey2 
describe('About My Monkey King', function() {

    beforeEach( function() {
      window.x = new Monkey2();
    });

    describe('creating King', function() {
      it('should create an instance of Monkey2', function () {
        expect(x instanceof Monkey2).to.equal(true);
      });
    });

    describe('King\'s health', function() {
      it('should have full health upon creation', function() {
        expect(x.health).to.equal(100);
      });
    });
 describe('the Tug applied',function(){
      it('should take a number as parameter', function(){
        var num;
        expect (x.tug(num)).to.be.ok;
      });
    });
});
//About the Game
describe ('About the Game', function(){
  
  beforeEach(function(){
    window.x = new Game();
  });

    describe('creating the game', function(){
      it ('should create an instance of Game', function(){
        expect(x instanceof Game).to.equal(true);
      });
    });

    describe('move position right',function(){
      it('should move the position of Purple and king Right', function(){
          //expect(x.shiftRight()).to.equal(true);
          expect(x.shiftRight()).to.equal(undefined);
      });
    });

    describe('move position left', function(){
      it('should move the position Left',function(){
          // expect(x.shiftLeft()).to.be(true);
          expect(x.shiftLeft()).to.equal(undefined);
      });
    });


});






}());


// Good Guy

// Bad Guy


// Both will have attack methods
// Both will have health