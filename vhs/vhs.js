function createTape(title, readyToPlay) {
  var tape = {
    title,
    readyToPlay: readyToPlay || false,
  };

  return tape;
}
function reset(tape) {
  tape.readyToPlay = true;
  return tape;
}
function createCollection(tape1, tape2, tape3) {
  if (!tape1 && !tape2 && !tape3) {
    return `Your collection is empty.`;
  }
  return [tape1, tape2, tape3];
}
function previewCollection(collectionArr) {
  var previewThese = [];
  for (var i = 0; i < collectionArr.length; i++) {
    previewThese.push(collectionArr[i].title);
    console.log(collectionArr[i].title);
  }
  return previewThese;
}

module.exports = {
  createTape,
  reset,
  createCollection,
  previewCollection,
};
