/**
 * Time Complexity: O(n)
 */
import { swap } from'@Helpers/Utils';

export default function moveZeroes(nums: number[]): void {
    const len = nums.length;
    let i = 0;
    let j = 1;

    while(j < len){
        if(nums[i] === 0 && nums[j] === 0){
            j++;
            continue;
        }

        if(nums[i] !== 0){
            i++;
            j++;
            continue;
        }

        if(nums[i] * nums[j] === 0){
            swap(nums, i, j);
        }
        i++;
        j++;
    }
}