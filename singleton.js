var Singleton = (function () {
	var instance;
	function getInstance() {
		var object = new Object("I am the new instance");
		return object;
	}

	return {
		getInstance: function () {
			if (!instance) {
				console.log('creating instance');
				instance = getInstance();
			}
			return instance;
		}
	}

})();

var inst1 = Singleton.getInstance();
var inst2 = Singleton.getInstance();

console.log(inst1 === inst2);