import Node from "../../Helpers/Node";

export class LinkedList<T> {
    private _head: Node<T>;
    private _tail: Node<T>;
    private _length: number;

    constructor(){
        this._head = null;
        this._tail = null;
        this._length = 0;
    }

    public static ToLinkedList<T>(node: Node<T>): LinkedList<T> {
        const list: LinkedList<T> = new LinkedList();

        while(node){
            list.Append(node.value);
            node = node.next;
        }

        return list;
    }

    public Append(value: any): LinkedList<T> {
    	let node = new Node(value);
      
        if(!this._head){
            this._head = node;
            this._tail = this._head;
        } else {
            this._tail.next = node;
            this._tail = node;
        }
      
        this._length++;
        return this;
    }
    
    public Insert(position: number, value: any): boolean {
        if(position < 1 || position > this._length) return false;
        
        let node = new Node(value),
            current = this._head,
            index = 1;
        
        if(position === 1){
            node.next = current;
            this._head = node;
        } else {
            const [prev, next] = this._FindItem(index, position);
            node.next = next;
            prev.next = node;
        }
        
        this._length++;
        return true
    }
    
    public RemoveAt(position: number) {
        if(position < 1 || position > this._length) return null;
        
        let current: Node<T> = this._head,
            item: T,
            index: number = 1;
        
        if(position === 1){
            item = this._head.value;
            this._head = current.next;
        } else {
            const [prev, next] = this._FindItem(index, position);
            prev.next = next.next
            item = next.value;
        }
        
        this._length--;
        return item;
    }
    
    public ToString(): string {
        let current = this._head,
            res = '';
        
        while(current){
            res += current.value + (current.next ? ' ' : '');
            current = current.next;
        }
        return res;
    }
    
    public IndexOf(value): number {
        let current = this._head,
            index = 1;
            
        while(current){
            if(value === current.value) return index;
        
            index++;
            current = current.next;
        }
        return -1;
    }

    public Remove(value): T {
        return this.RemoveAt(this.IndexOf(value));
    }
    
    public IsEmpty(): boolean {
    	return this._length === 0;
    }
    
    public Count(): number {
    	return this._length;
    }
    
    public GetHead(): Node<T> {
    	return this._head;
    }

    public Clear(): void {
        this._head = null;
        this._length = 0;
    }
    
    private _FindItem(index: number, position: number) {
        let prev, current = this._head;

        while(index++ < position){
            prev = current;
            current = current.next;
        }
        
        return [prev, current];
    }
}