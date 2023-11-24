let nums = [50, 15, 39, 535, 6, 804];
let total = nums.reduce(function (total, currentValue) {
    return total + currentValue;
}, 0);

console.log(total);
