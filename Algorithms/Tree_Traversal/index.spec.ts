import { expect } from "chai";
import { Link } from "../../Helpers/Node";
import { BFS, DFSPreOrder, DFSInOrder, DFSPostOrder } from ".";

describe("Tree Traversal Spec", () => {
    let tree: Link<number>;
    beforeEach(() => {
        tree = new Link(10);

        tree.left  = new Link(5);
        tree.left.right  = new Link(7);
        tree.left.left = new Link(3);

        tree.right = new Link(15);
        tree.right.right = new Link(20);
    });

    it("BST(): returns all the neighbours of a given root element", () => {
        const root = new Link(5);
        root.left  = new Link(3);
        root.right = new Link(7);

        const expected = [5,3,7];
        const actual = BFS(root);

        expect(actual).to.eql(expected);
    });

    it("DFSPreOrder(): adds a node to the visited list first then finds its children.", () => {
        const expected = [10, 5, 3, 7, 15, 20];
        const actual = DFSPreOrder(tree);

        expect(actual).to.eql(expected);
    });

    it("DFSInOrder(): visits all the children nodes on the left side first and then adds them to the visited list.", () => {
        const expected = [3, 5, 7, 10, 15, 20];
        const actual = DFSInOrder(tree);

        expect(actual).to.eql(expected);
    });

    it("DFSPostOrder(): visits all the children nodes first and then adds them to the visited list.", () => {
        const expected = [3, 7, 5, 20, 15, 10];
        const actual = DFSPostOrder(tree);

        expect(actual).to.eql(expected);
    });
});