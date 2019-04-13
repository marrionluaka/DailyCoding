export default function maxSubarraySum(arr: number[], num: number): number{
    if(arr.length < num) return null;
  
    let maxSum = 0, tempSum = 0;
  
    for(let i = 0; i < num; i++){
      maxSum += arr[i];
    }
  
    tempSum = maxSum;
  
    for(let i = num, len = arr.length; i < len; i++){
      
      let startSlide  = tempSum - arr[i-num];
        let endSlide = arr[i];
  
      tempSum = startSlide + endSlide;
  
      maxSum = Math.max(maxSum, tempSum);
    }
  
    return maxSum;
}