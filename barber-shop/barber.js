function createBarber(answerName, answerEarnings, answerCuts) {
  var barber = {
    name: answerName,
    earnings: answerEarnings || 0,
    haircuts: answerCuts || [],
  };
  return barber;
}
function giveCompliment(cut) {
  //one param (object)
  //need the "value" side of style from the object object.style
  var currentCut = cut.style;
  return `This ${currentCut} looks great!`;
}
function cutHair(resultBarber, resultCut) {
  //two params (barber, cut)
  // console.log('barber', barber);
  // console.log('cut', cut);
  resultBarber.haircuts.push(resultCut);

  var totalEarnings = (resultBarber.earnings += resultCut.price);

  // console.log('Ann barber-haircut', barber.haircuts);

  return resultBarber;
}
function listStyles(barber, hairLength) {
  //two params (barber, hairlength)
  //one param is an array
  //loop through array
  //conditional - if short
  //variable?
}

module.exports = {
  createBarber,
  giveCompliment,
  cutHair,
  listStyles,
};
