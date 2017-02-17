const Task = require('./Task');
const ObserverManager = require('./ObserverManager');

const ObservableTask = function(data) {
	// The ObservableTask instance being created will have 
	// all attributes inside Task constructor
	Task.call(this, data);

	// The property of an instance is some instance from other constructor
	// The property ObservableTask.observers 
	// will be an instance of ObserverManager
	this.observerManager = new ObserverManager();
};

ObservableTask.prototype.addObserver = addObserver;
ObservableTask.prototype.removeObserver = removeObserver;
ObservableTask.prototype.saveTask = saveTask;
ObservableTask.prototype.notifyUser = notifyUser;

function addObserver(observer) {
	this.observerManager.addObserver(observer);
}

function removeObserver(observer) {
	this.observerManager.removeObserverFromArray(
		this.observerManager.findObserverInArray(observer.update, 0)
	);
}

function saveTask() {
	this.notifyUser(this); // Notify with ObservableTask Object
	Task.prototype.saveTask.call(this); // console.log('Saving task')
}

function notifyUser(task) {
	const observersCount = this.observerManager.getObserversNumber();
	callAllObserversInArray.call(this, observersCount, task);
}

function callAllObserversInArray(observersCount, task) {
	for (let counter = 0; counter < observersCount; counter++) {
		const observerUpdateFunction = this.observerManager.getObserver(counter);
		observerUpdateFunction(task);
	}
}

module.exports = ObservableTask;
