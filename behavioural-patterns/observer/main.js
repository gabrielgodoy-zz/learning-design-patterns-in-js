const ObservableTask = require('./ObservableTask');

function createMessage(message, task) {
	return `message ${task.user} for task "${task.name}"`;
}

// Observers
function NotificationService() {
	this.update = function(task) {
		console.log(createMessage('Notifying ', task));
	}
}
function LoggingService() {
	this.update = function(task) {
		console.log(createMessage('Logging ', task));
	}
}
function AuditingService() {
	this.update = function(task) {
		console.log(createMessage('Auditing ', task));
	}
}

const firstTask = new ObservableTask({
	name: 'Create a demo',
	user: 'Jon'
});

/*
 firstTask = {
 "name": "create a demo for constructors",
 "user":"Jon",
 "observers":{"observerList":[]}
 }
 */

const notificationEmitter = new NotificationService(),
	loggingEmitter = new LoggingService(),
	auditingEmitter = new AuditingService();

// Adding observers
firstTask.addObserver(notificationEmitter.update);
firstTask.addObserver(loggingEmitter.update);
firstTask.addObserver(auditingEmitter.update);

firstTask.saveTask();
firstTask.removeObserver(auditingEmitter);
firstTask.saveTask();
