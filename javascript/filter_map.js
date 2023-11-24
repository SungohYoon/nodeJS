let words = ['spray', 'limit', 'elite', 'exuberant', 'paresent'];

let result = words.filter(function (word, idx, arry) {
    console.log(word, idx, arry);
});

let resultOne = words.filter(function (word, idx, arry) {
    return word.length > 6;
});
console.log(words, resultOne);

let users = [
    {
        id: 100,
        name: 'Hong',
    },
    {
        id: 200,
        name: 'Kang',
    },
    {
        id: 300,
        name: 'Lee',
    },
];

result = users.map(function (user) {
    return {
        id: user.id,
        name: user.name,
        gerade: user.id == 200 ? 'VIP' : '일반',
    };
});

console.log(result);
