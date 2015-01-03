function mapWith (fn) {
	return function (array){
		return array.map(fn);
	}
}

// usage 
var input = [1, 2, 3];

var square = mapWith(function (x) { return x * x; });
var results = square(input);

console.log(results);