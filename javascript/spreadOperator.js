let array = [1, 2, 3];
let String = 'Hello';

let newArray = [];
for (let value of array) {
    newArray.push(value);
}
for (let value of String) {
    newArray.push(value);
}
console.log(newArray);

let arrayString = [...array, ...String];
console.log(arrayString);
