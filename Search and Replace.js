function myReplace(str, before, after) {
	
	var arr=[];
	if(before.charAt(0).match(/[A-Z]/g)){
		for(i=1;i<after.length;i++){
			arr.push(after.charAt(i));
			// var after1 = arr.join('');
		}
		arr.unshift(after.charAt(0).toUpperCase());
		after = arr.join("");
	}
	console.log(after);
	str = str.replace(before,after);
	console.log(str);
  return str;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
