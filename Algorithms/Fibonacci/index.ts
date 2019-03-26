import { memoization } from '@Helpers/Utils';

const fib = memoization(fibonacciRecursive);

export default function fibonacciRecursive(n: number): number{
    return n < 2 ? n : fib(n-1) + fib(n-2);
}