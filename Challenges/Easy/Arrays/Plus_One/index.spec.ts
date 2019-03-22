import { expect } from 'chai';
import plusOne from '.';

describe("Plus One Spec", () => {

    it("increments the last number in the array when it is less than 9.", () => {
        //Arrange
        const nums = [1,2,3];

        // Act
        const expected = [1,2,4];
        const actual = plusOne(nums);

        // Assert
        expect(actual).to.eql(expected);
    });

    it("adds tens.", () => {
        //Arrange
        const nums = [9];

        // Act
        const expected = [1,0];
        const actual = plusOne(nums);

        // Assert
        expect(actual).to.eql(expected);
    });
});