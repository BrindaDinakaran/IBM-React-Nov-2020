function Employee(id, name, salary) {
	this.id = id;
	this.name = name;
	this.salary = salary;

	this.display = function() {
		console.log(this.id + this.name + this.salary)
	}
}

console.log(typeof Employee.prototype)	// object
console.log(Employee.prototype)	// Employee {}
Employee.prototype.city = "Bangalore";
console.log(Employee.prototype)	// Employee { city: 'Bangalore' }
var e1 = new Employee(1, "Brinda", 100000)
console.log(e1)	// Employee { id: 1, name: 'Brinda', salary: 100000, display: [Function] }
console.log(e1.city)	// Bangalore (Prototype hoping)
console.dir(e1)	// Employee { id: 1, name: 'Brinda', salary: 100000, display: [Function] , __proto__: city: "Bangalore" >constructor: }
console.log(e1.prototype === Employee.prototype)