/**
 * Time Complexity: O(n)
 * @param {number[]} prices
 * @return {number}
 */
export default function maxProfit(prices){
	if(!prices || !prices.length) return 0;

	let total = 0, i = 1, len = prices.length;
	while(i < len) {
		//1
		if(prices[i] - prices[i - 1] > 0){
			//2
			total += prices[i] - prices[i - 1];
		}
		i++;
	}
	return total;
}

/**
 * Explanation:
 * 1. Get the difference between the current price and its next price. If the sum is negative, that means
 *    there's no profit to be made, so we move on.
 *    i.e [7,1] -> 1-7 === -6 so no profit
 *    i.e [1,5] -> 5-1 === 4 so profit
 *    i.e [5,3] -> 3-5 === -2 so no profit
 * 
 * 2. When there are profits, we simply add the diffence to the total.
 * 
 */