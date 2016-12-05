var Emp = ['Employee Name', 'Name2', 'Name3', 'Name4','Name5']
var Employee = {

		name: 'Employee Name',
		age: 'Age',
		salary: 'Salary',
		address: {
			city : 'city',
			state :'state',
			pincode : 'pincode'
		},
		//fun: function(){
			//return emp[0] + ", " + this.age + ", "+ this.salary +", "+ this.address.city +", "+ this.address.state +" and "+ this.address.pincode;
		}

	//}; // []--> Array {}--> Object

		 //console.log(Employee.fun())
		console.log( Emp[0] + ", " + Employee.age + ", " + Employee.salary + ", " + Employee.address.city + ", " + Employee.address.state + " and " + Employee.address.pincode )
		