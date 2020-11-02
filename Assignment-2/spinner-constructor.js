function Spinner(){
	this.counter = 0;
	this.up = function(){
		return ++this.counter;
	}
	
	this.down = function(){
		return --this.counter;
	}
}

var spin = new Spinner()
console.log(spin.up())
console.log(spin.up())
console.log(spin.down())
/*
1
2
1
*/