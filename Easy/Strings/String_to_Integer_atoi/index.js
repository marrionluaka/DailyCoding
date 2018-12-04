/**
 * Time Complexity: O(n)
 * @param {string} str
 * @return {number}
 */
export default function atoi(str){
    if(!str || !str.length) return 0;
    //1
    const PARSED = parseInt(str, 10);
    //2
    if(isNaN(PARSED)) return 0;
    //3
    const MAX_INT = Math.pow(2,31)-1, MIN_INT = -Math.pow(2,31);
    //4
    return PARSED > MAX_INT ? MAX_INT : PARSED < MIN_INT ? MIN_INT : PARSED;
}

/**
 * Explanation:
 * 1. ParseInt the incoming str.
 * 
 * 2. Return zero when the parsed str is not a number.
 * 
 * 3. Create two constants storing js' max int and min int.
 * 
 * 4. Only return the parsed string if it is within the allowed ranged(between max and min).
 * 
 */