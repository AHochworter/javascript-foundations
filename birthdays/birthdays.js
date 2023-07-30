function createBirthday(name, month, day) {
  var birthday = {
    name: name,
    month: month,
    day: day,
  };
  return birthday;
}

function celebrateBirthday(birthdayObj) {
  return `Today is ${birthdayObj.month}/${birthdayObj.day}! Happy birthday, ${birthdayObj.name}!`;
}
function countBirthdays(birthdaysArr, month) {
  var count = 0;
  for (var i = 0; i < birthdaysArr.length; i++) {
    if (birthdaysArr[i].month === month) {
      count += 1;
    }
  }
  return count;
}

module.exports = {
  createBirthday,
  celebrateBirthday,
  countBirthdays,
};
