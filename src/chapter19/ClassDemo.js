/**
 * JavaScript 语言的传统方法是通过构造函数定义井生成新对象。
 * ES6 提供了更接近传统语言的写法,引入了 Class (类)这个概念作为对象的模板。通过 class 关键字可以定义类。
 */

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

// ES6 的类完全可以看作构造函数的另 一种写法 。
// 类的数据类型就是函数,类本身就指向构造函数 。
console.info(typeof Point);
console.info(Point === Point.prototype.constructor);

console.debug('-----------------');

class MyClass {
    constructor() {

    }

    get prop() {
        return 'getter';
    }

    set prop(value) {
        console.info('setter: ' + value);
    }
}

let inst = new MyClass();
inst.prop = 123;
console.info(inst.prop);

console.debug('-----------------');

class CustomHTMLElement {
    constructor(element) {
        this.element = element;
    }

    get html() {
        return this.element.innerHTML;
    }

    set html(value) {
        this.element.innerHTML = value;
    }
}

let descriptor = Object.getOwnPropertyDescriptor(
    CustomHTMLElement.prototype, 'html'
);

console.info('get' in descriptor);
console.info('set' in descriptor);

console.debug('-----------------');

// 如果某个方法之前加上星号(*),就表示该方法是一个 Generator 函数。

class Foo {
    constructor(...args) {
        this.args = args;
    }

    * [Symbol.iterator]() {
        for (let arg of this.args) {
            yield arg;
        }
    }
}

for (let x of new Foo('hello', 'world')) {
    console.info(x);
}

console.debug('-----------------');

class Bar {
    static classMethod() {
        return 'hello class method';
    }
}

console.info(Bar.classMethod());

console.debug('-----------------');

/*
 * ES6 为 new 命令引入了 new.target 属性,(在构造函数中)返回 new 命令所作用的构造函数。
 * 如果构造函数不是通过 new 命令调用的,那么 new.target 会返回 undefined,
 * 因此这个属性可用于确定构造函数是怎么调用的 。
 */

class Rectangle {
    constructor(length, width) {
        console.info(new.target === Rectangle);
        this.length = length;
        this.width = width;
    }
}

let rectangle = new Rectangle(3, 4);
console.info(rectangle.length, rectangle.width);
