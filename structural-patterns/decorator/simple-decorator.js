/*
Decorator Pattern
Add new functionality to an existing object without being intrusive
*/

// Task Constructor
const Task = function(name) {
	this.name = name;
	this.completed = false;
};

Task.prototype.complete = function() {
	console.log(`completing task: ${this.name}`);
	this.completed = true;
};

Task.prototype.save = function() {
	console.log('saving Task: ' + this.name);
};

const myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

// Here I am just decorating one single Task instance called urgentTask
const urgentTask = new Task('Urgent Task');
urgentTask.priority = 2;
urgentTask.notify = function() {
	console.log('notifying important people');
};

urgentTask.complete();

// Here I wrap Task save method with additional 
// functionality for the urgentTask
urgentTask.save = function() {
	this.notify();
	Task.prototype.save.call(this)
};

urgentTask.save();
