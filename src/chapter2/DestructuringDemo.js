/**
 * 变量的解构赋值
 */

/*
 * 数组的解构赋值
 */

// 完全解构
let [a, b, c] = [1, 2, 3];

console.info(a);
console.info(b);
console.info(c);

console.debug("----------------------");

let [, , third] = ["foo", "bar", "baz"];

console.info(third);

console.debug("----------------------");

let [head, ...tail] = [1, 2, 3, 4];

console.info(head);
console.info(tail);

console.debug("----------------------");

// 不完全解构, 等号左边的模式只匹配一 部分的等号右边的数组

let [x, y] = [1, 2, 3];

console.info(x);
console.info(y);

console.debug("----------------------");

// 解构赋值允许指定默认值

let [foo = true] = [];

console.info(foo);

console.debug("----------------------");

let [xa, ya = 'ya'] = ['xa'];

console.info(xa);
console.info(ya);

console.debug("----------------------");

/*
 * 对象的解构赋值
 */

let {fooa, bara} = {fooa: "aaa", bara: "bbb"};

console.info(fooa);
console.info(bara);

console.debug("----------------------");

// 对象的解构赋值是下面形式的简写

let {foob: foob, barb: barb} = {foob: "aaa", barb: "bbb"};

console.info(foob);
console.info(barb);

console.debug("----------------------");

let obj = {
    p: ['Hello', {yb: 'World'}]
};

let {p: [xb, {yb}]} = obj;

console.info(xb + ' ' + yb);

console.debug("----------------------");

/*
 * 字待串的解构赋值
 */

const [a1, b1, c1, d1, e1] = 'hello';

console.info(a1 + ' ' + b1 + ' ' + c1 + ' ' + d1 + ' ' + e1);

console.debug("----------------------");

/*
 * 数值和布尔值的解构赋值
 */

let {toString: s1} = 123;

console.info(s1 === Number.prototype.toString);

let {toString: s2} = true;
console.info(s2 === Boolean.prototype.toString);

console.debug("----------------------");

/*
 * 函数参数的解构赋值
 */

function move({x = 0, y = 0}) {
    return [x, y];
}

let m = move({x: 3, y: 8});
console.info(m);

m = move({x: 3});
console.info(m);

m = move({});
console.info(m);
