/**
 * ES6 允许直接写入变量和函数作为对象的属性和方法。
 */

// 对象
let o = {foo: 'foo'};

console.debug('------------------');

// ES6 允许在对象中只写属性名,不写属性值。此时属性值等于属性名所代表的变量。
let foo = 'foo';
let baz = {foo};

console.info(baz);

console.debug('------------------');

// ES6 中方法也可以简写。

let o1 = {
    method() {
        return "Hello";
    }
};

// 上述简写等价于下述的写法

/*
let o1 = {
    method: function () {
        return "Hello";
    }
};
*/

console.info(o1.method());

console.debug('------------------');

// 属性名表达式
// 用表达式作为属性名，将表达式放在方括号内便可

let lastWord = 'last word';

let o2 = {
    'first word': 'hello',
    [lastWord]: 'world'
};

console.info(o2['first word']);
console.info(o2[lastWord]);
console.info(o2['last word']);

console.debug('------------------');

const person = {
    sayName() {
        console.info('Hello!');
    }
};

console.info(person.sayName.name);

console.debug('------------------');

// Object.assign 方法用于将源对象(source)的所有可枚举属性复制到目标对象(target)。

console.info(Object.is('foo', 'foo'));

let target = {a: 1};

let source1 = {b: 2};
let source2 = {c: 3};

console.info(Object.assign(target, source1, source2));

// 对象的每一个属性都具有一个描述对象(Descriptor)，用于控制该属性的行为。
// getOwnPropertyDescriptor, 获取该属性的描述对象。
// getOwnPropertyDescriptors, 返回指定对象所有自身属性(非继承属性)的描述对象。

console.info(Object.getOwnPropertyDescriptor(target, 'a'));
console.info(Object.getOwnPropertyDescriptors(target, 'a'));

console.debug('------------------');

// Object.keys 方法返回 一个数组，成员是参数对象自身的(不含继承的)所有可遍历(enumerable)属性的键名。
// Object.values 方法返回一个数组，成员是参数对象自身的(不含继承的)所有可遍历(enumerable)属性的键值。
// Object.entries 方法返回一个数组，成员是参数对象自身的(不含继承的)所有可遍历(enumerable)属性的键值对数组。

console.info(Object.keys(target));
console.info(Object.values(target));
console.info(Object.entries(target));

/*
 * Null 传导运算符 有 4 种用法 。
 * obj?.prop: 读取对象属性
 * obj?.[expr]: 同上
 * func?.(... args): 函数或对象方法 的调用
 * new C?.(... args): 构造函数的调用
 */