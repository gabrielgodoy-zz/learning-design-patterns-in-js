/*
 Façade Pattern
 Provide a simplified interface to a complicated system
 Example of façade pattern is jQuery simpifying the complicated DOM API
 */

const Task = function(data) {
	this.name = data.name;
	this.priority = data.priority;
	this.project = data.project;
	this.user = data.user;
	this.completed = data.completed;
};

// TaskService is a simulation of a confusing system
const TaskService = function() {
	return {
		complete: function(task) {
			task.completed = true;
			console.log(`completing task: ${task.name}`);
		},
		setCompleteDate: function(task) {
			task.completedDate = new Date();
			console.log(`${task.name} completed on ${task.completedDate}`);
		},
		notifyCompletion: function(task, user) {
			console.log(`Notifying ${user} of the completion of ${task.name}`);
		},
		save: function(task) {
			console.log(`Saving Task: ${task.name}`);
		}
	}
}();

// This is the façade created for better handling the TaskServie
const TaskServiceWrapper = function() {
	const completeAndNotify = function(task) {
		TaskService.complete(myTask);
		if (myTask.completed == true) {
			TaskService.setCompleteDate(myTask);
			TaskService.notifyCompletion(myTask, myTask.user);
			TaskService.save(myTask);
		}
	};
	return {
		completeAndNotify: completeAndNotify
	}
}();

const myTask = new Task({
	name: 'MyTask',
	priority: 1,
	project: 'Courses',
	user: 'Jon',
	completed: false
});
TaskServiceWrapper.completeAndNotify(myTask);

console.log(myTask);
