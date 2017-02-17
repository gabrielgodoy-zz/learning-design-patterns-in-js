// Create objects from functions

// ES5 and below syntax
const Task = function(name) {
	this.name = name;
	this.completed = false;
};

Task.prototype.complete = function() {
	console.log('completing task: ' + this.name);
	this.completed = true;
};

Task.prototype.save = function() {
	console.log('saving Task: ' + this.name);
};


// ES6 class syntax
class Task {
	constructor(name) {
		this.name = name;
		this.completed = false;
	}

	complete() {
		console.log('completing task: ' + this.name);
		this.completed = true;
	}

	save() {
		console.log('saving Task: ' + this.name);
	}

	giveBanana() {
		banana = false;
	}
}
