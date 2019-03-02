/**
 * Symbol 函数前不能使用 new 命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象。
 * 也就是说,由于 Symbol 值不是对象,所以不能添加属性。基本上，它是一种类似于字符串的数据类型 。
 * *
 * JavaScript 语言有7种数据类型，分别是
 * Undefined、Null、Boolean、String、Number、Object、Symbol
 */

let s = Symbol();
console.info(typeof s);

console.debug('------------------');

const obj = {
    toString() {
        return 'abc';
    }
};

const sym = Symbol(obj);
console.info(sym);

console.debug('------------------');

// Symbol 函数的参数只表示对当前 Symbol 值的描述,因此相同 参数的 Symbol 函数的返回值是不相等的 。
// 因此下面的结果，应该是 false

console.info(Symbol('foo') == Symbol('foo'));

console.debug('------------------');

var mySymbol = Symbol();

/*
 * 作为属性名的 Symbol
 */

// 第一种写法
var a = {};
a[mySymbol] = 'Hello';
console.info(a[mySymbol]);

// 第二种写法
var b = {
    [mySymbol]: 'Hello'
};
console.info(b[mySymbol]);

// 第三种写法

var c = {};
Object.defineProperty(c, mySymbol, {value: 'Hello'});
console.info(c[mySymbol]);

console.debug('------------------');

var shapeType = {
    triange: Symbol()
};

function getArea(shape, options) {
    let area = 0;
    switch (shape) {
        case shapeType.triange:
            area = .5 * options.width * options.height;
            break;
    }

    return area;
}

var area = getArea(shapeType.triange, {width: 100, height: 100});
console.info(area);

/*
 * Symbol 作为属性名,该属性不会出现在 for ... in 、 for ... of 循环中,也不会被
 * Object.keys()、Object.getOwnPropertyNames()返回。但它也不是私有属性,有一个
 * Object.getOwnPropertySymbols 方法可以获取指定对象的所有 Symbol 属性名。
 */

var objSymbol = {};

var d = Symbol('a');
var e = Symbol('b');

objSymbol[d] = 'Hello';
objSymbol[e] = 'World';

var objectSymbols = Object.getOwnPropertyDescriptors(objSymbol);
console.info(objectSymbols);

console.debug('------------------');

/*
 * Symbol 接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。
 *   - 如果有，就返回这个 Symbol 值
 *   - 如果没有，就新建井返回一个以该字符串为名称的 Symbol 值。
 */

console.info(Symbol('foo') === Symbol('foo'));
console.info(Symbol.for('foo') === Symbol.for('foo'));
console.info(Symbol.keyFor(d));

/*
 * Symbol.hasInstance;        // 判断该对象是否为某个构造函数的实例
 * Symbol.isConcatSpreadable; // 表示该对象使用 Array.prototype.concat() 时是否可以展开
 * Symbol.species;            // 对象的 Symbol.species 属性指向当前对象的构造函数。创造实例时默认会调用这个方法，即使用这个属性返回的函数当作构造函数来创造新的实例对象 。
 * Symbol.match;              // 对象的 Symbol.match 属性指向一个函数，当执行str.match(myObject)时,如果该属性存在,会调用它返回该方法的返回值。
 * Symbol.replace;            // 对象的 Symbol.replace 属性指向一个方法，当对象被 String.prototype.replace 方法调用时会返回该方法的返回值。
 * Symbol.search;             // 对象的 Symbol.search 属性指向一个方法，当对象被 String.prototype.search 方法调用时会返回该方法的返回值。
 * Symbol.split;              // 对象的 Symbol.split 属性指向一个方法，当对象被 String.prototype.split 方法调用时会返回该方法的返回值。
 * Symbol.iterator;           // 对象的 Symbol.iterator 属性指向该对象的默认遍历器方法。
 * Symbol.toPrimitive;        // 对象的 Symbol.toPrimitive 属性指向 一 个方法,对象被转为原始类型的值时会调用这个方法，返回该对象对应的原始类型值。
 * Symbol.toStringTag;
 * Symbol.unscopables;        // 对象的 Symbol.unscopables 属性指向一个对象,指定了使用 with 关键字时哪些属性会被 with 环境排除。
 */
