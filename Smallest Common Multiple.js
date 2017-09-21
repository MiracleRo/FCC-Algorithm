function smallestCommons(arr) {
    var big = Math.max(...arr);
    var small = Math.min(...arr);
    var numArr = [];
    for (i = small; i <= big; i++) {
        numArr.push(i);
    }
    var r = numArr[0] * numArr[1];

    function findMultiple(left, right) {
        if (left === 0 || right === 0) {
            return 0;
        }
        if (left === right) {
            return right;
        }
        var result = right;
        while (result <= right * left) {
            if (result % left === 0) {
                return result;
            }
            result += right;
        }
    }
    for (i = 2; i < numArr.length; i++) {
        r = findMultiple(numArr[i], r)
    }
    return r;
}


smallestCommons([1, 5]);