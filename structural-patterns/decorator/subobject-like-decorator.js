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
	console.log(`saving Task: ${this.name}`);
};

const myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

/* 
 UrgentTask is 'decorated' Task
 UrgentTask constructor inherits Task.prototype,
 and extend its functionality
 */
const UrgentTask = function(name, priority) {
	/* 
	 Calling the Task constructor with the object instance 
	 that is being created as the 'this'
	 */
	Task.call(this, name);
	this.priority = priority;
};

// UrgentTask.prototype will be an object with a prototype inherited from Task
UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function() {
	console.log('notifying important people');
};

/* 
 The save() task of UrgentTask not only does save() of Task.prototype, 
 but also do additional stuff particular of UrgentTasks intances
 */
UrgentTask.prototype.save = function() {
	this.notify();
	console.log('do special stuff before saving');
	Task.prototype.save.call(this)
};
const someUrgentTask = new UrgentTask('This is urgent', 1);

someUrgentTask.complete();
someUrgentTask.save();
console.log(someUrgentTask);
