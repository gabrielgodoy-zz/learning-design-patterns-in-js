function ObserverManager() {
	this.observerArray = [];
}

ObserverManager.prototype.addObserver = addObserver;
ObserverManager.prototype.getObserver = getObserver;
ObserverManager.prototype.getObserversNumber = getObserversNumber;
ObserverManager.prototype.removeObserverFromArray = removeObserverFromArray;
ObserverManager.prototype.findObserverInArray = findObserverInArray;

function addObserver(observer) {
	return this.observerArray.push(observer);
}

function getObserver(index) {
	const indexExistsInObserverArray = index > -1 && index < this.observerArray.length;

	if (indexExistsInObserverArray) {
		return this.observerArray[index];
	}
}

function getObserversNumber() {
	return this.observerArray.length;
}

function removeObserverFromArray(index) {
	this.observerArray.splice(index, 1);
}

function findObserverInArray(observer, counter) {

	while (counter < this.observerArray.length) {
		if (this.observerArray[counter] === observer) {
			return counter;
		}
		counter++;
	}

	// Observer not found
	return -1;
}

module.exports = ObserverManager;
