function receivesAFunction(cbFunction) {
    cbFunction();
}

function namedFunction() {}

function returnsANamedFunction() {
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {};
}