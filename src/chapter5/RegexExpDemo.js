/**
 * 字符串对象共有 4 个方法可以使用正则表达式 : match ()、 replace ()、 search ()和 split ()。
 */

var regex1 = new RegExp(/abc/ig, 'i').flags;

/*
 * Unicode 字符表示法
 */

var a = /\u{61}/.test('a');
console.log(a);

var b = /\u{61}/u.test('a');
console.log(b);

console.debug("----------------");

// 量词

var c = /a{2}/.test('aa');
console.log(c);

var d = /吉{2}/u.test('吉吉');
console.log(d);

console.debug("----------------");

/*
 * i 修饰符
 * 识别编码不同，但是字型很近的字符串
 * 如,\ u004B 与\ u212A 都是大写的 K。
 */

var e = /[a-z]/i.test('\u212A');
console.log(e);

var f = /[a-z]/iu.test('\u212A');
console.log(f);

console.debug("----------------");

/*
 * y 修饰符，粘连(sticky)修饰符
 * y 修饰符的作用与 g 修饰符类似，也是全局匹配，后一次匹配都从上一次匹配成功的下一个位置开始。
 * 不同之处在于，g修饰符只要剩余位置中存在匹配就行，而 y 修饰符会确保匹配必须从剩余的第一个位置开始，这也就是“粘连”的涵义。
 */

var s = "aaa_aa_a";

var r1 = /a+/g;
var r2 = /a+/y;

console.log(r1.exec(s));
console.log(r2.exec(s));

console.log(r1.exec(s));
console.log(r2.exec(s));

console.debug("----------------");

/*
 * flags 属性
 * ES6 为正则表达式新增了 flags 属性,会返回正则表达式的修饰符。
 */

var g = /abc/ig.flags;
console.log(g);

console.debug("----------------");

/*
 * 解构赋值和替换
 */

let {groups: {one, two}} = /^(?<one>.*):(?<two>.*)$/u.exec('foo:bar');
console.info(one);
console.info(two);

console.debug("----------------");
/*
 * 引用
 */

const RE_TWICE = /^(?<word>[a-z]+)!\k<word>$/;
var h = RE_TWICE.test('abc!abc');
console.info(h);

var i = RE_TWICE.test('abc!ab');
console.info(i);

/**
 * JavaScript 语言的正则表达式只支持先行断言( lookahead )和先行否定断言( negative lookahead ),
 * 不支持后行断言( lookbehind )和后行否定断言( negative lookbehind )。
 */