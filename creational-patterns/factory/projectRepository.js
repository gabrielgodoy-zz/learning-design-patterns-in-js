const repo = function() {
	const db = {};
	const get = function(id) {
		console.log(`Getting Project number "${id}" from database`);
		return {
			name: 'Some project'
		}
	};

	const save = function(project) {
		console.log(`Saving "${project.name}" to the database`);
	};

	return { get, save }
};

module.exports = repo;
