/**
 * const 声明一个只读的常量。一旦声明，常量的值就不能改变
 * const 声明的常量也不会提升，同样存在暂时性死区，只能在声明后使用
 * const 实际上保证的并不是变量的值不得改动,而是变量指向的那个内存地址不得改动。
 */

const PI = 3.1415926;

console.info(PI);

console.debug("----------------");

// 这个例子中，虽然foo被 const 修饰，但是其中的值仍然能被修改，
// 原因就是因为 const 指向的是变量的内存地址

const foo = {};

foo.prop = 123;
console.info(foo);

foo.prop = 234;
console.info(foo);
