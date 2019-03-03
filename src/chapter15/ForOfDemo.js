/**
 * 一个数据结构只要部署了 Symbol.iterator 属性,就被视为具有 iterator 接口,就可以用 for ... of 循环遍历它的成员。
 * 也就是说 , for . .. of 循环内部调用的是数据结构的 Symbol.iterator 方法。
 */

const arr = ['red', 'green', 'blue'];

for (let v of arr) {
    console.info(v);
}

console.debug('----------------------');

arr.forEach(function (elem, index) {
    console.info(index, elem);
});

console.debug('----------------------');

const obj = {};
obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr);

for (let v of obj) {
    console.info(v);
}

console.debug('----------------------');

const engines = new Set(['Gecko', 'Trident', 'Webkit', 'Webkit']);

for (let e of engines) {
    console.info(e);
}

console.debug('----------------------');

const map = new Map().set('a', 1).set('b', 2).set('c', 3);

for (let pair of map) {
    console.info(pair);
}
