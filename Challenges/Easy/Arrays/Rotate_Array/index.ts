/**
 * Time Complexity: O(1)
 */
export default function rotate(nums: number[], k: number): void {
    if(!nums || !nums.length) return;

	nums.unshift(...nums.splice(nums.length - k));
};

/**
 * Explanation:
 * 1. Get the length of the given array
 * 
 * 2. Substract nums.length with k
 * 
 * 3. Splice from the difference of nums.length and k
 * 
 * 4. Place the spliced array at the beginning of nums
 */