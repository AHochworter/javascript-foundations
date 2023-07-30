//TODO FUNCTION createHobbit
function createHobbit(hobbitName, hobbitAge) {
  //two params
  //default age = 0
  //default name = unknown
  var hobbit = {
    name: hobbitName || 'unknown',
    age: hobbitAge || 0,
    isAdult: false,
    isOld: false,
    acquaintances: [],
  };
  return hobbit;
}

//TODO FUNCTION celebrateBirthday
function celebrateBirthday(hobbit) {
  hobbit.age += 1;
  if (hobbit.age <= 32) {
    hobbit.isAdult = false;
  } else if (hobbit.age >= 33 && hobbit.age < 101) {
    hobbit.isAdult = true;
  } else {
    hobbit.isOld = true;
  }
  return hobbit;
}
function celebrateBirthday(hobbit) {
  //gain 1 year after every bday
  //adult if older than 32
  //old if older than 100
  hobbit.age += 1;
  if (hobbit.age > 32 && hobbit.age <= 100) {
    hobbit.isAdult = true;
    hobbit.isOld = false;
  } else if (hobbit.age > 100) {
    hobbit.isOld = true;
    hobbit.isAdult = false;
  }
  return hobbit;
}
//TODO FUNCTION getRing
function getRing(hobbit) {
  //one param
  //name = Frodo
  if (hobbit.name === 'Frodo') {
    return `Here is the ring!`;
  } else {
    return `You can't have it!`;
  }
}

//TODO FUNCTION meetPeople
function meetPeople(hobbit, newPeople) {
  for (var i = 0; i < newPeople.length; i++) {
    hobbit.acquaintances.push(newPeople[i]);
  }
  return hobbit;
}
function findFriends(hobbit, acquaintances) {
  acquaintances = acquaintances || []; //set default

  var friendsArr = [];
  for (var i = 0; i < acquaintances.length; i++) {
    if (acquaintances[i].relationship === 'friend') {
      friendsArr.push(acquaintances[i].name);
    }
  }
  console.log(friendsArr);
  return friendsArr;
}

module.exports = {
  createHobbit,
  celebrateBirthday,
  getRing,
  meetPeople,
  findFriends,
};
