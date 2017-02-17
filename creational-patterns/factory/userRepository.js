const repo = function() {
	const db = {};
	const get = function(id) {
		console.log(`Getting User "${id}" from database`);
		return {
			name: 'Some user'
		}
	};

	const save = function(user) {
		console.log(`Saving "${user.name}" to the database`);
	};

	return { get, save }
};

module.exports = repo;
