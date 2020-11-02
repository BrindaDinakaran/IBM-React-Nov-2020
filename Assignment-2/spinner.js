var spinner = (function outerFn(){
	var counter = 0;
	
	function up(){
		return ++counter;
	}
	
	function down(){
		return --counter;
	}
	
	return {
		up: up,
		down: down
	}
	
})();