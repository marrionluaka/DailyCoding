import { expect } from 'chai';
import fizzBuzz from '.';

describe("Fizz Buzz Spec", () => {

    it("solves fizz buzz problem.", () => {
        // Arrange
        const n = 15;

        // Act
        const expected = [
            "1",
            "2",
            "Fizz",
            "4",
            "Buzz",
            "Fizz",
            "7",
            "8",
            "Fizz",
            "Buzz",
            "11",
            "Fizz",
            "13",
            "14",
            "FizzBuzz"
        ];
        const actual = fizzBuzz(n);

        // Assert
        expect(actual).to.eql(expected);
    });
});
