function steamroller(arr) {
    // I'm a steamroller, baby
    var newArr = [];
    values(arr, newArr);
    return newArr;
}
var a = steamroller([1, {},
    [3, [
        [4]
    ]]
])
console.log(a)

function values(v, newarr) {
    v.map(function(value) {
        if (Array.isArray(value)) {
            values(value, newarr);
        } else {
            newarr.push(value);
        }
    })
}