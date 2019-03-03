/**
 * JavaScript集合: Array, Object, Map, Set
 *
 * Iterator 的作用有 3 个:
 * - 为各种数据结构提供一个统一的、简便的访问接口
 * - 是使得数据结构的成员能够按某种次序排列
 * - Iterator 接口主要供 for ... of 消费
 *
 * 原生具备Iterator接口的数据结构如下
 * Array, Map, Set, String, TypedArray, 函数的arguments对象，NodeList对象
 */

let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

console.info(iter.next());
console.info(iter.next());
console.info(iter.next());

console.debug('---------------------');

let s = 'hi';
let iterator = s[Symbol.iterator]();

console.info(iterator.next());
console.info(iterator.next());
