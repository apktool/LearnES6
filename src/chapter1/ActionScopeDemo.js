/**
 * ES5 只有全局作用域和函数作用域,没有块级作用域,这导致很多场景不合理。
 * 比如 内层变量可能会覆盖外层变量。
 * 比如 用来计数的循环变量泄露为全局变量。
 * *
 * ES6 借用let实际上为JavaScript新增了块级作用域
 */

// 外层代码块不受内层代码块的影响

function f1() {
    let n = 5;
    if (true) {
        let n = 10;
    }

    console.log(n)
}

// 5
f1()

console.debug("------------------");

function f() {
    console.log("I am outside");
}

(function () {
    if (false) {
        function f() {
            console.log("I am inside!");
        }
    }
    f()
}());
