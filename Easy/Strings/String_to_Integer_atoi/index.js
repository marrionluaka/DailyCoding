/**
 * Time Complexity: O(1)
 * @param {string} str
 * @return {number}
 */
export default function atoi(str){
    if(!str || !str.length) return 0;
    //1
    const PARSED = _parseInt(str, 10);
    //2
    if(isNaN(PARSED)) return 0;
    //3
    const MAX_INT = Math.pow(2,31)-1, MIN_INT = -Math.pow(2,31);
    //4
    return PARSED > MAX_INT ? MAX_INT : PARSED < MIN_INT ? MIN_INT : PARSED;
}

function _parseInt(str) {
    const zeroCode = '0'.charCodeAt(0);
    const nineCode = '9'.charCodeAt(0);
    const isDigit = char => char.charCodeAt(0) >= zeroCode && char.charCodeAt(0) <= nineCode;

    let trimmed = str.trim();
        
    if(trimmed[0] !== '-' && !isDigit(trimmed[0])) return NaN;

    let sign = 1;
    if(trimmed[0] === '-'){ 
        trimmed = trimmed.substr(1);
        sign = -1;
    }

    let parsed = 0;
        for(let char of trimmed){
            if(!isDigit(char)) break;
            parsed = parsed * 10 + (char.charCodeAt(0) - zeroCode);
        }

    return sign * parsed;
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