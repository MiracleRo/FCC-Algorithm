function convert(str) {
  // &colon;&rpar;
  var arrR ={'<':'lt','>':'gt','&':'amp','"':'quot','\'':'apos'};
  return str.replace(/[<>&'"]/ig,function(string){return '&'+arrR[string]+';';});
}

convert("Dolce & Gabbana");
