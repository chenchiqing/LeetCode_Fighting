var maxProfit = function(prices) {
    let res = 0;
    for(let i = 1; i < prices.length; i ++) {
        res += Math.max(0, prices[i] - prices[i - 1]);
    }
    return res;
};
console.log(maxProfit([0,1,2,3,4,5]));