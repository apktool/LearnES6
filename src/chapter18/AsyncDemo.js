/**
 * Async 是 Generator 函数的语法糖 。
 * async 函数的实现原理就是将 Generator 函数和自动执行器包装在一个函数里。
 */

async function f1() {
    return 'Hello world';
}

f1().then(v => console.info(v));

console.debug('---------------');

async function f2() {
    await Promise.reject('Error Info');
}

f2()
    .then(v => console.info(v))
    .catch(e => console.error(e));


/*
 * 普通的 async 函数返回的是一个 Promise 对象,而异步 Generator 函数返回的是一个异步 Iterator 对象。
 * 可以这样理解, async 函数和异步 Generator 函数是封装异步操作的两种方法,都用来达到同一种目的。
 * 区别在于,前者自带执行器,后者通过 for await ... of 执行,或自己编写执行器 。
 */