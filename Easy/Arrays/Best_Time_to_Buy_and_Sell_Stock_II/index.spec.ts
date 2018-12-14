import { expect } from 'chai';
import maxProfit from '.';

describe("Best Time to Buy and Sell Stock II Spec", () => {

    it("returns a max profit of 11", () => {
        //Arrange
        const prices = [2,1,4,5,2,9,7];

        // Act
        const expected = 11;
        const actual = maxProfit(prices);

        // Assert
        expect(expected).to.eql(actual);
    });

    it("returns a max profit of 4", () => {
        //Arrange
        const prices = [1,2,3,4,5];

        // Act
        const expected = 4;
        const actual = maxProfit(prices);

        // Assert
        expect(expected).to.eql(actual);
    });

    it("returns a max profit of 0", () => {
        //Arrange
        const prices = [7,6,4,3,1];

        // Act
        const expected = 0;
        const actual = maxProfit(prices);

        // Assert
        expect(expected).to.eql(actual);
    });
});