function createCustomer(name, bill, bookings) {
  var customer = {
    name: name,
    bill: bill || 0,
    bookings: bookings || [],
  };
  return customer;
}
function greeting(customer) {
  if (customer.bill === 0) {
    return `${customer.name}! Welcome to Happy Spa`;
  } else {
    return `${customer.name}! Welcome back to Happy Spa`;
  }
}
function createService(name, cost) {
  if (name === undefined || cost === undefined) {
    return `Please provide service name and cost.`;
  }
  var service = {
    name: name,
    cost: cost,
  };
  return service;
}

function bookServices(customer, service) {
  customer.bill += service.cost;
  // AKA customer.bill. = customer.bill + service.cost;
  customer.bookings.push(service.name);
  return customer;
}
function applyGiftCard(services, giftCard) {
  //passing in an array of objects and gift card amount
  var affordableServices = [];
  for (var i = 0; i < services.length; i++) {
    if (services[i].price <= giftCard) {
      affordableServices.push(services[i].name);
    }
  }
  return affordableServices;
}

module.exports = {
  createCustomer,
  greeting,
  createService,
  bookServices,
  applyGiftCard,
};
