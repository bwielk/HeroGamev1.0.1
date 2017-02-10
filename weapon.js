var Weapon = function(name, damage, state, fragility){
  this.name = name;
  this.damage = damage;
  this.state = state;
  this.cracks = 0;
  this.fragility = fragility;
};

module.exports = Weapon;