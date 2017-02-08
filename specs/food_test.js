var is = require('assert');
var Hero = require('../hero');
var Food = require('../food');

describe("Food", function(){
  it('food should have name', function() {
    var food1 = new Food("Pizza", 10);
    is.equal("Pizza", food1.name);
  }),

  it('food should replenish', function() {
    var food1 = new Food("Pizza", 10);
    is.equal(10, food1.replenishmentValue);
  })

})
