import Node, { Link } from '../Helpers/Node';

export default class Queue<T> {
    private _first: Node<T>;
    private _last: Node<T>;
    private _size: number;

    constructor(){
        this._size = 0;
    }

    public get Count(): number {
        return this._size;
    }

    public get Front(): Node<T> {
        return this._first
    }

    public get IsEmpty(): boolean {
        return this.Count === 0;
    }

    public Enqueue(val: T): number {
        const newNode = new Node(val);

        if(!this._first){
            this._first = newNode;
            this._last = newNode;
        } 
        else {
            this._last.next = newNode;
            this._last = newNode;
        }

        return ++this._size;
    }

    public Dequeue(): T {
        if(!this._first) return null;

        const temp = this._first;
        if(this._first === this._last) this._last = null;

        this._first = this._first.next;
        this._size--;
        return temp.value;
    }

    public Clear(): void {
        this._first = null;
        this._last = null;
        this._size = 0;
    }
}


export function BFS<T>(root: Link<T>): Array<T>{
    let node = root, 
        visited = [], 
        queue = new Queue<Link<T>>();

    queue.Enqueue(root);

    while(!queue.IsEmpty) {
        node = queue.Dequeue();
        visited.push(node.value);

        if(node.left) queue.Enqueue(node.left);
        if(node.right) queue.Enqueue(node.right);
    }

    return visited;
}