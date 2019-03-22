export function swap<T>(array: Array<T>, i: number, j: number): void{
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}