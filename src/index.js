// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    function countCurrentCoins(coin) {
        const amount = Math.floor(currency / coins[coin]);
        if (amount > 0) {
            currency = currency % coins[coin];
            res[coin] = amount;
        }
    }

    let res = {}
    const coins = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1
    }
    if (currency > 0) {
        if (currency > 10000) {
            res.error = "You are rich, my friend! We don't have so much coins for exchange";
        } else {
            countCurrentCoins("H");
            countCurrentCoins("Q");
            countCurrentCoins("D");
            countCurrentCoins("N");
            countCurrentCoins("P");
        }
    }

    return res;
}
