let Monkey1 = function(){

	// this.strength = function(){
	// 	return Math.Random(0,10);
	// };
	this.health = 100;
  	this.tug = function(num){
	    let tugPoints = num || 10;
	    this.health = this.health - tugPoints;
	  	if (this.health === 0){
	  		return "DEFEATED" ;
	  		}
	  		else{
	  			return this.health;
	  		}
	  };

};


export default Monkey1;