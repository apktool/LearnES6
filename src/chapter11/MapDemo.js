/**
 * JavaScript 的对象( Object )本质上是键值对的集合( Hash 结构),但是只能用字键。这给它的使用带来了很大的限制。
 * 为了解决这个问题, E S6 提供了 Map 数据结构。它类似于对象 ,也是键值对的集合,但是“键”的范围不限于字符串,各种类型的值(包括对象)都可以当作键。
 */

const map = new Map([
    ['name', 'Tom'],
    ['title', 'Author']
]);

console.info(map.size);
console.info(map.has('name'));
console.info(map.get('name'));
console.info(map.has('title'));
console.info(map.get('title'));

console.debug('-------------------');

const items = [
    ['name', 'Tom'],
    ['title', 'Author']
];

const mapItems = new Map();

items.forEach(
    ([key, value]) => mapItems.set(key, value)
);

console.info(mapItems);

console.debug('-------------------');

// Map 转为数组

const myMap = new Map();

myMap.set(true, 7);
myMap.set({foo: 3}, ['abc']);

console.info([...myMap]);

console.debug('-------------------');

// 数组转为 Map

const arrayToMap = new Map([[true, 7], [{foo: 3}, ['abc']]]);
console.info(arrayToMap);

/*
 * WeakMap 结构与 Map 结构类似 ,也用 于生成键值对的集合。
 * 1. WeakMap 可以使用 set 方法添加成员
 * 2. WeakMap 也可以接受一个数组,作为构造函数的参数
 *
 * WeakMap 与 Map 的区别有以下两点 。
 * 1. WeakMap 只接受对象作为键名( null 除外),不接受其他类型的值作为键名。
 * 2. WeakMap 的键名所指向的对象不计入垃圾回收机制。
 *
 * WeakMap 键名所引用的对象都是弱引用,即垃圾回收机制不将该引用考虑在内。
 * 因此 ,只要所引用的对象的其他引用都被清除 , 垃圾回收机制就会释放该对象所占用的内存。
 * 也就是说, 一旦不再需要, Weak.Map 里面的键名对象和所对应的键值对会自动消失,不用手动删除引用 。
 */

const wm1 = new WeakMap();
const key = {foo: 1};
wm1.set(key, 2);

console.info(wm1.get(key));
