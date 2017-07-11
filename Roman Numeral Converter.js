function convert(num) {
	var numArry = [
		['M'],
		['C', 'D', 'M'],
		['X', 'L', 'C'],
		['I', 'V', 'X']
	];
	//1000 500 100 50 10 5 1;
	var a = '';
	num = num + '';
	var addzero = 4 - num.length;
	for (i = 0; i < addzero; i++) {
		num = '0' + num;
	}
	for (b = 0; b < 4; b++) {
		a += oneNum(parseInt(num.charAt(b)), numArry[b]);
	}
	console.log(a);	
   return a;
}
convert(500);

function oneNum(num, args) {
	var arr = [];
	var str1 = args[0];
	var str5 = args[1];
	var str10 = args[2];
	if (num < 5) {
		if (num === 0) {
			arr.push('');
		}else if(num === 4){
			arr.push(str1 + str5);
		}else{
			for (i = 0; i < num; i++) {
				arr.push(str1);
			}
		}
	} else {
		if(num === 5){
			arr.push(str5);
		}else if (num === 9) {
			arr.push(str1 + str10);
		}else {
			arr.push(str5);
			for (i = 0; i < num - 5; i++) {
				arr.push(str1);
			}
		}
	}
	return arr.join('');
}