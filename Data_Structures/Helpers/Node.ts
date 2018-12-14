export default class Node<T>{
    public value: T
    public next: Node<T>

    constructor(val: T){
        this.value = val;
        this.next = null;
    }
}