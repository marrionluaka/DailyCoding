import { expect } from "chai";
import MaxBinaryHeap from ".";

describe("Max Binary Heap Spec", () => {
    let sut: MaxBinaryHeap<number>;
    beforeEach(() => {
        sut = new MaxBinaryHeap();
        sut
            .insert(100)
            .insert(19)
            .insert(36)
            .insert(17)
            .insert(12)
            .insert(25)
            .insert(5);
    });

    it("insert(): inserts a value into the heap.", () => {
        /**
                       100        
                  99        36 
                19  12    25  5 
            17
         */
        const expected = [100, 99, 36, 19, 12, 25, 5, 17];
        
        sut.insert(99);

        expect(sut.Values).to.eql(expected);
    });

    it("extracMax(): extracts the max value of the heap and rearranges it.", () => {
        /**
                       99        
                  19        36 
                17  12    25  5 
         */
        sut.insert(99);

        const expected = 100;
        const actual = sut.extractMax();

        expect(actual).to.equal(expected);
        expect(sut.Values).to.eql([99, 19, 36, 17, 12, 25, 5]);
    });
});