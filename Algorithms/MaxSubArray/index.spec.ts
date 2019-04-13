import { expect } from 'chai';
import maxSubarraySum from '.';

describe('maxSubarraySum spec', () => {
    it('returns the max sum of a given array.', () => {
        const res1 = maxSubarraySum([100, 200, 300, 400], 2);
        const res2 = maxSubarraySum([9, 45, 90, 17, 23], 2);

        expect(res1).to.equal(700);
        expect(res2).to.equal(135);
    });
});