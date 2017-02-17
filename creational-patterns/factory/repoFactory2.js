const repoFactory = function() {
	const repos = this;

	// List of repositories that the repoFactory will give require
	// This list could be dynamic, looking for all files of a folder for example
	// This array serves to add properties inside the/ 'this' of this constructor
	// And to execute require(REPOSITORY_PATH)() in each source of each object in this array
	const repoList = [{
		name: 'task',
		source: './taskRepository'
	}, {
		name: 'user',
		source: './userRepository'
	}, {
		name: 'project',
		source: './projectRepository'
	}];

	repoList.forEach(function(repo) {
		// repoFactory is a constructor

		// repos[repo.name] = require(repo.source) is the same as: 
		// this.task = require('./taskRepository')()
		// this.user = require('./userRepository')()
		// this.project = require('./projectRepository')()
		repos[repo.name] = require(repo.source)()

		// At the end, you get an object with two methods, defined on the respoctive repositories
		// { get: function(id){}, save: function(task){} }
		// { get: function(id){}, save: function(user){} }
		// { get: function(id){}, save: function(project){} }
	});
};

module.exports = new repoFactory;
