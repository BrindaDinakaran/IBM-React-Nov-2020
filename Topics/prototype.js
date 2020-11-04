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
console.log(e1.__proto__ === Employee.prototype)	// true
var e2 = new Employee(2, "Kiki", 200000)
console.log(e2)	// Employee { id: 2, name: 'Kiki', salary: 200000, display: [Function] }
console.log(e2.city)	// Bangalore (Prototype hoping)
Employee.prototype.city = "Tuty";
console.log(e1.city)	// Tuty
console.log(e2.city)	// Tuty
e1.city = "Chennai";
console.log(Employee.prototype.city)	// Tuty
console.log(e1.city)	// Chennai
console.log(e2.city)	// Tuty