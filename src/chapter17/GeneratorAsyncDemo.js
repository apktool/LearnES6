/**
 * 传统的编程语言中早有异步编程的解决方案(其实是多任务的解决方案),其中 一种叫作“协程”( coroutine ),意思是多个线程互相协作,完成异步任务。
 *
 * 协程有点像函数,又有点像线程。它的运行流程大致如下 。
 * - 第一步,协程 A 开始执行。
 * - 第二步,协程 A 执行到一半,进入暂停状态,执行权转移到协程 B 中。
 * - 第三步,(一段时间后)协程 B 交还执行权。
 * - 第四步,协程 A 恢复执行。
 *
 * 上面流程的协程 A 就是异步任务,因为它分成两段(或多段)执行。
 *
 * *
 * Thunk函数的诞生是源于一个编译器设计的问题：求值策略，即函数的参数到底应该何时求值。
 * 1. 传值调用(call by value)，即在进入函数体之间，先计算x+5的值，再将这个值（6）传入函数f，例如c语言，这种做法的好处是实现比较简单，但是有可能会造成性能损失。
 * 2. 传名调用(call by name)，即直接将表达式(x+5)传入函数体，只在用到它的时候求值。
 *
 * 编译器的传名调用实现，往往就是将参数放到一个临时函数之中，再将这个临时函数转入函数体，这个临时函数就叫做Thunk函数。
 * 生产环境中的转换器建议使用 Thunkify 模块。
 */

const fs = require('fs');

const Thunk = function (fn) {
    return function (...args) {
        return function (callback) {
            return fn.call(this, ...args, callback);
        }
    };
};

function callback() {
    console.info('---callback something---');
}

let readFileThunk = Thunk(fs.readFile);
readFileThunk('/tmp/a.out')(callback);
