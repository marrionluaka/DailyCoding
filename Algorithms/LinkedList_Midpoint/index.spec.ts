import { expect } from 'chai';
import LinkedListMidpoint from '.';
import { LinkedList } from '@DataStructures/LinkedList';

describe('LinkedList Midpoint Spec', () => {
    let list: LinkedList<number>;
    
    beforeEach(() => {
        list = new LinkedList<number>()
                    .Append(1)
                    .Append(2)
                    .Append(3)
                    .Append(4);
    });

    it("finds the mid point of a linkedlist with even slots.", () => {
        // Act
        const actual = LinkedListMidpoint(list);

        // Assert
        expect(actual).to.eql(2);
    });

    it("finds the mid point of a linkedlist with odd slots.", () => {
        // Act
        const actual = LinkedListMidpoint(list.Append(5));

        // Assert
        expect(actual).to.eql(3);
    });
});