function unite(arr1, arr2, arr3) {
  
 	// return arr1;
  var array = [];
  array =array.concat(arguments[0]);
  for(i=1;i<arguments.length;i++){
  	for(let a=0;a<arguments[i].length;a++){
  		// console.log(arguments[i]+'d'+a);
  		if(!array.includes(arguments[i][a])){
  			console.log(arguments[i][a]);
  			array.push(arguments[i][a]);
  		}
  	}	
  }
 // console.log(array);
   return array;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);