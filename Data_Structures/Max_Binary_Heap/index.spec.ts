import { expect } from "chai";
import MaxBinaryHeap from ".";

describe("Max Binary Heap Spec", () => {
    let sut: MaxBinaryHeap<number>;
    beforeEach(() => sut = new MaxBinaryHeap());

    it("insert(): inserts a value into the heap", () => {
        const expected = [100, 99, 36, 19, 12, 25, 5, 17];
        
        sut
            .insert(100)
            .insert(19)
            .insert(36)
            .insert(17)
            .insert(12)
            .insert(25)
            .insert(5)
            .insert(99);

        expect(sut.Values).to.eql(expected);
    });
});