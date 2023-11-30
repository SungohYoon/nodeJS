let names = ['Hong', 'Kang', 'Adward', 'Lee'];
names.sort();
console.log(names);
names.reverse();
console.log(names);

let nums = [40, 100, 1, 5, 25, 10];
nums.sort();
console.log(nums);
nums.sort((a, b) => {
    return a - b;
});
console.log(nums);
