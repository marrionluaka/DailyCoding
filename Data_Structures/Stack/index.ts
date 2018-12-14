import Node from '../Helpers/Node';

export default class Stack<T> {
    private _first: Node<T>
    private _last: Node<T>
    private _size: number

    constructor(){
        this._size = 0;
    }

    get Peek(): Node<T>{
        return this._last;
    }
   
    get Count(): number{
        return this._size;
    }
   
    get IsEmpty(): boolean{
        return this._size === 0;
    }

    Push(val: T): Stack<T>{
        const newNode = new Node(val);
        
        if(!this._first){
            this._first = newNode;
            this._last = newNode;
        } else {
            let temp = this._first;
            this._first = newNode;
            this._first.next = temp;
        }
        ++this._size;
        return this;
    }
   
    Pop(): T{
        if(!this._first) return null;
        
        let temp = this._first;
        
        if(this._first === this._last) this._last = null;
        
        this._first = this._first.next;
        this._size--;
        
        return temp.value;
    }
   
    Clear(): Stack<T>{
        this._first = null;
        this._last = null;
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