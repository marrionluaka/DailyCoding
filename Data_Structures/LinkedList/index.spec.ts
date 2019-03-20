import { expect } from 'chai';
import { LinkedList } from '.';
import Node from '@Helpers/Node';

describe('LinkedList Spec', () => {
	
    context("LinkedList Creation", () => {
        let value: string, sut: LinkedList<string>;
      
      beforeEach(() => {
            value = "Hello";
            sut = new LinkedList();
            sut.Clear();
        });

      it("converts a node to a linkedlist", () => {
        // Arrange
        const node = new Node(1);
        node.next = new Node(2);

        // Act
        const actual = LinkedList.ToLinkedList(node);
        
        // Assert
        expect(actual.GetHead.value).to.equal(1);
      });
      
      it('adds a new item', () => {
        // Act
        const expected = 1;
        const actual = sut.Append(value).Count;
        
        // Assert
        expect(actual).to.equal(expected);
        expect(sut.GetHead.value).to.equal(value);
      });
      
      it('adds a new item to list when list is not empty', () => {
          // Act
        const expected = "World";
        sut.Append(value).Append("World");
  
        // Assert
        expect(sut.GetHead.next.value).to.equal(expected);
      });
      
      it('returns null when the position is less than 1', () => {
          // Act
        const expected = null;
        const actual = sut.Append(value).RemoveAt(0);
        
        // Assert
        expect(actual).to.equal(expected);
      });
      
      it('returns null when the position is greater than the list\'s Count', () => {
          // Act
        const expected = null;
        const actual = sut.Append(value).RemoveAt(10);
        
        // Assert
        expect(actual).to.equal(expected);
      });
      
      it('removes an item from a specified position in the list', () => {
        // Act
        const expected = "World";
        const actual = sut.Append(value).Append("World").RemoveAt(2);
        
        // Assert
        expect(actual).to.eql(expected);
        expect(sut.GetHead.value).to.equal(value)
      });
      
      it('returns null when the position is invalid', () => {
        // Act
        const actual = sut.Append(value).Insert(-1, "Good-Bye");
        
        // Assert
        expect(actual).to.equal(false);
      });
      
      it('returns null when the position is an out-of-bounds value', () => {
        // Act
        const actual = sut.Append(value).Insert(4, "Good-Bye");
        
        // Assert
        expect(actual).to.equal(false);
      });
      
      it('inserts an element at the begining of the list', () => {
        // Act
        sut.Append(value).Insert(1, "Good-Bye");
        
        // Assert
        expect(sut.GetHead.value).to.equal("Good-Bye");
      });
      
      it('inserts an element at a specified position', () => {
        // Act
        const actual = sut.Append(value).Append("World").Insert(2, "Good-Bye");
        
        // Assert
        expect(actual).to.equal(true);
        expect(sut.Count).to.equal(3);
        expect(sut.GetHead.next.value).to.equal("Good-Bye");
      });
      
      it('returns the index of the element in the list', () => {
        // Act
        const expected = 1;
        const actual = sut.Append(value).IndexOf(value);
        
        // Assert
        expect(actual).to.eql(expected);
      });
      
      it('returns a string representation of the current list', () => {
        // Act
        const expected = "Hello World";
        const actual = sut.Append(value).Append("World").ToString();
        
        // Assert
        expect(actual).to.eql(expected);
      });
      
      it('returns the position of the specified element in the list', () => {
        // Act
        const expected = 2;
        const actual = sut.Append(value).Append("World").IndexOf("World");
        
        // Assert
        expect(actual).to.eql(expected);
      });
      
      it('returns -1 when the given element is not in the list', () => {
        // Act
        const expected = -1;
        const actual = sut.Append(value).Append("World").IndexOf("FLOP");
        
        // Assert
        expect(actual).to.eql(expected);
      });
      
      it('removes the last element from the list', () => {
        // Act
        const expected = "World";
        const actual = sut.Append(value).Append("World").RemoveLast();
        
        // Assert
        expect(actual).to.eql(expected);
      });
      
      it('returns true when the list is empty', () => {
        // Act
        const actual = sut.IsEmpty;
        
        // Assert
        expect(actual).to.equal(true);
      });
      
      it('returns the first element in the list', () => {
        // Act
        const actual = sut.Append(value).GetHead;
        
        // Assert
        expect(actual.value).to.equal(value);
      });
      
    });
    
  });