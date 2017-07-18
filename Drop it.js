function drop(arr, func) {
  // Drop them elements.
  var result=[];
  for(i=0;i<arr.length;i++){
  		if(func(arr[i])){
  			// console.log(arr[i]);
  			result = result.concat(arr.splice(i));
  			break;
  		}
        
  }
  return result;
}

drop([1, 2, 3, 4], function(n) {return n >= 3;});



