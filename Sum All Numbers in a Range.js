  function sumAll(arr) {
    var max =  Math.max(...arr);
    var min =  Math.min(...arr);
    var total = (max+min)*(max-min+1)/2;
    return total;
  }


  sumAll([1, 4]);