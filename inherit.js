(function () {
	function Person (name) {
		this.name = name;
		this.age = 0;
	}

	Person.prototype.greet = function () {
		return 'Hi my name is ' + this.name;
	};

	var dood = new Person('Freddie');

	for (var i = 0; i < 10; i++) {
		dood[i] = i + 30;
	}

	console.log(dood);	
	console.log(dood.greet());
}());