function sumPrimes(num) {
	if(num<2){
		return;
	}else{
		var result=0;
		for(i=2;i<=num;i++){
			var n = Math.floor(Math.sqrt(i));
			if(n===1){
				result+=i;
			}
			for(a=2;a<=n;a++){
				rema = i % a;
				if(rema===0){
					break;
				}
				if(a===n){
					result+=i;
				}
			}
		}
		return result;
	}
}

sumPrimes(10);
