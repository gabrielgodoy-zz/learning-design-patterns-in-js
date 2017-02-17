let TaskRepo = (function() {
	let taskRepo;

	function createRepo() {
		return new Object("Task");
	}

	return {
		getInstance: function() {
			if (!taskRepo) {
				taskRepo = createRepo();
			}
			return taskRepo;
		}
	};
})();

let repo1 = TaskRepo.getInstance();
let repo2 = TaskRepo.getInstance();

if (repo1 === repo2) {
	console.log("Same TaskRepo")
}
