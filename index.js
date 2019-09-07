let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  return drivers.push(name);
}

function destructivelyPrependDriver(name){
  return drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  return drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  return drivers.shift();
}

function appendDriver(name){
  let newDrivers=[...drivers,name];
  return newDrivers;
}

function prependDriver(name){
  return [name,...drivers];
}

function removeLastDriver(){
  let newDrivers=drivers.slice(0,-1);
  return newDrivers;
}

function removeFirstDriver(){
  return drivers.slice(1, drivers.length);
}
