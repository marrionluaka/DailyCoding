import { expect } from 'chai';
import rotate from '.';

describe("Rotate Array Spec", () => {

    it("rotates an array to the right given a number of steps.", () => {
        //Arrange
        const nums  = [1,2,3,4,5,6,7];
        const steps = 3;

        // Act
        const expected = [5,6,7,1,2,3,4];
        rotate(nums, steps);

        // Assert
        expect(expected).to.eql(nums);
    });
});