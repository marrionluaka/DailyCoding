import { LinkedList } from "@DataStructures/LinkedList";

export default function LinkedListCircular<T>(list: LinkedList<T>): boolean {
    let pointerA = list.GetHead,
        pointerB = list.GetHead;

    while(pointerB.next && pointerB.next.next){
        pointerA = pointerA.next;
        pointerB = pointerB.next.next;

        if(pointerA === pointerB) return true;
    }

    return false;
}