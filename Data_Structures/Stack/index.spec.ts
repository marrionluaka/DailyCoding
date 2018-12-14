import { expect } from 'chai';
import Stack, { decimalToBinary } from './';

describe('Stack Spec', function () {
    let sut: Stack<string>;

    beforeEach(() => {
        sut = new Stack<string>();
    });
  
    context("Stack Creation", function(){
        let item: string;
        beforeEach(() => {
            item = "item";
        });

        it('adds elements to the stack',function () {
            // Act
            const expected = 1;
            const actual = sut.Push(item).Count;

            // Assert
            expect(actual).to.eql(expected);
            sut.Clear();
        });

        it('pops elements from the stack',function () {
            // Act
            const expected = item;
            const actual = sut.Push(item).Pop();

            // Assert
            expect(actual).to.eql(expected);
            expect(sut.Count).to.eql(0);
            sut.Clear();
        });

        it('removes all elements from the stack',function () {
            // Act
            const expected = 0;
            const actual = sut.Clear().Count;

            // Assert
            expect(actual).to.eql(expected);
        });

        it('returns the top elements from the stack',function () {
            // Act
            const expected = item;
            const actual = sut.Push(item).Peek;

            // Assert
            expect(actual.value).to.eql(expected);
            expect(sut.Count).to.eql(1);
            sut.Clear();
        });

        it('verifies that the stack is empty', function(){
            // Act
            const actual = sut.IsEmpty;

            // Assert
            expect(actual).to.be.true;
        });
    });

    context("Stack real world example", function(){
        it('returns a string representation of the binary number for 10 with base 2', function(){
            // Act
            const expected = "1010";
            const actual = decimalToBinary(10, 2);

            // Assert
            expect(actual).to.eql(expected);
        });

        it('returns a string representation of the binary number for 100345 with base 8', function(){
            // Act
            const expected = "303771";
            const actual = decimalToBinary(100345, 8);

            // Assert
            expect(actual).to.eql(expected);
        });
    });
});