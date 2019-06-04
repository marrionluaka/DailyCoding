export class Set<T> {

    private _items: any

    constructor(){
        this._items = {}
    }

    public get values(): T[] {
        return Object
            .keys(this._items)
            .reduce((values, val) =>  [...values, val], []);
    }

    public get size(): number {
        return Object.keys(this._items).length
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

    public union(setB: Set<T>) {
        const unionSet = new Set();
        const fn = (v: T) => unionSet.add(v);

        this.values.forEach(fn);
        setB.values.forEach(fn);
        return unionSet;
    }

    public intersect(setB: Set<T>) {
        return this._operate(val => setB.has(val));
    }

    public difference(setB: Set<T>): Set<T> {
        return this._operate(val => !setB.has(val));
    }

    public subset(setB: Set<T>): boolean {
        return this.size > setB.size ? false : this.values.every(s => setB.has(s));
    }

    public has(item: T): boolean {
        return this._items.hasOwnProperty(item);
    }

    public clear(): void {
        this._items = {}
    }

    private _operate(predicate: (set: T) => boolean): Set<T> {
        return this
            .values
            .reduce((acc, val) => {
                if(predicate(val)) acc.add(val);
                return acc;
            }, new Set<T>());
    }
}