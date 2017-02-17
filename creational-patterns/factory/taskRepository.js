// Here tasks are saved to the database, and new requests for tasks are made

const repo = function() {
	const db = {};

	const get = function(id) {
		console.log('Getting task with id "' + id + '" from database');
		return {
			name: 'Some task'
		}
	};

	const save = function(task) {
		console.log('Saving the task "' + task.name + '" to the database');
	};

	return { get, save };
};

module.exports = repo;
