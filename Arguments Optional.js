function add() {

    var arg = arguments;
    if (!isNum(arg[0]) || arg.length === 2 && !isNum(arg[1])) return;

    if (arg.length === 1) {
        return function(x) {
            if (isNum(x)) {
                return arg[0] + x;
            }
        }
    }

    if (arg.length === 2) {
        return arg[0] + arg[1];
    }

    function isNum(e) {
        return typeof e === 'number' && isFinite(e);
    }
}