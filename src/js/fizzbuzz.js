function fizzbuzz(a){
	var res="";
	for(var b=1; b<a; b++){
		var isFizzBuzz=false;
		if(b%3 == 0){
			res+=" fizz";
			isFizzBuzz=true;
		}
		if(b%5 == 0){
			res+=" buzz";
			isFizzBuzz=true;
		}

		if(!isFizzBuzz){
			res+=" ";
			res+=b;
		}
	}
	return res;
}