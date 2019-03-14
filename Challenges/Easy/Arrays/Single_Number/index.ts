/**
 * Time Complexity: O(1)
 */
export default function singleNumber(nums: number[]): number {
    const frequency = nums.reduce((visited, val) => {
        if(visited[val])
            visited[val] = visited[val] -= 1;
        else
            visited[val] = 1;
		
		return visited;
    }, {});
	
	return +Object.keys(frequency).find(k => frequency[k] > 0);
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