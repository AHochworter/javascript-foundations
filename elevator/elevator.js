function createElevator(building, floors, currentFloor, passengers) {
  var elevator = {
    building: building,
    floors: floors,
    currentFloor: currentFloor,
    passengers: passengers,
  };
  return elevator;
}
function changeFloors(elevator, newFloor) {
  if (elevator.currentFloor === newFloor) {
    return `You're already on floor ${elevator.currentFloor}!`;
  } else if (newFloor > elevator.floors) {
    return `Floor ${newFloor} does not exist!`;
  } else {
    return `Taking you to floor ${newFloor}!`;
  }
}

function dropOffPassenger(elevator, indivPass) {
  //elevator object(elevator.passenger), string

  for (var i = 0; i < elevator.passengers.length; i++) {
    if (elevator.passengers[i] === indivPass) {
      elevator.passengers.splice(i, 1);
    }
    // console.log(elevator.passengers);
  }
  return elevator.passengers;
}
module.exports = {
  createElevator,
  changeFloors,
  dropOffPassenger,
};
