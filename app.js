const meth = require('./meth');
const co = require('co');
const Promise = require('bluebird');

let myCb = cb => {
    return cb(null, 'hello world');
};

myCb = Promise.promisify(myCb);

const myTimeout = () => {
    return new Promise(res => {
        setTimeout(() => {
            console.log('timeout returned');
            res();
        }, 1000);
    });
};

co(function* () {
    const str = yield myCb();
    console.log(str);
    yield myTimeout();
    const result = yield meth();
    console.log(result.status);
});