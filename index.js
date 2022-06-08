let receivesAFunction = (cb) => {
    cb()
}

let returnsANamedFunction = () => {
    return function balogna() {

    };
}

let returnsAnAnonymousFunction = () => {
    return function() {

    }
}