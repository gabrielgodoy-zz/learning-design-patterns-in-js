// Task constructor
// Task creator

const Repo = require('./taskRepository')();

const Task = function(data) {
	this.name = data.name;
	this.completed = false;
};

Task.prototype.complete = function() {
	console.log('Completing task with name "' + this.name + '"');
	this.completed = true;
};

Task.prototype.save = function() {
	// Save method of Task, calls save() method of taskRepository
	// taskRepository is the one that saves
	Repo.save(this);
};

module.exports = Task;
