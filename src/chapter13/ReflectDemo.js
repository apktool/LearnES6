/**
 * Reflect
 * 1. 将 Object 对象的一些明显属于语言内部的方法(比如 Object.defineProperty) 放到 Reflect 对象上。
 * 2. 修改某些 Object 方法的返回结果，让其变得更合理。
 * 3. 让 Object 操作都变成函数行为。
 * 4. Reflect 对象的方法与 Proxy 对象的方法一一对应，只要是 Proxy 对象的方法,就能在 Reflect 对象上找到对应的方法。
 */

console.info('assign' in Object);
console.info(Reflect.has(Object, 'assign'));

console.debug('-----------------');

let myObject = {
    foo: 1,
    bar: 2,

    get baz() {
        return this.foo + this.bar;
    }
};

console.info(Reflect.get(myObject, 'foo'));
console.info(Reflect.get(myObject, 'bar'));
console.info(Reflect.get(myObject, 'baz'));

Reflect.set(myObject, 'bar', 2);
