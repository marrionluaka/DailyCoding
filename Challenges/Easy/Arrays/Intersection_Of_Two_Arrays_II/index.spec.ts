import { expect } from 'chai';
import intersect from '.';

describe("Intersect Spec", () => {

    it("finds the intersection of two sets.", () => {
        expect(intersect([1,2], [1,1])).to.eql([1]);
        expect(intersect([4,9], [9,4,9,8,4])).to.eql([9,4]);
        expect(intersect([1,2,2,1], [2,2])).to.eql([2,2]);
        expect(intersect([3,1,2], [1,1])).to.eql([1]);
    });
});