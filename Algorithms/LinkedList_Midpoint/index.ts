import { LinkedList } from "@DataStructures/LinkedList";

export default function LinkedListMidpoint<T>(list: LinkedList<T>): T {
    let mid     = list.GetHead,
        search  = list.GetHead;

    while(search.next && search.next.next){
        mid     = mid.next;
        search  = search.next.next;
    }

    return mid.value;
}