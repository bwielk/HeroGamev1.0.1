var weapon = require('./weapon');
var hero = require('./hero');

var Hero = function(name, favouriteFood){
  this.name = name;
  this.health = 100;
  this.favouriteFood = favouriteFood;
  this.rucksack = [];
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
  },

  addWeapon: function(weapon){
    this.rucksack.push(weapon);
  },

  attack: function(weapon, hero){
    hero.health -= weapon.damage;
    weapon.cracks += weapon.fragility;
    weapon.state -= weapon.fragility;
  }, 

  fix: function(weapon){
    for(var item of this.rucksack){
      if(item.name === weapon.name){
       item.state += weapon.cracks;
       item.cracks = 0;
      }
    }
  }
}



module.exports = Hero;
