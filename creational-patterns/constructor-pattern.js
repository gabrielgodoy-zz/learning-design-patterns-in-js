/*
 Constructor Pattern
 Create objects from functions
 */

// ES5 and below syntax
const TaskES5 = function(name) {
	this.name = name;
	this.completed = false;
};

TaskES5.prototype.complete = function() {
	console.log('completing task: ' + this.name);
	this.completed = true;
};

TaskES5.prototype.save = function() {
	console.log('saving Task: ' + this.name);
};


// ES6 class syntax
class Task {
	constructor(name) {
		this.name = name;
		this.completed = false;
	}

	complete() {
		console.log(`completing task: ${this.name}`);
		this.completed = true;
	}

	save() {
		console.log(`saving Task: ${this.name}`);
	}
}
