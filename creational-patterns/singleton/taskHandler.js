const myrepo = require('./repo');
const taskHandler = function() {
	return {
		save: function() {
			myrepo.save('Hi from taskHandler');
		}
	}
};

module.exports = taskHandler();
