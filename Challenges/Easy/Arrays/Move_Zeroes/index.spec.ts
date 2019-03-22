import { expect } from 'chai';
import moveZeroes from '.';

describe("Move Zeroes Spec", () => {

    it("moves zeroes to the end of an array in-place.", () => {
        //Arrange
        const nums = [0, 1, 0, 3, 12];

        // Act
        const expected = [1, 3, 12, 0, 0];
        moveZeroes(nums);

        // Assert
        expect(nums).to.eql(expected);
    });
});