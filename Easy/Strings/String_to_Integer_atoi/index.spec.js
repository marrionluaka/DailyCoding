import { expect } from 'chai';
import atoi from '.';

describe("Atoi Spec", () => {

    it("returns 0 when the given input is null", () => {
        // Act
        const expected = 0;
        const actual = atoi(null);

        // Assert
        expect(expected).to.eql(actual);
    });

    it("returns 0 when the given input is an empty string", () => {
        // Act
        const expected = 0;
        const actual = atoi("");

        // Assert
        expect(expected).to.eql(actual);
    });

    it("returns 0 when the given input is an invalid number", () => {
        // Act
        const expected = 0;
        const actual = atoi("words and 987");

        // Assert
        expect(expected).to.eql(actual);
    });

    it("returns the max int when the input is out of range", () => {
        // Act
        const expected = Math.pow(2,31)-1;
        const actual = atoi("91283472332");

        // Assert
        expect(expected).to.eql(actual);
    });

    it("returns the min int when the input is out of range", () => {
        // Act
        const expected = -Math.pow(2,31);
        const actual = atoi("-91283472332");

        // Assert
        expect(expected).to.eql(actual);
    });

    it("returns the parsed input when input is mixed with letters but start with a number", () => {
        // Act
        const expected = 4193;
        const actual = atoi("4193 with words");

        // Assert
        expect(expected).to.eql(actual);
    });

    it("returns the parsed input when the first non-whitespace character is '-'", () => {
        // Act
        const expected = -42;
        const actual = atoi("   -42");

        // Assert
        expect(expected).to.eql(actual);
    });
});