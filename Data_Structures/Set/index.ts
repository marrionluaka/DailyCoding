export class Set<T> {

    private _items: any

    constructor(){
        this._items = {}
    }

    public add(item: T): boolean {
        if(this.has(item)) return false;

        this._items[item] = item;
        return true;
    }

    public delete(item: T): boolean {
        if(!this.has(item)) return false;

        delete this._items[item];
        return true;
    }

    public values(): T[] {
        return Object
            .keys(this._items)
            .reduce((values, val) =>  [...values, val], []);
    }

    public union(setB: Set<T>){
        const unionSet = new Set();
        const fn = (v: T) => unionSet.add(v);

        this.values().forEach(fn);
        setB.values().forEach(fn);
        return unionSet;
    }

    public intersect(setB: Set<T>){
        return this.values().reduce((intersection, val) =>{
            if(setB.has(val)) intersection.add(val);
            return intersection;
        }, new Set());
    }

    public difference(setB: Set<T>){
        return this
            .values()
            .reduce((diff, val) => {
                if(!setB.has(val)) diff.add(val);
                return diff;
            }, new Set());
    }

    public subset(set: Set<T>){
        throw '';
    }

    public has(item: T): boolean {
        return this._items.hasOwnProperty(item);
    }

    public size(): number {
        return Object.keys(this._items).length
    }

    public clear(): void {
        this._items = {}
    }
}