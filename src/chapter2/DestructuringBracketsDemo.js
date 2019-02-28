/**
 * 变量的解构赋值
 * 括号相关
 */

/*
 * 解构赋值虽然很方便,但是解析起来并不容易。
 *
 * 不能使用圆括号的情况
 * 1. 变量声明语句
 *    let [(a)] = [1]
 *    let {x: (c)} = {}
 *    let ({x: c}) = {}
 * 2. 函数参数
 *    function f([(z)]) { return z; }
 *    function f([z, (x)]) {return x;}
 * 3. 赋值语句的模式
 *    ({p: a}) = {p: 42}
 *    ([a]) = [5];
 *
 *  可以使用圆括号的情况只有 一种 : 赋值语句的非模式部分可以使用圆括号。
 *    [(b)] = [3]
 *    ({p: (d)} = {})
 *    [(parseInt.prop)] = 3
 */

// 从函数返回多个值

function example() {
    return [1, 2, 3];
}

let [a, b, c] = example();

console.info([a, b, c]);

console.debug("------------------");

// 函数参数的定义

function f1([x, y, z]) {
    console.info([x, y, z]);
}

f1([1, 2, 3]);

console.debug("------------------");

function f2({x, y, z}) {
    console.info(x, y, z)
}

f2({z: 3, y: 2, x: 1});

console.debug("------------------");

// 解析json

let jsonData = {
    id: 42,
    status: 'OK',
    data: [867, 5309]
};

let {id, status, data: number} = jsonData;
console.info(id, status, number);

console.debug("------------------");

// 遍历Map结构

let map = new Map();
map.set("first", "hello");
map.set("second", "world");

for (let [key, value] of map) {
    console.log(key + " is " + value);
}

for (let [key] of map) {
    console.log(key);
}

console.info("----------");

for (let [, value] of map) {
    console.log(value)
}