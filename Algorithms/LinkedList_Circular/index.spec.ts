import { expect } from 'chai';
import LinkedListCircular from '.';
import { LinkedList } from '@DataStructures/LinkedList';

describe.only('LinkedList Circular Spec', () => {
    let list: LinkedList<number>;
    
    beforeEach(() => {
        list = new LinkedList<number>()
                    .Append(1)
                    .Append(2)
                    .Append(3)
                    .Append(4);
    });

    it("returns true when a linkedlist is circular.", () => {
        // Arrange
        list.GetTail.next = list.GetHead;
        
        // Assert
        expect(LinkedListCircular(list)).to.be.true;
    });

    it("returns false when a linkedlist is not circular.", () => {
        // Assert
        expect(LinkedListCircular(list)).to.be.false;
    });
});