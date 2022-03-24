function receivesAFunction (callback) {
    callback();
}
function returnsANamedFunction () {
    return function named () {
        console.log(`I did it`);
    };
}
function returnsAnAnonymousFunction () {
    return function (){};
}