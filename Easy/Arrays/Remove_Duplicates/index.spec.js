import { expect } from 'chai';
import removeDuplicates from '.';

describe("Remove Duplicates Spec", () => {

    it("removes duplicates from a given array and returns its new length", () => {
        //Arrange
        const nums = [0,0,1,1,1,2,2,3,3,4];

        // Act
        const expected = 5;
        const actual = removeDuplicates(nums);

        // Assert
        expect(expected).to.eql(actual);
        expect(nums).to.eql([0,1,2,3,4]);
    });
});