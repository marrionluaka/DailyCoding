export default class MaxBinaryHeap<T> {
    private _values: Array<T>;
    
    public get Values(): Array<T> {
        return this._values;
    }

    constructor(){
        this._values = [];
    }

    public insert(val: T): MaxBinaryHeap<T> {
        this._values.push(val);
        this._bubbleUp();
        return this;
    }

    public extractMax(){
        const maxValue = this._values[0],
              newRoot = this._values.pop();
        
        if(this._values.length){
            this._values[0] = newRoot;
            this._sinkDown(newRoot);
        }

        return maxValue;
    }

    private _bubbleUp(): void {
        let idx = this._values.length-1;
        const newVal = this._values[idx];

        while(idx > 0){
            let parentIdx = Math.floor((idx-1)/2),
                parent = this._values[parentIdx];

            if(newVal <= parent) break;

            this._swap(this._values, parentIdx, idx);

            idx = parentIdx;
        }
    }

    private _sinkDown(root: T): void {
        const length = this._values.length;
        let idx: number = 0;

        while(true){
            let leftChildIdx = 2*idx + 1,
                rightChildIdx = 2*idx + 2,
                leftChild: T,
                rightChild: T,
                swap: number;

            if(leftChildIdx < length){
                leftChild = this._values[leftChildIdx];
                if(leftChild > root) swap = leftChildIdx;
            }

            if(rightChildIdx < length){
                rightChild = this._values[rightChildIdx];
                if(
                    (swap === null && rightChild > root) ||
                    (swap !== null && rightChild > leftChild)
                ){
                    swap = rightChildIdx;
                }
            }

            if(!swap) break;

            this._swap(this._values, idx, swap);

            idx = swap;
        }
    }

    private _swap<T>(array: Array<T>, i: number, j: number): void{
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}