let Monkey2 = function(){

  this.health = 100;

  this.tug = function(num){
    let tugPoints = num || 10;
    this.health = this.health - tugPoints;
	  	if (this.health === 0){
	  		return "LOST" ;
	  		}
	  		else{
	  			return this.health;
	  		}
  };

};

export default Monkey2;