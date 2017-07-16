function sumFibs(num) {
  if(num<2){
  	return 2;
  }else{
  	var arr = [1,1];
  	for(i=2;i<num;i++){
  		var n = arr[i-2]+arr[i-1];
  		if(n<=num){
  			arr.push(n);
  		}else{
  			break;
  		}
  	}
  	arr = arr.filter(odd);
  	var result = 0;
  	for(a = 0;a<arr.length;a++){
  		result =result+arr[a];
  	}
  	return result;
  }
}
function odd(arr){
  		var b = arr %2;
  		return b==1;
}
sumFibs(6);
