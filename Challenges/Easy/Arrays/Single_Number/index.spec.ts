import { expect } from 'chai';
import singleNumber from '.';

describe("Single Number Spec", () => {

    it("returns a distinct number from an array of duplicates.", () => {
        //Arrange
        const nums  = [4,1,2,1,2];

        // Act
        const actual = singleNumber(nums);

        // Assert
        expect(actual).to.equal(4);
    });
});