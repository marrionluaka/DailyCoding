import { LinkedList } from "@DataStructures/LinkedList";
import Node from '@Helpers/Node';

export default function LinkedListFromTail<T>(list: LinkedList<T>, n: number): Node<T> {
    let pointerA = list.GetHead,
        pointerB = list.GetHead;

    while(n > 0){
        pointerB = pointerB.next;
        n--;
    }

    while(pointerB.next){
        pointerA = pointerA.next;
        pointerB = pointerB.next;
    }

    return pointerA;
}