/**
 * ES6 提供了新的数据结构一-Set 。 它类似于数组,但是成员的值都是唯 一 的,没有重复 。
 */

const s = new Set();

[2, 3, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
    console.log(i);
}

console.debug('---------------');

const set1 = new Set([1, 2, 3, 4, 4]);

set1.forEach(t => console.info(t));

console.debug('---------------');

let set2 = [...set1];

console.info(set2);

console.debug('---------------');

let set3 = set2.map(x => x * 2);

console.info(set3);

let set4 = set3.filter(x => x % 4 === 0);

console.info(set4);

console.debug('---------------');

let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

let union = new Set([...a, ...b]);
console.info(union);

let intersect = new Set([...a].filter(x => b.has(x)));
console.info(intersect);

let difference = new Set([...a].filter(x => !b.has(x)));
console.info(difference);

console.debug('---------------');
/*
 * WeakSet 结构与 Set 类似,也是不重复的值的集合 。 但是,它与 Set 有两个区别。
 * 1. WeakSet 的成员只能是对象,而不能是其他类型的值 。
 * 2. WeakSet 中的对象都是弱引用,即垃坡回收机制不考虑、 WeakSet 对该对象的引用, 也就是说，如果其他对象都不再引用该对象，
 *    那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象是否还存在于 WeakSet 之中 。
 */

const foo = {};
const bar = {};

const ws = new WeakSet();
// ws.add(window);
ws.add(bar);

// console.info(ws.has(window));
console.info(ws.has(foo));

