//FUNCTION createDragon
//write a function that creates a dragon with a name
//data type looks like an object
//pseudocode
//1. Create a function
//2. declare a object variable
function createDragon(name, rider, temperment) {
  var dragon = {
    name: name,
    rider: rider,
    temperment: temperment,
    timesEaten: 0,
    hungry: true,
  };
  // console.log(dragon.name);
  // console.log(dragon.rider);
  // console.log(dragon.temperment);
  return dragon;
}
// FUNCTION greetRider
//write a skelton function that will have the dragon greet its rider
//1. create function
//2. include a parameter of rider
//3. print message of Hi! Rider(name)!
function greetRider(dragon, rider) {
  var rider = dragon.rider;
  console.log(rider);
  return `Hi, ${dragon.rider}!`;
}

//  FUNCTION eat
//write a skelton function that has a dragon eating 0 times = hungry:true eating 3 times = hungry:false

function eat(dragon) {
  dragon.timesEaten = dragon.timesEaten + 1;
  if (dragon.timesEaten >= 3) {
    dragon.hungry = false;
  }
  return dragon;
}

function findFireBreathers(dragons) {
  var fireBreathers = [];
  for (var i = 0; i < dragons.length; i++) {
    var dragon = dragons[i];
    if (dragon.temperment === 'aggressive') {
      fireBreathers.push(dragon);
    }
  }
  return fireBreathers;
}

module.exports = {
  createDragon,
  greetRider,
  eat,
  findFireBreathers,
};
