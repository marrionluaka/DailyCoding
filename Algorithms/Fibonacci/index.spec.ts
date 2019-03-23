import { expect } from 'chai';
import fibonacci from '.';

describe('Fibonacci Spec', () => {

    it("returns the value of a fib sequence given an index.", () => {
        expect(fibonacci(6)).to.equal(8);
    });
});