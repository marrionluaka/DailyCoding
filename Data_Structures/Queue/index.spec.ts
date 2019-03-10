import { expect } from 'chai';
import Queue, { BFS } from './';
import { Link } from '../Helpers/Node';

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

    it("returns all the neighbours of a given root element", () => {
        const root = new Link(5);
        root.left  = new Link(3);
        root.right = new Link(7);

        const expected = [5,3,7];
        const actual = BFS(root);

        expect(actual).to.eql(expected);
    });
});