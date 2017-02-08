var is = require('assert');
var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');

describe("Rat", function(){
  it('rat should touch food and make it poisonous', function(){
    var rat1 = new Rat();
    var food1 = new Food("Soup", 5);
    var hero1 = new Hero("Blaise", "Banana");
    rat1.touch(food1);
    hero1.eat(food1);
    is.equal(95, hero1.health);
  }),

  it('rat should touch favourite food and make it 1.5 x poisonous', function(){
    var rat1 = new Rat();
    var food1 = new Food("Banana", 5);
    var hero1 = new Hero("Blaise", "Banana");
    rat1.touch(food1);
    hero1.eat(food1);
    is.equal(92.5, hero1.health);
  })

})
