function Person(pName){
	var _name=pName;

	this.getName=function(){
		return _name;
	}
}