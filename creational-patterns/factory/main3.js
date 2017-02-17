// Simple Task constructor
const Task = require('./task');

// Importing a repoFactory instance, same as "new repoFactory"
const repoFactory = require('./repoFactory2');

// Importing the repoFactory here is the same thing as:
// const task = require('./taskRepository')();
// const user = require('./taskRepository')();
// const project = require('./taskRepository')();
// Are those three lines that the repofactory executes on its repoList.forEach()

// Instead of giving a bunch of require in all repositories "task", "user" and "project"
// I will only need to give require in repoFactory. The repoFactory that gives the require inside it,
// and executes the functions that comes from each require to me

// Creating a mechanism similar to "gulp-load-plugins"
// gulp-load-plugins works as a factory the will require all dependencies that begins with 'gulp-'
// in package.json

// repoFactory starts being an object like this
const repoFactoryIsThatObject = {
	// Those methods get() and save() comes from the repositories that the Factory executes taskRepository
	task: {
		get(id) {
			return {
				name: 'Some Task'
			}
		},
		save(task) {
			console.log(`Saving the task "${task.name}" to the database`);
		}
	},

	// userRepository
	user: {
		get(id) {
			return {
				name: 'Some Task'
			}
		},
		save(user) {
			console.log(`Saving "${user.name}" to the database`);
		}
	},

	// projectRepository
	project: {
		get: function(id) {
			return {
				name: 'Some Task'
			}
		},
		save: function(project) {
			console.log(`Saving "${project.name}" to the database`);
		}
	}
};

// Here we create the tasks
// Tasks are created by passing, on its creation moment,the object {name: 'Some Task'} as a parameter
// that comes from the database, brought by taskRepository method

// The intention here is to create new tasks with tasks that we get from the database,
// with the taskRepository.get(id)
const task1 = new Task(repoFactory.task.get(1)); // Object {name: 'Some Task'} is returned here
const task2 = new Task(repoFactory.task.get(2)); // Object {name: 'Some Task'} is returned here
console.log('task1 é ', JSON.stringify(task1));
console.log('task2 é ', JSON.stringify(task2), '\n');

// Getting User with ID 1 on the database
const user = repoFactory.user.get(1);
console.log(`A variável user é "${JSON.stringify(user)}". O userRepository me entregou no get(id)`, '\n');

// Getting User with ID 1 on the database
const project = repoFactory.project.get(1);
console.log(`A variável project agora é "${JSON.stringify(project)}". O projectRepository me entregou no get(id)`, '\n');

task1.user = user;
task1.project = project;

// I get from the database then I save it here, as the same, without changes
task1.save();
