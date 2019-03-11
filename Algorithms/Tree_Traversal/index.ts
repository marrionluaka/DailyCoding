import { Link } from "../../Helpers/Node";
import Queue from "../../Data_Structures/Queue";

type TraverseFunc<T> = (visited: Array<any>, node: Link<T>, traverse: any) => any

export function BFS<T>(root: Link<T>): Array<T>{
    let node = root, 
        visited = [], 
        queue = new Queue<Link<T>>();

    queue.Enqueue(root);

    while(!queue.IsEmpty) {
        node = queue.Dequeue();
        visited.push(node.value);

        if(node.left) queue.Enqueue(node.left);
        if(node.right) queue.Enqueue(node.right);
    }
    
    return visited;
}

export function DFSPreOrder<T>(root: Link<T>){
    return _DFS((visited: Array<any>, node: Link<T>, traverse: any) => {
        visited.push(node.value);

        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
    }, root);
}

export function DFSInOrder<T>(root: Link<T>){
    return _DFS((visited: Array<any>, node: Link<T>, traverse: any) => {
        if(node.left) traverse(node.left);

        visited.push(node.value);

        if(node.right) traverse(node.right);
    }, root);
}

export function DFSPostOrder<T>(root: Link<T>){
    return _DFS((visited: Array<any>, node: Link<T>, traverse: any) => {
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);

        visited.push(node.value);
    }, root);
}

function _DFS<T>(fn: TraverseFunc<T>, root: Link<T>){
    const _visited = [];

    (function traverse(node){
        fn(_visited, node, traverse);
    }(root));

    return _visited;
}