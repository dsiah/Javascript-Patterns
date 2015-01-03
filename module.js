// Module Pattern
var CoolModule = (function () {
	// lil' calc
	var sum = 0;

	// a flag to track if they've tried to divide by zero
	var divByZero = false;

	function privateLog () {
		if (!divByZero)
			console.log('Hey don\'t do that');
		else 
			console.log('Hey I thought I told you to knock it off');
	}

	return {
		add: function (val) {
			sum += val;
		},

		subtract: function (val) {
			sum -= val;
		},

		multiply: function (val) {
			sum *= val;
		},

		divide: function (val) {
			if (val === 0) {
				privateLog();
				divByZero = true;
				return; // for the sly dogs
			} else {
				sum /= val;
			}
		},

		print: function () {
			console.log('Current Value:', sum);
		}
	}

})();

CoolModule.divide(0);
CoolModule.add(10);
CoolModule.print();
CoolModule.divide(0);
CoolModule.print();