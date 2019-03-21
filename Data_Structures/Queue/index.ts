import { LinkedList } from '@DataStructures/LinkedList';
import Node from '../../Helpers/Node';

export default class Queue<T> {
    private _list: LinkedList<T>;
    private _size: number;

    constructor(){
        this._list = new LinkedList();
        this._size = 0;
    }

    public get Count(): number {
        return this._size;
    }

    public get Front(): Node<T> {
        return this._list.GetHead;
    }

    public get IsEmpty(): boolean {
        return this.Count === 0;
    }

    public Enqueue(val: T): number {
        this._list.Append(val);
        return ++this._size;
    }

    public Dequeue(): T {
        this._size--;
        return this._list.RemoveAt(1);
    }

    public Clear(): void {
        this._list = new LinkedList();
        this._size = 0;
    }
}