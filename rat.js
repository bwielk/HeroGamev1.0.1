var Rat = function(){

}

Rat.prototype = {
  touch: function(food){
    food.replenishmentValue *= -1;
  }
}

module.exports = Rat;