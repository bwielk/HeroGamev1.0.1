var Hero = function(name, favouriteFood){
  this.name = name;
  this.health = 100;
  this.favouriteFood = favouriteFood;
}

Hero.prototype = {
  speech: function(){
    return "Hi, I am " + this.name;
  },
  eat: function(food){
    if(food.name === this.favouriteFood){
      number = food.replenishmentValue;
      this.health += number*1.5;
    }else{
      this.health += food.replenishmentValue;
    }
  }
}



module.exports = Hero;
