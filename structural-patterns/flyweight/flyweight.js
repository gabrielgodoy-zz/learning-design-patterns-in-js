/*
 Flyweight Pattern
 Saves memory by sharing portions of an object between objects
 - Only usable if you have **large number of objects**. Like a LOT. (> 1000000)
 
 Sees if an object with a combination of property values was already created, and reuse that, 
 don't create another one
 */

const Task = function(data) {
	// Get an existent or create a new flyweight
	this.flyweight = FlyweightFactory.get(data.project, data.priority, data.user, data.completed);
	this.name = data.name; // ONLY THING THAT IS UNIQUE IN A TASK

	/* 
	 Properties below became part of the flyweight, 
	 because they are not unique for each task, multiple tasks can have the same value for them
	 this.priority = data.priority;
	 this.project = data.project;
	 this.user = data.user;
	 this.completed = data.completed;
	 */
};

// Properties here will be properties for the task
function Flyweight(project, priority, user, completed) {
	this.priority = priority;
	this.project = project;
	this.user = user;
	this.completed = completed;
}

const FlyweightFactory = function() {
	const flyweights = {};

	// Add a property to flyweight object if it does not exist
	const get = (project, priority, user, completed) => {
		if (!flyweights[project + priority + user + completed]) {
			flyweights[project + priority + user + completed] =
				new Flyweight(project, priority, user, completed);
		}
		// If flyweight already exists, just return it, do not create a new one
		return flyweights[project + priority + user + completed];
	};

	// Count number of flyweight generated
	const getCount = function() {
		let count = 0;
		for (let f in flyweights) {
			count++;
		}
		return count;
	};
	return { get, getCount };
}();

function TaskCollection() {
	const tasks = {};
	let count = 0;
	const add = (data) => {
		tasks[data.name] = new Task(data);
		count++;
	};
	const get = name => tasks[name];
	const getCount = () => count;
	return { add, get, getCount };
}

const tasks = new TaskCollection();
const taskOptions = {
	projects: ['none', 'courses', 'training', 'project'],
	priorities: [1, 2, 3, 4, 5],
	users: ['Jon', 'Erica', 'Amanda', 'Nathan'],
	completed: [true, false]
};

function createRandomTasks(numberOfTasks) {
	for (let i = 0; i < numberOfTasks; i++) {
		tasks.add({
			name: `task ${i}`,
			priority: taskOptions.priorities[Math.floor((Math.random() * 5))],
			project: taskOptions.projects[Math.floor((Math.random() * 4))],
			user: taskOptions.users[Math.floor((Math.random() * 4))],
			completed: taskOptions.completed[Math.floor((Math.random() * 2))]
		});
	}
}

const initialMemory = process.memoryUsage().heapUsed;
createRandomTasks(1000000);
const afterMemory = process.memoryUsage().heapUsed;

console.log(`Used memory: ${(afterMemory - initialMemory) / 1000000}`);
console.log(`Tasks created: ${tasks.getCount()}`);
// Reusable properties of tasks, with the same combination between different tasks
console.log(`Number of flyweights created: ${FlyweightFactory.getCount()}`);
