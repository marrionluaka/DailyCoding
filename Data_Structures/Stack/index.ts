import Node from '../../Helpers/Node';
import { LinkedList } from '@DataStructures/LinkedList';

export default class Stack<T> {
    private _list: LinkedList<T>;
    private _size: number;

    constructor(){
        this._list = new LinkedList();
        this._size = 0;
    }

    get Peek(): Node<T>{
        return this._list.GetTail;
    }
   
    get Count(): number{
        return this._size;
    }
   
    get IsEmpty(): boolean{
        return this._size === 0;
    }

    Push(val: T): Stack<T>{
        ++this._size;
        this._list.Append(val);
        return this;
    }
   
    Pop(): T {
        this._size--;
        return this._list.RemoveLast();
    }
   
    Clear(): Stack<T>{
        this._list = new LinkedList();
        this._size = 0;
        return this;
    }
}

export function decimalToBinary(decimalNumber: number, base: number): string{
    let stack = new Stack<number>(), 
        result = '',
        digits = '0123456789ABCDEF';

    while(decimalNumber > 0){
        stack.Push(Math.floor(decimalNumber % base));
        decimalNumber = Math.floor(decimalNumber / base);
    }

    while(!stack.IsEmpty){
        result += digits[stack.Pop()];
    }

    return result;
}