export function swap<T>(array: Array<T>, i: number, j: number): void{
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

export function memoization(fn: any): any{
    const cache = {};

    return function(...args: any){
        if(cache[args]) return cache[args];

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    }
}