export default class Node<T>{
    public value: T
    public next: Node<T>

    constructor(val: T){
        this.value = val;
        this.next = null;
    }
}

export class Link<T> {
    public value: T
    public right: Link<T>
    public left: Link<T>

    constructor(value: T){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}