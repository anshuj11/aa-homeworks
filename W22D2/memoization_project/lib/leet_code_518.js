// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

var change = function(amount, coins, memo = {}) {
  key = amount + coins;
  if (key in memo) return memo[amount];
  if (amount === 0) return 1;
  let total = 0;
  coins.forEach(c => {
    n = 0;
    while (c * n <= amount) {
      total += change(amount - c * n, coins.slice(1), memo);
      n++;
    }
  });
  memo[key] = total;
  return total;
};

console.log(change(5, [1, 2, 5], (memo = {})));
