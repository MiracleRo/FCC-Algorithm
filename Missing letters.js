function fearNotLetter(str) {
  const begin = str.charCodeAt(0);
  const end = str.charCodeAt(str.length - 1);
  var strArr = [];
  for (let i = begin; i < end + 1; i++) {
    if (str.charAt(0) === String.fromCharCode(i)) {
      str = str.substr(1, str.length);
    } else {
      strArr.push(String.fromCharCode(i));
    }
  }
  strArr = strArr.join("");
  if(strArr.length>0){
    return strArr;
  }else {
    return undefined
  }
}

fearNotLetter("abc");
