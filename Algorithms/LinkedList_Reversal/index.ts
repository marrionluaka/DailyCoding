import { LinkedList } from "@DataStructures/LinkedList";
import Node from "@Helpers/Node";

export default function LinkedListReversal<T>(list: LinkedList<T>): LinkedList<T> {
    let prev: Node<T>, 
        current = list.GetHead, 
        next: Node<T>;

    while(current){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return LinkedList.ToLinkedList(prev);
}