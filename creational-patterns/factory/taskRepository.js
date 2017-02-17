// É aqui que se salva tasks no 'banco', e faz requisições por taks

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
