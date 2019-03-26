/**
 * Time Complexity: O(n)
 */
export default function intersect(setA: number[], setB: number[]): number[]{
    const hash = setA.reduce((acc, val) => 
        (acc.set(val, (acc.get(val) || 0) + 1)) && acc, new Map<number, number>());

    return setB.reduce((res: number[], el: number): number[] => {
        if(hash.has(el)){
            if(hash.get(el) > 1){
                hash.set(el, hash.get(el) - 1);
            } else {
                hash.delete(el);
            }
            res.push(el);
        }
        return res;
    }, []);
}

/**
 * Explanation:
 * 1. Create a hash of the first set i.e: if setA === [1,2], then map === { 1: 1, 2: 1 }
 * 
 * 2. Loop through the second set.
 * 
 * 3. If the current el is in the hash, if its val is greater than one, decrement it.
 *    Otherwise remove el from hash. i.e: { 1: 0, 2: 1 } 1 is in the hash so decrement.
 * 
 * 4. Only push to the result arr if the el is in the hash.
 * 
 * 5. return result.
 */