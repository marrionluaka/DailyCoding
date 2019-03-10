import Node from "../Helpers/Node";

export class LinkedList<T> {
    private _head: Node<T>;
    private _length: number;

    constructor(){
        this._length = 0;
    }

    public Append(value: any): LinkedList<T> {
    	let node = new Node(value);
      
        if(!this._head){
            this._head = node;
        } else {
            this._head = this._GetLastNode(this._head);
            this._head.next = node;
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
            const item = this._FindItem(index, position, this._head);
            node.next = item.current;
            item.prev.next = node;
        }
        
        this._length++;
        return true
    }
    
    public RemoveAt(position: number) {
        if(position < 1 || position > this._length) return null;
        
        let current = this._head,
            item,
            index = 1;
        
        if(position === 1){
            this._head = current.next;
        } else {
            item = this._FindItem(index, position, this._head);
            item.prev.next = item.current.next
        }
        
        this._length--;
        return item.current.value;
    }
    
    public ToString(): string{
        let current = this._head,
            res = '';
        
        while(current){
            res += current.value + (current.next ? ' ' : '');
            current = current.next;
        }
        return res;
    }
    
    public IndexOf(value): number{
        let current = this._head,
            index = 1;
            
        while(current){
            if(value === current.value) return index;
        
            index++;
            current = current.next;
        }
        return -1;
    }

    public Remove(value): number{
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

    private _GetLastNode(node: Node<T>): Node<T>{
        let last = Object.assign({}, node);
        
        while(last.next){
            last = last.next;
        }
        return last;
    }
    
    private _FindItem(index: number, position: number, head: Node<T>){
        let prev, current = head;

        while(index++ < position){
            prev = current;
            current = current.next;
        }

        return {
            prev,
            current
        };
    }
}