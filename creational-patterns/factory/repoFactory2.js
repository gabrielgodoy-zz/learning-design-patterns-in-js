const repoFactory = function() {
	const repos = this;

	// Lista de repositórios que a repoFactry vai dar require
	// Essa lista poderia ser dinâmica, olhando por todos os arquivos de uma pasta por exemplo
	// Esse array serve para adicionar propriedades no 'this' desse constructor
	// E para dar require(REPOSITORY_PATH)() em cada source de cada objeto desse array
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
