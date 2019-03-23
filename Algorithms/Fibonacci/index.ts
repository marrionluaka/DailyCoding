import { memoization } from '@Helpers/Utils';

const fib = memoization(fibonacci);

export default function fibonacci(n: number): number{
    return n < 2 ? n : fib(n-1) + fib(n-2);
}