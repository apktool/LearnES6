/**
 * Promise 是异步编程的一种解决方案,比传统的解决方案一一回调函数和事件一一更合理且更强大。
 * *
 * Promise 对象有以下两个特点 。
 * 1. 对象的状态不受外界影响。Promise 对象代表一个异步操作：
 *    - 有 3 种状态: Pending (进行中)、 Fulfilled (己成功)和 Rejected (己失败)。
 *    - 只有异步操作的结果可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
 *      这也是“ Promise ”这个名字的由来,它在英语中意思就是“承诺”,表示其他手段无法改变。
 *
 * 2. 一旦状态改变就不会再变,任何时候都可以得到这个结果。
 *    Promise 对象的状态改变只有两种可能:
 *    - 从 Pending 变为 Fulfilled
 *    - 从 Pending 变为 Rejected。
 *
 *    只要这两种情况发生,状态就凝固了,不会再变,而是一直保持这个结果,这时就称为 Resolved (己定型)。
 *    就算改变己经发生,再对 Promise 对象添加回调函数,也会立即得到这个结果。
 *    这与事件 CEvent )完全不同。事件的特点是,如果错过了它,再去监听是得不到结果的 。
 */

// 当runAsync执行完成之后，通过then，回调resolve这个方法
// resolve | Pending => Fulfilled
// reject  | Pending => Rejected

function runAsync() {
    let p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.info('执行完成');
            resolve('随便什么数据');
        }, 2000);
    });
    return p;
}

runAsync().then(function (data) {
    console.info(data);
});

console.debug('---------------------------');

function runAsync1() {
    let p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.info('异步任务1执行完成');
            resolve('随便1号数据');
        }, 2000);
    });
    return p;
}

function runAsync2() {
    let p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.info('异步任务2执行完成');
            resolve('随便2号数据');
        }, 2000);
    });
    return p;
}

function runAsync3() {
    let p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.info('异步任务3执行完成');
            resolve('随便3号数据');
        }, 2000);
    });
    return p;
}

runAsync1()
    .then(function (data) {
        console.info(data);
        return runAsync2();
    })
    .then(function (data) {
        console.info(data);
        return runAsync3();
    })
    .then(function (data) {
        console.info(data);
    });

console.debug('---------------------------');

function getNumber() {
    let p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            var num = Math.ceil(Math.random() * 10); //生成1-10的随机数
            if (num <= 5) {
                resolve(num);
            } else {
                reject('数字太大了');
            }
        }, 2000);
    });
    return p;
}

getNumber()
    .then(
        function (data) {
            console.log('resolved');
            console.log(data);
        },
        function (reason, data) {
            console.log('rejected');
            console.log(reason);
        }
    )
    .catch(function (reason) {
        console.log('rejected');
        console.log(reason);
    });
