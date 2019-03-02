/**
 * 参数默认值不是传值的,而是每次都重新计算默认值表达式的值。也就是说,参数默认值是惰性求值的。
 */


function log(x, y = 'world') {
    console.info(x, y);
}

log('Hello');
log('Hello', 'JavaScript');
log('Hello', '');

console.debug('------------------------');

function Point(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

var p = new Point();
console.info(p);

console.debug('------------------------');

let tmp = 100;

// 每次调用foo都会重新计算x+1

function foo(p = tmp + 1) {
    console.info(p);
}

foo();

tmp = 101;
foo();

console.debug('------------------------');

// 对象的解构赋值

function fetch1(url, {method = 'GET'}) {
    console.log(method);
}

fetch1('http://baidu.com', {});

// fetch1('http://baidu.com'); // 会报错

function fetch2(url, {method = 'GET'} = {}) {
    console.log(method);
}

fetch2('http://baidu.com', {});
fetch2('http://baidu.com');

console.debug('------------------------');

function fun1({x = 0, y = 0} = {}) {
    return [x, y];
}

function fun2({x, y} = {x: 0, y: 0}) {
    return [x, y];
}

console.info(fun1());
console.info(fun2());

console.info(fun1({x: 3, y: 8}));
console.info(fun2({x: 3, y: 8}));

console.info(fun1({x: 3}));
console.info(fun2({x: 3}));

console.info(fun1({}));
console.info(fun2({}));

console.info(fun1({z: 3}));
console.info(fun2({z: 3}));

console.debug('------------------------');

/*
 * length 属性的含义是该函数预期传入的参数个数
 * 指定了默认值以后,函数的 length 属性将返回没有指定默认值的参数个数。
 *
 * 函数的 name 属性返回该函数的函数名。
 */

function functionNL(a, b, c = 5) {
    console.info(a, b, c);
}

console.info(functionNL.name);
console.info(functionNL.length);

console.debug('------------------------');

/*
 * rest 参数，形式为 ...变量名
 * rest 参数之后不能再有其他参数(即只能是最后一个参数),否则会报错 。
 */

function add(...values) {
    let sum = 0;

    for (let item of values) {
        sum += item;
    }

    return sum;
}

console.info(add(2, 3, 4));

console.debug('------------------------');
/*
 * ES6 允许使用“箭头”(=>)定义函数。
 *
 * 箭头函数有以下几个使用注意事项。
 * 1. 函数体内的 this 对象就是定义时所在的对象，而不是使用时所在的对象 。
 * 2. 不可以当作构造函数。 也就是说，不可以使用 new 命令， 否则会抛出一个错误 。
 * 3. 不可以使用 arguments 对象，该对象在函数体内不存在。如果要用，可以用 rest 代替。
 * 4. 不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数。
 */

var f1 = v => v;
console.info(f1(2010));

// 上述函数的定义等价于下述函数的定义
//
// var f = function(v) {
//     return v;
// };

var f2 = () => 2011;
console.info(f2());

var f3 = (num1, num2) => num1 + num2;
console.info(f3(1, 2));

var f4 = [1, 2, 3].map(x => x * x);
console.info(f4);

var f5 = [1, 5, 2].sort((a, b) => a - b);
console.info(f5);

console.debug('------------------------');
/*
 * 绑定 this
 *
 * 函数绑定运算符是井排的双冒号(::)，双冒号左边是一个对象，右边是一个函数 。
 * 该运算符会自动将左边的对象作为上下文环境(即 this 对象〉绑定到右边的函数上。
 */

/*
 * 尾调用(Tai l Call)是函数式编程的 一个重要概念
 */

function addOne(a) {
    let one = 1;

    function inner(b) {
        return b + one;
    }

    return inner(a);
}

console.info(addOne(5));

/*
 * 尾递归
 * 函数调用自身称为递归。如果尾调用自身就称为尾递归。
 */

function factorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.info(factorial(5));

console.debug('------------------------');

/*
 * 柯里化( currying ),意思是将多参数的函数转换成单参数的形式。
 */

function addTwo(a) {
    return function two(b = 5) {
        return a + b;
    }
}

console.info(addTwo(1)(2));
console.info(addTwo(1)());