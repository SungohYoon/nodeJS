// 함수선언식
function hello(name) {
    return 'Hello, ' + name;
}

let arrHello = (name) => {
    return 'Hello, ' + name;
};
arrHello = (name) => 'Hello, ' + name;

console.log(arrHello('윤성오'));

// 함수표현식
const message = function (msg) {
    return 'msg : ' + msg;
};

let arrMessage = (msg) => {
    return 'msg : ' + msg;
};

console.log(message('바보'));
function hello(msg) {
    return 'msg, Hello : ' + msg;
}

console.log(hello('윤성오'));
