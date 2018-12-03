/**
 * Time Complexity: O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export default function twoSum(nums, target){
    let result = [];
    if(!nums || !nums.length) return result;

    // 1.
    const visited = new Map();

    // 2.
    for(let i = 0, len = nums.length; i < len; i++){
        // 3. 
        if(visited.has(target - nums[i])){
            result[0] = visited.get(target - nums[i]);
            result[1] = i;
            return result;
        }
        // 4.
        visited.set(nums[i], i);
    }

    // 5.
    return result;
}

/**
 * Explanation:
 * 1. Create a hash to keep track of visited values
 * 
 * 2. Loop through all the elements of the nums array once
 * 
 * 3. Subtract the target with the current element i.e: 9 - 2
 *    if the difference is in the visited hash, then that means
 *    that you found the two numbers that equate the target (x = 9 - 2 === 9 = x + 2)
 * 
 * 4. Store the current element with its index in the visited hash
 * 
 * 5. Return the results
 */