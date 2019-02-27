for (let i = 0; i < 3; i++) {
    console.log(i);
}


console.debug("-----------")

var a = [];

for (var i = 0; i < 3; i++) {
    a[i] = function () {
        console.info(i);
    }
}

a[6];

console.debug("-----------")

/**
 * var 关键字会导致变量提升，即变量可以在声明之前使用,值为 undefined
 * let 关键字则不会
 */
console.log(foo);
var foo = 2;

let bar = 2;
console.log(bar);

console.debug("-----------")

/**
 * 暂时性死区(TDZ, temporal dead zone)
 * 只要块级作用域内存在 let 命令,它所声明的变量就“绑定”( binding )这个区域,不再受外部的影响。
 * *
 * ES6 规定暂时性死区和 let, const 语句不出现变量提升
 */

var tmp = 123;

if (true) {
    // 这里 tmp 变量会受到 let tmp 的影响，前面的声明并定义的 tmp 会”不可用“
    // tmp = 'abc';
    let tmp;
}

/*
if (module === require.main) {
    console.log(a);
    console.log(b);
}
*/
