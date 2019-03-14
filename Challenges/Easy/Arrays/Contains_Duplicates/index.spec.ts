import { expect } from 'chai';
import containsDuplicate from '.';

describe("Contains Duplicate Spec", () => {

    it("returns true when there are duplicates.", () => {
        //Arrange
        const nums  = [1,2,3,1];

        // Act
        const actual = containsDuplicate(nums);

        // Assert
        expect(actual).to.be.true;
    });

    it("returns false when there are no duplicates.", () => {
        //Arrange
        const nums  = [1,2,3,4];

        // Act
        const actual = containsDuplicate(nums);

        // Assert
        expect(actual).to.be.false;
    });
});