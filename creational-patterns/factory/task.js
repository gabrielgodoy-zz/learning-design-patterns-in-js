// Task constructor
// Aqui se cria Tasks

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
	// O método save de Task, chama o método save do taskRepository
	// Quem salva a task é o taskRepository
	Repo.save(this);
};

module.exports = Task;
