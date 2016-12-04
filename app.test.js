const expect = require('expect');
const sinon = require('sinon');
require('co-mocha');

const meth = require('./meth');
describe('test', () => {
    it('should pass', function* () {
        const result = yield meth(); //func that returns a promise
        expect(result.status).toBe(200);
    });
});
