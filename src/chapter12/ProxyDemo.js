/**
 * Proxy 用于修改某些操作的默认行为,等同于在语言层面做出修改,所以属于一种"元编程"(meta programming)，即对编程语言进行编程。
 * *
 * 与重写类方法的思想类似
 */

// Proxy 实际上重载( overload )了点运算符,即用自己的定义覆盖了语言的原始定义 。
// ES 6 原生提供 Proxy 构造函数,用于生成 Proxy 实例。

var obj = new Proxy({}, {
    get: function (target, key, receiver) {
        console.info(`getting ${key}!`);
        return Reflect.get(target, key, receiver);
    },

    set: function (target, key, value, receiver) {
        console.info(`setting ${key}!`);
        return Reflect.set(target, key, value, receiver);
    }
});

obj.count = 1;
obj.count;

console.debug('-------------------------');

