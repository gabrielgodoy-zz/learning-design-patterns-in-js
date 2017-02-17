const Task = require('./task');

const notificationService = function() {
	const message = 'Notifying ';
	this.update = function(task) {
		console.log(`message ${task.user} for task ${task.name}`);
	}
};

const loggingService = function() {
	const message = 'Logging ';
	this.update = (task) => {
		console.log(`${message} ${task.user} for task ${task.name}`);
	}
};

const auditingService = function() {
	const message = 'Auditing ';
	this.update = (task) => {
		console.log(`${message} ${task.user} for task ${task.name}`);
	}
};

const mediator = (function() {
	const channels = {};

	const subscribe = function(channel, context, func) {
		if (!mediator.channels[channel]) {
			mediator.channels[channel] = []
		}
		mediator.channels[channel].push({
			context: context,
			func: func
		});
	};

	const publish = function(channel) {
		if (!this.channels[channel]) {
			return false
		}

		const args = Array.prototype.slice.call(arguments, 1);

		for (let i = 0; i < mediator.channels[channel].length; i++) {
			const sub = mediator.channels[channel][i];
			sub.func.apply(sub.context, args)
		}
	};

	return {
		channels: {},
		subscribe: subscribe,
		publish: publish
	};
}());

const task1 = new Task({
	name: 'create a demo for mediators',
	user: 'Jon'
});

const not = new notificationService();
const ls = new loggingService();
const audit = new auditingService();

mediator.subscribe('complete', not, not.update);
mediator.subscribe('complete', ls, ls.update);
mediator.subscribe('complete', audit, audit.update);

task1.complete = function() {
	mediator.publish('complete', this);
	Task.prototype.complete.call(this);
};

task1.complete();
