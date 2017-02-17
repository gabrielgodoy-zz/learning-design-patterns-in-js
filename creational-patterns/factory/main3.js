// Simple Task constructor
const Task = require('./task');

// Importing a repoFactory instance, same as "new repoFactory"
const repoFactory = require('./repoFactory2');

// Importando repoFactory aqui é a mesma coisa que fazer:
// const task = require('./taskRepository')();
// const user = require('./taskRepository')();
// const project = require('./taskRepository')();
// São essa três linhas que o repofactory faz no repoList.forEach() dele

// Ao invés de dar um monte de require em todos os repositórios "task" "user" e "project"
// Eu só precisei dar require no repoFactory. O repoFactory que dá o require dentro dele, 
// e executa as funções que vem de cada require pra mim

// O autor quis fazer algo parecido com o "gulp-load-plugins"
// O gulp-load-pplugins functiona como uma factory que vai dar require em todas as dependências 
// que começarem com "gulp-" no package.json

// repoFactory starts being an object like this
const repoFactoryIsThatObject = {
	// Esses métodos get() e save() vem dos repositórios que a Factory executa
	// taskRepository
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

// Aqui se cria de fato as tasks
// Se cria as tasks passando como parâmetro na sua criação o objeto {name: 'Some Task'} 
// que veio do banco de dados, trazido pelo método get do taskRepository

// A intenção aqui está sendo criar novas tasks a partir de tasks que se pega do banco, através do taskRepository.get(id)
const task1 = new Task(repoFactory.task.get(1)); // O objeto {name: 'Some Task'} é retornado aqui
const task2 = new Task(repoFactory.task.get(2)); // O objeto {name: 'Some Task'} é retornado aqui
console.log('task1 é ', JSON.stringify(task1));
console.log('task2 é ', JSON.stringify(task2), '\n');

// Pegando User com id 1 do banco de dados
const user = repoFactory.user.get(1);
console.log(`A variável user é "${JSON.stringify(user)}". O userRepository me entregou no get(id)`, '\n');

// Pegando Project com id 1 do banco de dados
const project = repoFactory.project.get(1);
console.log(`A variável project agora é "${JSON.stringify(project)}". O projectRepository me entregou no get(id)`, '\n');

task1.user = user;
task1.project = project;

// Eu pego do banco de dados  depois salvo ela aqui igualzinha
task1.save();
