// the Bluebird combinator or Compose function 
//   combines two functions: applies function b and then function a 
function compose (a, b) {
	return function (c) {
		return a(b(c));
	}
}

// Usage 
console.log("Applying combo function with 10\n");

var combo = compose(add, multiply);
console.log('compose(add, multiply):', combo(10));

combo = compose(multiply, add);
console.log('compose(multiply, add):', combo(10));

// the two subfunctions that will be 'composed'
function multiply (x) {
	return x * 2;
}

function add (x) {
	return x + 2;
}