/**
 * Time Complexity: O(n)
 */
export default function singleNumber(nums: number[]): number {
    const frequency = nums.reduce((visited, val) => {
        if(visited[val])
            visited[val] = visited[val] -= 1;
        else
            visited[val] = 1;

        return visited;
    }, {});

    return +Object.keys(frequency).find(k => frequency[k] > 0) || 0;
};

/**
 * Explanation:
 * 1. Loop through nums arr
 * 
 * 2. Create visited hash
 * 
 * 3. If a value has already been added to the hash, decrement its value
 * 
 * 4. Else set the current val to 1
 * 
 * 5. Once out of the loop, find the value that is greater than zero
 * 
 * 6. If there is none return 0
 */