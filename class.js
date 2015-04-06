(function () {
	function Car (type) {
		this.type = type;
		this.year = 2015;
	}

	Car.prototype.honk = function (sound) {
		console.log(this.type + ' goes ' + sound);
	};

	var fer = new Car ('rarri');
	fer.honk('beep!');

}());