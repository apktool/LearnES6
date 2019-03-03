/**
 * Generator 函数是 ES6 提供的 一种异步编程解决方案,语法行为与传统函数完全不同
 *
 * 执行 Generator 函数会返回一个遍历器对象。也就是说, Generator 函数除了是状态机,还是
 * 个遍历器对象生成函数。返回的遍历器对象可以依次遍历 Generator 函数内部的每一个状态。
 */

function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

let hw = helloWorldGenerator();
console.info(hw.next());
console.info(hw.next());
console.info(hw.next());

console.debug('------------------');

let myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};

console.info([...myIterable]);

console.debug('------------------');

// for .. . of 循环可以自动遍历 Generator 函数生成的 Iterator 对象 ,且此时不再需要调用 next 方法。

function* tmp() {
    yield 1;
    yield 2;
    yield 3;
}

for (let v of tmp()) {
    console.info(v);
}

// 除了 for ... of 循环,扩展运算符(...)、解构赋值和 Array.from 方法内部调用的都是遍历器接口。
// 这意味着,它们都可以将 Generator 函数返回的 Iterator 对象作为参数。

console.debug('------------------');

function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

let g = gen();

console.info(g.next());
console.info(g.return('foo')); //Generator函数的遍历中止
console.info(g.next());

console.debug('------------------');

/**
 * yield *语句,用来在一个 Generator 函数里面执行另 一个 Generator 函数。
 */

function* foo() {
    yield 'a';
    yield 'b';
}

function* bar() {
    yield 'x';
    yield* foo();
    yield 'y';
}

let br = bar();

console.info(br.next());
console.info(br.next());
console.info(br.next());
console.info(br.next());
