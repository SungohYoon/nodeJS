function printMsg(msg = '메세지를 입력해주세요.') {
    console.log(msg);
}

printMsg('Have A Nice Day');
printMsg();

function sum(x, y, ...args) {
    let result = x + y;
    console.log(args.length);
    for (let num of args) {
        result += num;
    }
    return result;
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
