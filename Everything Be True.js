function every(collection, pre) {
    // Is everyone being true?
    return collection.every(function(element, index, array) {
        return Boolean(element[pre]) === true;
    });
}


var a = every([{ "user": "Tinky-Winky", "sex": "male" },
    { "user": "Dipsy", "sex": "male" },
    { "user": "Laa-Laa", "sex": "female" },
    { "user": "Po", "sex": "female" }
], "sex")