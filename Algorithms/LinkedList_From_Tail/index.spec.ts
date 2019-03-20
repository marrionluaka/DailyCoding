import { expect } from 'chai';
import LinkedListFromTail from '.';
import { LinkedList } from '@DataStructures/LinkedList';

describe('LinkedList From Tail Spec', () => {
    let list: LinkedList<number>;
    
    beforeEach(() => {
        list = new LinkedList<number>()
                    .Append(1)
                    .Append(2)
                    .Append(3)
                    .Append(4);
    });

    it("returns the 3rd node from the tail.", () => {
        // Act
        const actual = LinkedListFromTail(list, 2);

        // Assert
        expect(actual.value).to.equal(2);
    });
});