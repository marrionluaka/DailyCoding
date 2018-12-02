import { expect } from 'chai';
import twoSum from '.';

describe("Two Sum Spec", () => {

    it("returns an empty array when nums is empty or null", () => {
        // Act
        const expected = [];
        const actual = twoSum(null, null);

        // Assert
        expect(expected).to.eql(actual);
    });

    it("return indices of the two numbers such that they add up to a specific target", () => {
        // Act
        const expected = [0, 1];
        const actual = twoSum([2, 7, 11, 15], 9);

        // Assert
        expect(expected).to.eql(actual);
    });
});