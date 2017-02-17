// Wrap all functionality in a function and decide what will be public by returning it

let counter = (function() {
	// current is being private
	let current = 0;

	function next() {
		return current + 1;
	}

	function isFirst() {
		return current == 0;
	}

	return {
		next: next,
		isFirst: isFirst
	};
})();
