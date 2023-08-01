/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfitDay = 0
  let maxProfit = 0
  let buyPrice = prices[0]

  for(let i=1; i<prices.length; i++){
    let sellPrice = prices[i]
    let tempProfit = sellPrice - buyPrice

    if(tempProfit > maxProfit){
      maxProfit = tempProfit
      maxProfitDay = i
    }

    if(sellPrice < buyPrice){
      buyPrice = sellPrice
    }

  }
  return maxProfitDay
};

console.log(maxProfit([1,2]))

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.