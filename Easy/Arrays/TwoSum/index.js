/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

export default function twoSum(nums, target){
	let result = [];
	if(!nums || !nums.length) return result;

	const visited = new Map();
	for(let i = 0, len = nums.length; i < len; i++){
		if(visited.has(target - nums[i])){
			result[0] = visited.get(target - nums[i]);
			result[1] = i;
			return result;
		}
		visited.set(nums[i], i);
	}

	return result;
}