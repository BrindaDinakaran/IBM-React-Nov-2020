function Employee(id, name, salary){
	this.id = id;
	this.name = name;
	this.salary = salary;
	
//	In prototype.js, for each instance of Employee the display will be a part of memory. 
//	But all the instances have the same implementation. So, better have in prototype.
	Employee.prototype.city = "Bangalore";
	Employee.prototype.display = function(){
		console.log(this.id, this.name, this.salary)
	}
}

var e1 = new Employee(1, "Brinda", 10000)
console.log(e1.city)	// Bangalore
e1.display()	// 1 Brinda 10000