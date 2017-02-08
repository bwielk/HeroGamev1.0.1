var is = require('assert');
var Hero = require('../hero');
var Food = require('../food');

describe("Hero", function(){

  it('hero should have name', function(){
    var hero1 = new Hero("Rory", "Pizza");
    is.equal("Rory", hero1.name);
  }),

  it('hero should have health', function(){
    var hero1 = new Hero("Rory", "Pizza");
    is.equal(100, hero1.health);
  }),

  it('hero should have a favourite food', function(){
    var hero1 = new Hero("Rory", "Pizza");
    is.equal("Pizza", hero1.favouriteFood);
  }),

  it('hero should be able to say their name', function(){
    var hero1 = new Hero("Rory", "Pizza");
    is.equal("Hi, I am Rory", hero1.speech());
  }),

  it('eating food should replenish', function(){
    var hero1 = new Hero("Rory", "Pizza");
    var food1 = new Food("Soup", 5);
    hero1.eat(food1)
    is.equal(105, hero1.health);
  }),
  it('eating favourite food should replenish', function(){
    var hero1 = new Hero("Rory", "Pizza");
    var food1 = new Food("Pizza", 10);
    hero1.eat(food1);
    is.equal(115, hero1.health);
  }),
  context('shoud have weapons', function(){
    var hero1 = new Hero("Shakti", "Pork");
    it('should have an empty rucksack', function(){
      is.equal(0, hero1.rucksack.length);
    })
  })



})


