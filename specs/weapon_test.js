var is = require('assert');
var Hero = require('../hero');
var Weapon = require('../weapon');

describe("Weapon", function(){
  context('should be setup', function(){
    var weapon1 = new Weapon("Axe of Laughter", 30);
    var hero1 = new Hero("Alex", "Croissant");
    var hero2 = new Hero("Sandro", "Beef");
    it("should have name", function(){
      is.equal("Axe of Laughter", weapon1.name);
    }),
    it("should have damage rate", function(){
      is.equal(30, weapon1.damage);
    }),
    it("should have state", function(){
      is.equal(100, weapon1.state);
    })
    it("should be damaged and need fix", function(){
      hero1.attack(weapon1, hero2);
      hero1.attack(weapon1, hero2);
      is.equal(90, weapon1.state);
    }),
    it("should be fixable", function(){
      hero1.fix(weapon1.name);
      is.equal(100, weapon1.state);
    })
  });
})