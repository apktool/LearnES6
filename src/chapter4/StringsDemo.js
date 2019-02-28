/**
 * JavaScript 允许采用\ uxxxx 形式表示一个字符,其中 xx xx 表示字符的 Unicode 码点 。
 */

/*
 * String's extend
 */

let a = "\u{41}\u{42}\u{43}";
console.info(a);

let hello = 123;
console.info(hello);
// console.info(hell\u{6f});

console.debug("---------------");

for (let codePoint of 'foo') {
    console.info(codePoint);
}

console.debug("---------------");

let text = String.fromCodePoint(0x20BB7);

for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}

for (let i of text) {
    console.log(i);
}

console.debug("---------------");

let s = 'Hello world!';
console.info(s.startsWith('Hello'));
console.info(s.endsWith('!'));
console.info(s.includes('o'));
console.info(s.repeat(2));
console.info(s.padStart(20, ' '));
console.info(s.padEnd(20, '!'));

console.debug("---------------");

/*
 * String template
 * 模板字符串( template string )是增强版的字符串，用反引号(、)标识。它可以当作普通字符串使用,也可以用来定义多行字符串,或者在字符串中嵌入变量。
 */

var template = `
<ul>
  <% for(var i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;

function compile(template) {
    var evalExpr = /<%=(.+?)%>/g;
    var expr = /<%([\s\S]+?)%>/g;

    template = template
        .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
        .replace(expr, '`); \n $1 \n  echo(`');

    template = 'echo(`' + template + '`);';

    return `(function parse(data){
             var output = "";
             function echo(html){
                 output += html;
             }

             ${template}

             return output;
         })`;
}

var parse = eval(compile(template));
let b = parse({supplies: ["broom", "mop", "cleaner"]});
console.info(b);

// <ul>
//     <li>broom</li>
//     <li>mop</li>
//     <li>cleaner</li>
// </ul>


/*
 * tagged template
 */

let c = 5;
let d = 10;

function tag(s, v1, v2) {
    console.info(s[0]);
    console.info(s[1]);
    console.info(s[2]);
    console.info(v1);
    console.info(v2);

    return "OK";
}

// let e = tag(['Hello ', ' world', ''], 15, 50)
let e = tag`Hello ${c + d} world ${c * d}`;
console.info(e);
