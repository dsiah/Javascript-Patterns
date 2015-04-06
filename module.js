var mixin = {
	constant_1: 2,
	constant_2: 4,
	constant_3: 8
}; 
// imagine this is a library or some object that I want to pass 
// into my module

var Garden = (function (mix) {
	var patch = []; // grow some veggies in your (private) patch

	return {
		grow: function (plant) {
			patch.push(plant);
			return patch;
		},

		harvest: function (plant) {
			var index = patch.indexOf(plant);
			if (index > -1) {
				patch.splice(index, 1);
			}
			return patch;
		},

		toString: function () {
			return patch;
		},

		useMixin: function () {
			var num = (Math.floor(Math.random() * 2.9)) + 1;
			return mix['constant_' + num]; // string hack
		}
	};
} (mixin));

Garden.grow('Carot');
Garden.grow('Tomato');
Garden.grow('Brussel Sprout');
Garden.harvest('Brussel Sprout'); // yuck!

console.log(Garden.toString());
console.log(Garden.useMixin());