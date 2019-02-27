
/**
 * ES6 声明变量的 6 种方法
 * var, function, let, const, import, class
 *
 * 其中 var 和 function 是 ES5 中仅有的两种声明方法
 */

/**
 * 顶层对象在浏览器环境中指的是 window 对象,在 Node 环境中指的是 global 对象。
 *
 * ES6中 var 命令和 function 命令声明的全局变量依旧是顶层对象的属性;
 * 另一方面规定, let 命令、 const 命令、 class 命令声明的全局变量不属于顶层对象的属性。
 */

// window.a = 1;
// console.info(a)

/**
 * ES5 的顶层对象本身也是一 个问题,因为它在各种实现中是不统一的。
 * - 在浏览器中,顶层对象是 window, 但 Node 和 Web Worker 没有 window 。
 * - 在浏览器和 Web Worker 中, self 也指向顶层对象,但是 Node 没有 self 。
 * - 在 Node 中,顶层对象是 global ,但其他环境都不支持。
 *
 * 同 一段代码为了能够在各种环境中都取到顶层对象,目前一般是使用 this 变量,但是也有局限性。
 * - 在全局环境中, this 会返回顶层对象。但是,在 Node 模块和 ES6 模块中, this 返回的是当前模块。
 * - 对于函数中的 this ,如果函数不是作为对象的方法运行,而是单纯作为函数运行, this 会指向顶层对象。但是,严格模式下, this 会返回 undefined 。
 * - 不管是严格模式,还是普通模式, new Function (’ return this ’)()总会返回全局对象。但是,如果浏览器用了 CSP (Content Security Policy,内容安全政策),那么 eval, new Function 这些方法都可能无法使用。
 */