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

    private _bubbleUp(): void {
        let idx = this._values.length-1;
        const newVal = this._values[idx];

        while(idx > 0){
            let parentIdx = Math.floor((idx-1)/2),
                parent = this._values[parentIdx];

            if(newVal <= parent) break;

            this._values[parentIdx] = newVal;
            this._values[idx] = parent;

            idx = parentIdx;
        }
    }
}