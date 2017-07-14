function translate(str) {
  if (str.charAt(0).match(/([a e i o u])/)) {
    return str + 'way';
  } else {
    var n = str.search(/([a e i o u])/);
    return str.substr(n) + str.substr(0, n) + 'ay';
  }
}
translate("consonant");
