function where(collection, source) {
  var arr = [];
  // var name = new Object(source);
  // What's in a name?
  var find_foucs = Object.keys(source);
  for(i=0;i<collection.length;i++){
  	for(b=0;b<find_foucs.length;b++){
  		if(collection[i].hasOwnProperty(find_foucs[b])){
  			if(!collection[i][find_foucs[b]]==source[find_foucs[b]]){
  				break;
  			}
  			if(collection[i][find_foucs[b]]==source[find_foucs[b]]){
  				if(b==find_foucs.length-1){
  					arr.push(collection[i]);
  				}
  			}
  		}
  	}
  }
  console.log(arr);
  return arr;
}

where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });

