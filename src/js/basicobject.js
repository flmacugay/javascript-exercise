var student = {
	name : "Tom Jerry",
	speak: function(){
		return "My name is " + this.name;
	},
	address: {
		street: "123 Main street",
		city: "Melbourne"
	},

	get getAddress(){
		return this.address.street +", "+this.address.city;
	},

	set setAddress(newAddress){
		var parts=newAddress.toString().split(",");
		this.street=parts[0]||"";
		this.city=parts[1]||"";
	}
}

function Employee(name, company){
	this.name=name;
	this.company=company;
	this.info=function () {
		return this.name+" works at "+this.company;
	}
}