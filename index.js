const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name){
	drivers.push(name)
}

function destructivelyPrependDriver(name){
	drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
	drivers.pop()
}

function destructivelyRemoveFirstDriver(){
	drivers.shift()
}

function appendDriver(name){
	const b = drivers.slice()
	b.push(name)
	return b
}

function prependDriver(name){
	const b = drivers.slice()
	b.unshift(name)
	return b
}
function removeLastDriver(){
	const b = drivers.slice()
	b.pop()
	return b
}

function removeFirstDriver(){
	const b = drivers.slice()
	b.shift()
	return b
}