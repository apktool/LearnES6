/**
 * 在子类的构造函数中,只有调用 super 之后才可以使用 this 关键字 ,否则会报错。
 * 这是因为子类实例的构建是基于对父类实例加工,只有 super 方法才能返回父类实例。
 */

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        // this.color = color;
        super(x, y);
        this.color = color;
    }
}

let cp = new ColorPoint(25, 8, 'green');

console.info(cp instanceof ColorPoint);
console.info(cp instanceof Point);
console.info(cp.x);
console.info(cp.y);

console.debug('-------------------');

// Object.getPrototypeOf 方法可以用来从子类上获取父类。

console.info(Object.getPrototypeOf(ColorPoint) === Point);

console.debug('-------------------');

/*
 * 由于 super 指向父类的原型对象,所以定义在父类实例上的方法或属性是无法通过 super 调用的。
 */

class A {
    constructor() {
        this.x = 1;
    }
}

A.prototype.y = 5;

class B extends A {
    constructor() {
        super();
        this.x = 2;
        super.x = 3;
        console.info(super.x); // super.x 被赋值为 3, 等同于对 this.x 赋值为 3。 当读取 super.x 时, 相当于读取的是 A.prototype.x, 所以返回 undefined
        console.info(this.x);
        console.info(super.y);
    }
}

// 上述代码中，x 是父类 A 实例的属性,因此 super.x 就引用不到它。
// 如果属性定义在父类的原型对象上, super 就可以取到。

let b = new B();

console.debug('-------------------');

/*
 * 在大多数浏览器的 ES5 实现之中,每一个对象都有 __proto__ 属性,指向对应的构造函数的 prototype 属性。
 * Class 作为构造函数的语法糖,同时有 prototype 属性和 __proto__ 属性,因此同时存在两条继承链。
 * - 子类的 __proto__ 属性表示构造函数的继承,总是指向父类。
 * - 子类 prototype 属性的 __proto__ 属性表示方法的继承,总是指向父类的 prototype 属性。
 */

console.info(B.__proto__ === A);
console.info(B.prototype.__proto__ === A.prototype);

/*
 * ECMAScript 的原生构造函数大致有下面这些
 * Boolean(), Number(), String(), Array(), Date(), Function(), RegExp(), Error(), Object()
 */
