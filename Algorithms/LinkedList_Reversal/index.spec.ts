import { expect } from 'chai';
import LinkedListReversal from '.';
import { LinkedList } from '@DataStructures/LinkedList';

describe('LinkedList Reversal Spec', () => {

    it("reverses a linkedlist", () => {
        // Arrange
        const list = new LinkedList();
        list.Append(1);
        list.Append(2);
        list.Append(3);
        list.Append(4);

        // Act
        const actual = LinkedListReversal(list);

        // Assert
        expect(actual.ToString()).to.eql("4 3 2 1");
    });
});