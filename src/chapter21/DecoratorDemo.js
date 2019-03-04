/**
 * 修饰器( Decorator )是一个函数 , 用来修改类的行为 。
 * ES2017 引入了修饰器这种功能, 目前 Babel 转码器己经支持。
 *
 * 修饰器只能用于类和类的方法,不能用于函数,因为存在函数提升 。
 */

// @log 修饰器的作用就是在执行原始的操作之前执行一次 console.log。

class Math {
    @log
    add(a, b) {
        return a + b;
    }
}

function log(target, name, descriptor) {
    let oldValue = descriptor.value;

    descriptor.value = function () {
        console.log(`Calling "#{name}" with, `, arguments);

        return oldValue.apply(null, arguments);
    };

    return descriptor;
}

const math = new Math();
math.add(2, 4);