// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
  return drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

const destructivelyRemoveFirstDriver = () => drivers.shift();

function appendDriver(name) {
  return [...drivers, name];
}

const prependDriver = name => [name, ...drivers]; 