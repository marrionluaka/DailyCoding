import { expect } from 'chai';
import Queue from './';

describe("Queue Spec", () => {
    let sut: Queue<string>;
    beforeEach(() => sut = new Queue());

    it("Enqueue(): adds element to queue", () => {
        sut.Enqueue("hello");
        expect(sut.Count).to.equal(1);
    });

    it("Dequeue(): removes first element", () => {
        sut.Enqueue("hello");

        expect(sut.Dequeue()).to.equal("hello");
        expect(sut.Count).to.equal(0);
    });

    it("Clear(): clears out the queue", () => {
        sut.Enqueue("hello");

        sut.Clear();
        expect(sut.Count).to.equal(0);
        expect(sut.Front).to.be.null;
    }); 
});