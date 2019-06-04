import { expect } from 'chai';
import { Set } from '.';


describe.only('Set Spec', () => {
    let sut: Set<string>;
    const item = 'item';

    beforeEach(() => {
        sut = new Set()
    });

    it('add():', () => {
        // Act
        sut.add(item);

        // Assert
        expect(sut.size).to.equal(1);
    });

    it('delete():', () => {
        // Arrange
        sut.add(item);
        expect(sut.size).to.equal(1);

        // Act
        sut.delete(item);

        // Assert
        expect(sut.size).to.equal(0);

    });

    it('has():', () => {
        // Arrange
        expect(sut.has(item)).to.be.false;

        // Act
        sut.add(item)

        // Assert
        expect(sut.has(item)).to.be.true;
    });

    it('clear():', () => {
        // Arrange
        sut.add(item);

        // Act
        sut.clear();

        // Assert
        expect(sut.size).to.equal(0);
    });

    it('size():', () => {
        // Arrange
        sut.add(item);

        // Assert
        expect(sut.size).to.equal(1);
    });

    it('values getter:', () => {
        // Arrange
        sut.add(item);
        sut.add('item2');

        // Assert
        expect(sut.values).to.eql(['item', 'item2']);
    });

    context('Set operations', () => {
        let otherSet: Set<string>;

        beforeEach(() => {
            otherSet = new Set();

            otherSet.add('1');
            otherSet.add('2');
            otherSet.add('3');
        });

        it('union():', () => {     
            // Arrange
            sut.add('3');
            sut.add('4');
            sut.add('5');

            // Act
            const expected = ['1', '2', '3', '4', '5'];
            const actual = sut.union(otherSet).values;

            // Assert
            expect(actual).to.eql(expected);
        });

        it('intersect():', () => {
            // Arrange
            sut.add('2');
            sut.add('3');
            sut.add('4');

            // Act
            const expected = ['2', '3'];
            const actual = sut.intersect(otherSet).values;

            // Assert
            expect(actual).to.eql(expected);
        });

        it('difference():', () => {
            // Arrange
            sut.add('2');
            sut.add('3');
            sut.add('4');

            // Act
            const expected = ['4'];
            const actual = sut.difference(otherSet).values;

            // Assert
            expect(actual).to.eql(expected);
        });

        context('subset():', () => {
            it('returns true when setA is a subset of setB', () => {
                // Arrange
                sut.add('1');
                sut.add('2');
    
                // Act
                const actual = sut.subset(otherSet);
    
                // Assert
                expect(actual).to.be.true;
            });

            it('returns false when setA is not a subset of setB', () => {
                // Arrange
                sut.add('4');
                sut.add('5');
    
                // Act
                const actual = sut.subset(otherSet);
    
                // Assert
                expect(actual).to.be.false;
            })
        })
    });
});