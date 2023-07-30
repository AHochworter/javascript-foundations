function createItemStock(itemName, itemQuantity, itemPrice) {
  var item = {
    name: itemName || 'unknown',
    quantity: itemQuantity || 0,
    price: itemPrice || 1.0,
  };
  //   console.log(item);
  return item;
}
function makePurchase(selectedItem, money) {
  //selectedIte, money
  //conditional
  if (selectedItem.quantity === 0) {
    return `Sorry, there are none left`;
  } else if (money < selectedItem.price) {
    return `Sorry, you need at least $${selectedItem.price} to make that purchase`;
  } else {
    return `Here are your ${selectedItem.name}`;
  }
  //   console.log(selectedItem);
}
function collectChange(change) {
  //one param
  //loop
  var sumChange = 0;
  for (var i = 0; i < change.length; i++) {
    sumChange += change[i];
  }
  return sumChange;
}

module.exports = {
  createItemStock,
  collectChange,
  makePurchase,
};
