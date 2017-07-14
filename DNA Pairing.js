function pair(str) {
  var result ='';
  var arr =[];
  for(i=0;i<str.length;i++){
    let arr1 =[];
    var s = str.charAt(i);
    arr1.push(s);
    arr1.push(switchDNA(s));
    arr.push(arr1);
  }
  return arr;
}
function switchDNA(str){
  switch (str) {
    case 'G':
      return 'C';
      break;
    case 'C':
      return 'G';
      break;
      case 'A':
        return 'T';
        break;
      case 'T':
        return 'A';
        break;

  }
}
pair("GCGA");
