/**
 * Time Complexity: O(n)
 * @param {number[]} nums
 * @return {number}
 */
export default function removeDuplicates(nums) {
    const set = new Set();
    let i = 0;

    while(i < nums.length){
        //1
        if(set.has(nums[i])) {
            nums.splice(i, 1);
            continue;
        }
        //2
        set.add(nums[i]);
        i++;
    }
    return nums.length;
}

/**
 * Explanation:
 * 1. As you loop through the nums arr, if you accounter a val that already exists
 *    in the set, then remove it from the arr in-place (that's why splice is used instead of slice).
 *    And continue, it's very important that you do not increment 'i' when you find a duplicate.
 * 
 * 2. Straight forward, if the current val is not in the set, then add it.
 * 
 */