/**
 * Time Complexity: O(n)
 * @param {number[]} prices
 * @return {number}
 */
export default function maxProfit(prices){
	if(!prices || !prices.length) return 0;

	let len = prices.length, i = 0, j = i+1, profit = [];

	while(j < len){
		//1
		if(prices[i] > prices[j]){
			i++;
			j++;
			continue;
		}
        //2
		if(prices[j] < prices[j+1]) {
			j++;
			continue;
		}
		//3
		profit.push(prices[j] - prices[i]);
		i = j+1;
		j = i+1;
	}

	return profit.reduce((acc, val) => acc + val, 0);
}

/**
 * Explanation:
 * 1. Use the "Multiple pointer" technique and compare a price with its next price i.e: 7 & 1.
 *    When 'i' is greater than 'j', just increment both pointers and skip the rest of the code.
 * 
 * 2. At this point 'i' is less than 'j', so now you want to compare 'j' with its next price i.e: 5 & 3.
 *    If 'j' is less than 'j+1', then only increment j and skip the rest of the code.
 * 
 * 3. Calculate and keep track of all profits made by storing them in an array. Then update 'i' to be 
 *    the next element of the current 'j' pointer and 'j' to be the next element of the new 'i' pointer.
 */