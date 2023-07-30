function createMaterial(name, unit, costPerUnit) {
  var material = {
    name: name,
    unit: unit,
    costPerUnit: costPerUnit,
  };
  return material;
}
function calculateMaterialCost(materialObj, count) {
  return `${count} ${materialObj.unit}s of ${materialObj.name} costs $${
    materialObj.costPerUnit * count
  }.`;
}

function createSupplyCloset(materialsArr) {
  materialsArr = materialsArr || [];

  var supplies = [];
  for (var i = 0; i < materialsArr.length; i++) {
    supplies.push(materialsArr[i].name);
  }
  var closet = {
    supplies: supplies,
  };
  return closet;
}

function addSupply(closetObj, threadObj) {
  closetObj.supplies.push(threadObj.name); // Add the name of the new supply to the supplies array
  return closetObj; // Return the updated closet object
}

module.exports = {
  createMaterial,
  calculateMaterialCost,
  createSupplyCloset,
  addSupply,
  // createNewProject,
  // compareMaterials
};
