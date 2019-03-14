/**
 * Time Complexity: O(n)
 */
export default function containsDuplicate(nums: number[]): boolean {
    const visited = new Set<number>();
    
    for(let i = 0, len = nums.length; i < len; i++){
        if(visited.has(nums[i])) return true;
        visited.add(nums[i]);
    }
    
    return false;
};

/**
 * Explanation:
 * 1. Create a set that keeps track of visited values.
 * 
 * 2. Loop through nums array
 * 
 * 3. Check if the element is already in the visited set
 * 
 * 4. If el is already in set, then return true; as this mean there are duplicates.
 * 
 * 5. Else add the el to the set.
 * 
 * 6. If you've looped throughn the entire array, then no duplicates were found, return false.
 */