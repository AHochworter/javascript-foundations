function createIngredient(name, price) {
  var ingredient = {
    name: name || 'unknown',
    price: price || 0,
  };
  return ingredient;
}

function createTaco(name, ingredients) {
  var taco = {
    name: name || 'custom',
    ingredients: ingredients || [],
  };
  return taco;
}

function addIngredientToTaco(tacoObj, ingredients) {
  tacoObj.ingredients.push(ingredients);
  // console.log('taco object:', tacoObj);
  return tacoObj;
}

function calculatePrice(tacoObj) {
  var tacoPrice = 0;
  for (var i = 0; i < tacoObj.ingredients.length; i++) {
    tacoPrice += tacoObj.ingredients[i].price;
  }
  // console.log('taco object', tacoObj);
  // console.log(tacoObj.ingredients.ingredients.price);
  return tacoPrice;
}
module.exports = {
  createIngredient,
  createTaco,
  addIngredientToTaco,
  calculatePrice,
};
