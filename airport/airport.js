function createAirport(airportName, airlines, airportGates) {
  //creates an airport object
  var airport = {
    name: airportName,
    airlines: airlines,
    availableGates: airportGates,
  };
  // console.log(airport);
  return airport;
}

function welcomeGuests(airport) {
  //one param - airport
  // console.log(airport);
  return `Welcome to ${airport.name}!`;
}

/* Problem:
Starting Data:
What do I need to return:
Steps / Methods:
*/

// function landPlanes(airport, planesLanding) {
//two params (airport, planesLanding)
//availabe gate minus the planes landing?
//12 - 11 (airport.availableGates - arugment)
//conditional - avialGates < planesLanding
// console.log('available gates:', airport.availableGates);
function landPlanes(airport, planesLanding) {
  //NOTICE the airport.message over in the unit test - dynamically added to the airport object
  if (airport.availableGates > planesLanding) {
    airport.message = `Success! Current availability is ${(airport.availableGates -=
      planesLanding)}.`;
  } else if (planesLanding > airport.availableGates) {
    airport.message = `Oh no! Not enough gates available. Current overflow is ${(planesLanding -=
      airport.availableGates)}.`;
    airport.availableGates = 0;
  }
  return airport;
}

function checkAirlineLocations(airportArr, airportName) {
  var airlines = [];
  for (var i = 0; i < airportArr.length; i++) {
    if (airportArr[i].airlines.includes(airportName)) {
      airlines.push(airportArr[i].name);
    }
  }
  return airlines;
}

module.exports = {
  createAirport,
  welcomeGuests,
  landPlanes,
  checkAirlineLocations,
};
