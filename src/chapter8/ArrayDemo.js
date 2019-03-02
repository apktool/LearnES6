/**
 * 扩展运算符(spread )是三个点( ... ) , 它如同 rest 参数的逆运算 , 将一个数组转为用逗号分隔的参数序列 。
 */

console.info(...[1, 2, 3]);

console.info(1, ...[2, 3, 4], 5);

console.debug('--------------------');

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1.push(...[arr2]);
console.info(arr1);

arr1.push(arr2);
console.info(arr1);

console.debug('--------------------');

/*
 * 合并数组
 */

let arr3 = ['a', 'b'];
let arr4 = ['c'];
let arr5 = ['d', 'e'];

console.info(arr3, arr4, arr5);
console.info([...arr3, ...arr4, ...arr5]);

console.debug('--------------------');

/*
 * 与解构赋值结合
 */

const [first, ...rest] = [1, 2, 3, 4, 5];
console.info(first);
console.info(rest);

console.debug('--------------------');

/*
 * 与字符串结合
 */
console.info(...'Hello world');

console.info([...'Hello world']);

console.debug('--------------------');

/*
 * Array.from 将两类对象转为真正的数组: 类似数组的对象( array-like object)和可遍历(iterable)对象(包括 ES6 新增的数据结构 Set 和 Map)。
 * Array.of 方法用于将一组值转换为数组
 * copyWithin 在当前数组内部将指定位置的成员复制到其他位置(会覆盖原有成员)，然后返回当前数组。
 * find 数组实例的 find 方法用于找出第一个符合条件的数组成员
 * findindex 返回第 一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1 。
 * fill 使用给定值填充 一个数组
 * includes 表示某个数组是否包含给定的值,
 */

let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

let arr6 = Array.from(arrayLike);
console.info(arr6);

let arr7 = Array.of(3, 11, 8);
console.info(arr7);

let arr8 = [1, 2, 3, 4, 5].copyWithin(0, 3);
console.info(arr8);

let arr9 = [5, 4, 3, 2, 1].find((n) => n < 3);
console.info(arr9);

let arr10 = [5, 4, 3, 2, 1].findIndex((n) => n > 3);
console.info(arr10);

let arr11 = ['a', 'b', 'c'].fill(7);
console.info(arr11);

console.debug('==========');

let arr12 = ['a', 'b', 'c'];

for (let index of arr12.keys()) {
    console.info(index);
}

console.debug('---');

for (let elem of arr12.values()) {
    console.info(elem);
}

console.debug('---');

for (let [index, elem] of arr12.entries()) {
    console.info(index, elem);
}

console.debug('---');

console.info(arr12.includes('a'));
