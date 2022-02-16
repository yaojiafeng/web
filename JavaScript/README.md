## 目录
- [防抖](#防抖)
- [节流](#节流)
- [类型转换](#类型转换)
- [自定义事件](#自定义事件)
- [promise实现](#promise实现)
- [关于setInterval和setTImeout中的this指向问题](#关于setInterval和setTImeout中的this指向问题)
- [bind实现](#bind实现)
- [map实现](#map实现)
- [异步执行顺序](#异步执行顺序)
- [正则实现千分位](#正则实现千分位)
- [EventLoop](#EventLoop)
- [js实现new](#实现new)
### 防抖
- 函数执行过一次后，在等待某时间段内不能再次执行。
- 在等待时间内触发此函数，则重新计算等待时间
```js
function debounce(fn,wait){
    var timer = null;
    return function(){
        timer && clearTimeout(timer);
        timer = setTimeout(fn,wait);
    }
}
function doSomeThing(){
   console.log('do');
}
var callback = debounce(doSomeThing,5000);
someEle.onclick = callback;
async function a() {
    let p = await new Promise(resolve => setTimeout(() => {
        console.log(1)
        resolve(2)
    }, 0))
    console.log(p)
}
a()



function p() {
    return new Promise(function (resolve) {
        console.log(`promise 1`)
        resolve(`promise 2`)
    })
}
async function a() {
    console.log(`async 1`)
    await b()
    console.log('async 3')
    return 'async 4'
}
async function b() {
    console.log('async 2')
}
p().then(console.log)
a().then(console.log)


async function asyncReadFile(args) {
    const f1 = await readFile('/etc/fstab')
    console.log(f1.toString());
}

// 等同于

function asyncReadFile(args) {
    return spawn(function* () {
        const f1 = yield readFile('/etc/fstab')
        console.log(f1.toString());
    })
}

asyncReadFile()

function spawn(genF) {
    return new Promise(function (resolve, reject) {
        const gen = genF()

        function step(nextF) {
            let next
            try {
                next = nextF()
            } catch (e) {
                return reject(e)
            }
            if (next.done) {
                return resolve(next.value)
            }
            Promise.resolve(next.value).then(function (v) {
                step(function () {
                    return gen.next(v)
                })
            }, function (e) {
                step(function () {
                    return gen.throw(e)
                })
            })
        }
        step(function () {
            return gen.next(undefined)
        })
    })
}

function* helloWorldGenerator() {
    yield 'hello'
    yield 'world'
    return 'ending'
}
var hw = helloWorldGenerator()
hw.next()
// { value: 'hello', done: false }
hw.next()
// { value: 'world', done: false }
hw.next()
// { value: 'ending', done: true }
hw.next()
// { value: undefined, done: true }

function b() {
    return new Promise((resolve, reject) => {
        throw new Error('b error')
    })
}
const a = () => {
    b().then(() => c());
};



async function getLessionJson() {
    // ...
    for (let i = 0; i < lessonjsonUrls.length; i++) {
        try {
            let response = await myRequest(lessonjsonUrls[i].url)
            lessonjson.push(response.lesson ? response.lesson : response)
            errN = 0;
        } catch (errData) {
            errN++;
            if (errN < N) {
                i--
            } else {
                errN = 0;
                console.log('请求lessonjson失败', errData)
                lessonjson.push(errData)
            }
        }
    }
    // ...
}

async function getLessionJson() {
    // ...
    for (let i = 0; i < lessonjsonUrls.length; i++) {
        try {
            promise[i] = myRequest(lessonjsonUrls[i].url)
            errN = 0;
        } catch (errData) {
            errN++;
            if (errN < N) {
                i--
            } else {
                errN = 0;
                console.log('请求lessonjson失败', errData)
                promise[i] = errData
            }
        }
    }
    let results = await Promise.all(promises)
    results.forEach(item => {
        lessonjson.push(item.lesson ? item.lesson : item)
    })
    // ...
}

// 花实例
var Flower = function(){};
var xiaoming = {
    // 送花的方法，参数为送花目标
    sendFlower: function( target ){
        var flower = new Flower();
        target.receiveFlower( flower );
    }
};
// 女神
var A = {
    receiveFlower: function( flower ){
        console.log( '收到花 ' + flower );
    }
};
// 小明开始送花
xiaoming.sendFlower( A );




// 花的实例
var Flower = function(){};
var xiaoming = {
    sendFlower: function( target ){
        var flower = new Flower();
        target.receiveFlower( flower );
    }
};
// 女神闺蜜
var B = {
    // 小明把花送给了女神闺蜜，由她转送
    receiveFlower: function( flower ){
        // 女神闺蜜把花送给了女神
        A.receiveFlower(flower)
    }
};
// 女神
var A = {
    receiveFlower: function( flower ){
        console.log( '收到花 ' + flower );
    }
};
// 小明开始送花
xiaoming.sendFlower( B );



// 花的实例
var Flower = function(){};
var xiaoming = {
    sendFlower: function( target ){
        var flower = new Flower();
        target.receiveFlower( flower );
    }
};
// 女神闺蜜
var B = {
    receiveFlower: function( flower ){
       A.listenGoodMood(function(){ // 监听A的好心情
            var flower = new Flower(); // 延迟创建flower对象
            A.receiveFlower( flower );
        });
    }
};
// 女神
var A = {
    receiveFlower: function( flower ){
        console.log( '收到花 ' + flower );
    },
    // 女神心情好了
    listenGoodMood: function( fn ){
        setTimeout(function(){ // 假设10秒之后A的心情变好
            fn();
        }, 10000 );
    }
};
// 小明开始送花
xiaoming.sendFlower( B );




var myImage = (function(){
    var imgNode = document.createElement( 'img' );
    document.body.appendChild( imgNode );
    return {
        setSrc: function( src ){
        i   mgNode.src = src;
        }
    }
})();
myImage.setSrc( 'https://imgcache.qq.com/music/photo/k/000GGDys0yA0Nk.jpg')


var myImage = (function(){
    var imgNode = document.createElement( 'img' );
    document.body.appendChild( imgNode );
    return {
        setSrc: function( src ){
            imgNode.src = src;
        }
    }
})();
var proxyImage = (function(){
    var img = new Image;
    img.onload = function(){
        myImage.setSrc( this.src );
    }
    return {
        setSrc: function( src ){
         myImage.setSrc( 'file:// /C:/Users/svenzeng/Desktop/loading.gif' );
         img.src = src;
        }
    }
})();
proxyImage.setSrc( 'https://imgcache.qq.com/music/photo/k/000GGDys0yA0Nk.jpg' );


// 不用代理
var myImage = (function(){
    var imgNode = document.createElement( 'img' );
    document.body.appendChild( imgNode );
    var img = new Imgae;
    img.onload = function(){
        imgNode.src = img.src;
    }
    return {
        setSrc: function( src ){
            imgNode.src = 'file:// /C:/Users/svenzeng/Desktop/loading.gif';
            img.src = src
        }
    }
})();

myImage.setSrc( 'https://imgcache.qq.com/music/photo/k/000GGDys0yA0Nk.jpg' );







```
防抖的使用场景
- 每次 resize/scroll 触发统计事件
- 文本输入验证（连续输入文字后发生AJAX请求进行验证，验证一次就好）
- mousemove，mousedown
- 加载更多(这个与前2个还是有点区别)

### 节流
- 规定时间内只能执行一次函数
- 当上一次函数执行完了才能重新计算执行下一次
```js
/**
 * 节流
 * @param fn
 * @param wait
 * @returns {function}
 */
function throttle(fn, wait) {
    var timer;
    return function (...v) {
        if (!timer) {
            timer = setTimeout(function () {
                timer = null;
            }, wait);
            fn.apply(this, v);
        }
    }
}
```
节流的使用场景
- 监听页面的滚动事件

### 类型转换
* 加号运算符的定义是这样的：如果其中一个是字符串，另一个也会被转换为字符串，否则两个运算数都被转换为数字
* 在操作符中，==，排序运算符，加减乘除，在对非原始值进行操作时，都会调用内部的toPrimitive()方法
* 在操作符中，==，排序运算符，减乘除中，在对非原始值进行操作时，都会调用内部的toPrimitive()方法，再转化为Number来比较；加运算符当作字符串拼接了
- 1.通过 ToPrimitive() 转换为原始值
  - Date 类型的对象会被设置为 String
  - 其它类型的值会被设置为 Number
  - 如果 input 是个原始值，则直接返回它。
  - 否则，如果 input 是一个对象。则调用 obj.valueOf() 方法。 如果返回值是一个原始值，则返回这个原始值。
  - 否则，调用 obj.toString() 方法。 如果返回值是一个原始值，则返回这个原始值。
  - 否则，抛出 TypeError 异常。
  
        如果 PreferredType 被标志为 String，则转换操作的第二步和第三步的顺序会调换。
```js
    1 + {} // "1[object Object]"
    1 + [] // "1"
    /*
        1) 调用 obj.valueOf() 方法 // {} || []
        2) obj.toString() // "[object Object]" || ""
        3) 1 + "[object Object]"// "1[object Object]" || "1"
    */
    {} + [] // 0
    /*
    javascript有这样的特性，如果{}既可以被认为是代码块，又可以被认为是对象字面量，那么js会把他当做代码块来看待。
     所以{}被当做了代码块，只有+[]，根据加法的定义，被转换为0。
    */
```
- 2.通过ToNumber() 将值转换为数字

<table>
    <tr>
        <td>参数</td>
        <td>结果</td>
    </tr>
     <tr>
        <td>undefined</td>
        <td>NaN</td>
    </tr>
    <tr>
        <td>null</td>
        <td>0</td>
    </tr>
    <tr>
        <td>string</td>
        <td>由字符串解析为数字。例如，"324"被转换为324</td>
    </tr>
    <tr>
        <td>boolean</td>
        <td>0/1</td>
    </tr>
    <tr>
        <td>number</td>
        <td>不需转换</td>
    </tr>
</table>

    如果输入的值是一个对象，则会首先会调用 ToPrimitive(obj, Number) 将该对象转换为原始值， 然后在调用 ToNumber() 将这个原始值转换为数字。
- 3.通过ToString()将值转换为字符串
<table>
    <tr>
        <td>参数</td>
        <td>结果</td>
    </tr>
     <tr>
        <td>undefined</td>
        <td>"undefined"</td>
    </tr>
    <tr>
        <td>null</td>
        <td>"null"</td>
    </tr>
    <tr>
        <td>string</td>
        <td>不需转换</td>
    </tr>
    <tr>
        <td>boolean</td>
        <td>"false"/"true"</td>
    </tr>
    <tr>
        <td>number</td>
        <td>"123"</td>
    </tr>
</table>
        
        如果输入的值是一个对象，则会首先会调用 ToPrimitive(obj, String) 将该对象转换为原始值， 然后再调用 ToString() 将这个原始值转换为字符串。

### 自定义事件
```js
/**
* 校验msgName是否合法
*/
function validateMsgScope(msgName) {
    var returnval = false
    if (/^(page|comp):\S+:\S+[^:]$/.test(msgName) === true) {
        returnval = true
    }
    return returnval
}

class EBClass {
    constructor() {
        this.eventQueues = {}
    }
    //on 监听消息队列
    on(msgName = null, func) {
        // 校验
        if (typeof func !== 'function') {
            // console.log('warning error in on')
            return
        }
        if (validateMsgScope(msgName) === false) {
            return
        }
        // 已经存在监听回调
        if (this.eventQueues.hasOwnProperty(msgName)) {
            this.eventQueues[msgName].push(func)
            return
        }
        this.eventQueues[msgName] = []
        this.eventQueues[msgName].push(func)
    }
    //one触发一次覆盖式
    one(msgName = null, func) {
        // 校验
        if (typeof func !== 'function') {
            // console.log('warning error in on')
            return
        }
        if (validateMsgScope(msgName) === false) {
            return
        }
        this.eventQueues[msgName] = []
        this.eventQueues[msgName].push(func)
    }
    // 移除消息
    off(msgName = null, func) {
        if (!this.eventQueues.hasOwnProperty(msgName)) {
            return
        }
        if (!func) {
            delete this.eventQueues[msgName]
            return
        }
        this.eventQueues[msgName] = this.eventQueues[msgName].filter((id) => {
            return id !== func
        })
    }
    // emit分发
    emit(msgName = null, ...msgData) {
        if (!msgName || 
            !this.eventQueues.hasOwnProperty(msgName)) {
            return
        }
        this.eventQueues[msgName].forEach((fn) => {
            fn(...msgData)
        })
    }
}

// const EVENTBUS = window.___EVENTBUS ? window.___EVENTBUS : new EBClass()
// //private
// window.___EVENTBUS = EVENTBUS
const EVENTBUS = new EBClass()
export default EVENTBUS
```
    
### promise实现
```js
// 先定义三个常量表示状态
var PENDING = 'pending';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

function MyPromise(fn) {
  this.status = PENDING;    // 初始状态为pending
  this.value = null;        // 初始化value
  this.reason = null;       // 初始化reason

  // 构造函数里面添加两个数组存储成功和失败的回调
  this.onFulfilledCallbacks = [];
  this.onRejectedCallbacks = [];

  // 存一下this,以便resolve和reject里面访问
  var that = this;
  // resolve方法参数是value
  function resolve(value) {
    if (that.status === PENDING) {
      that.status = FULFILLED;
      that.value = value;

      // resolve里面将所有成功的回调拿出来执行
      that.onFulfilledCallbacks.forEach(callback => {
        callback(that.value);
      });
    }
  }

  // reject方法参数是reason
  function reject(reason) {
    if (that.status === PENDING) {
      that.status = REJECTED;
      that.reason = reason;

      // resolve里面将所有失败的回调拿出来执行
      that.onRejectedCallbacks.forEach(callback => {
        callback(that.reason);
      });
    }
  }

  try {
    fn(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

function resolvePromise(promise, x, resolve, reject) {
  // 如果 promise 和 x 指向同一对象，以 TypeError 为据因拒绝执行 promise
  // 这是为了防止死循环
  if (promise === x) {
    return reject(new TypeError('The promise and the return value are the same'));
  }

  if (x instanceof MyPromise) {
    // 如果 x 为 Promise ，则使 promise 接受 x 的状态
    // 也就是继续执行x，如果执行的时候拿到一个y，还要继续解析y
    // 这个if跟下面判断then然后拿到执行其实重复了，可有可无
    x.then(function (y) {
      resolvePromise(promise, y, resolve, reject);
    }, reject);
  }
  // 如果 x 为对象或者函数
  else if (typeof x === 'object' || typeof x === 'function') {
    // 这个坑是跑测试的时候发现的，如果x是null，应该直接resolve
    if (x === null) {
      return resolve(x);
    }

    try {
      // 把 x.then 赋值给 then 
      var then = x.then;
    } catch (error) {
      // 如果取 x.then 的值时抛出错误 e ，则以 e 为据因拒绝 promise
      return reject(error);
    }

    // 如果 then 是函数
    if (typeof then === 'function') {
      var called = false;
      // 将 x 作为函数的作用域 this 调用之
      // 传递两个回调函数作为参数，第一个参数叫做 resolvePromise ，第二个参数叫做 rejectPromise
      // 名字重名了，我直接用匿名函数了
      try {
        then.call(
          x,
          // 如果 resolvePromise 以值 y 为参数被调用，则运行 [[Resolve]](promise, y)
          function (y) {
            // 如果 resolvePromise 和 rejectPromise 均被调用，
            // 或者被同一参数调用了多次，则优先采用首次调用并忽略剩下的调用
            // 实现这条需要前面加一个变量called
            if (called) return;
            called = true;
            resolvePromise(promise, y, resolve, reject);
          },
          // 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
          function (r) {
            if (called) return;
            called = true;
            reject(r);
          });
      } catch (error) {
        // 如果调用 then 方法抛出了异常 e：
        // 如果 resolvePromise 或 rejectPromise 已经被调用，则忽略之
        if (called) return;

        // 否则以 e 为据因拒绝 promise
        reject(error);
      }
    } else {
      // 如果 then 不是函数，以 x 为参数执行 promise
      resolve(x);
    }
  } else {
    // 如果 x 不为对象或者函数，以 x 为参数执行 promise
    resolve(x);
  }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  // 如果onFulfilled不是函数，给一个默认函数，返回value
  // 后面返回新promise的时候也做了onFulfilled的参数检查，这里可以删除，暂时保留是为了跟规范一一对应，看得更直观
  var realOnFulfilled = onFulfilled;
  if (typeof realOnFulfilled !== 'function') {
    realOnFulfilled = function (value) {
      return value;
    }
  }

  // 如果onRejected不是函数，给一个默认函数，返回reason的Error
  // 后面返回新promise的时候也做了onRejected的参数检查，这里可以删除，暂时保留是为了跟规范一一对应，看得更直观
  var realOnRejected = onRejected;
  if (typeof realOnRejected !== 'function') {
    realOnRejected = function (reason) {
      throw reason;
    }
  }

  var that = this;   // 保存一下this

  if (this.status === FULFILLED) {
    var promise2 = new MyPromise(function (resolve, reject) {
      setTimeout(function () {
        try {
          if (typeof onFulfilled !== 'function') {
            resolve(that.value);
          } else {
            var x = realOnFulfilled(that.value);
            resolvePromise(promise2, x, resolve, reject);
          }
        } catch (error) {
          reject(error);
        }
      }, 0);
    });

    return promise2;
  }

  if (this.status === REJECTED) {
    var promise2 = new MyPromise(function (resolve, reject) {
      setTimeout(function () {
        try {
          if (typeof onRejected !== 'function') {
            reject(that.reason);
          } else {
            var x = realOnRejected(that.reason);
            resolvePromise(promise2, x, resolve, reject);
          }
        } catch (error) {
          reject(error);
        }
      }, 0);
    });

    return promise2;
  }

  // 如果还是PENDING状态，将回调保存下来
  if (this.status === PENDING) {
    var promise2 = new MyPromise(function (resolve, reject) {
      that.onFulfilledCallbacks.push(function () {
        setTimeout(function () {
          try {
            if (typeof onFulfilled !== 'function') {
              resolve(that.value);
            } else {
              var x = realOnFulfilled(that.value);
              resolvePromise(promise2, x, resolve, reject);
            }
          } catch (error) {
            reject(error);
          }
        }, 0);
      });
      that.onRejectedCallbacks.push(function () {
        setTimeout(function () {
          try {
            if (typeof onRejected !== 'function') {
              reject(that.reason);
            } else {
              var x = realOnRejected(that.reason);
              resolvePromise(promise2, x, resolve, reject);
            }
          } catch (error) {
            reject(error);
          }
        }, 0)
      });
    });

    return promise2;
  }
}

MyPromise.deferred = function () {
  var result = {};
  result.promise = new MyPromise(function (resolve, reject) {
    result.resolve = resolve;
    result.reject = reject;
  });

  return result;
}

MyPromise.resolve = function (parameter) {
  if (parameter instanceof MyPromise) {
    return parameter;
  }

  return new MyPromise(function (resolve) {
    resolve(parameter);
  });
}

MyPromise.reject = function (reason) {
  return new MyPromise(function (resolve, reject) {
    reject(reason);
  });
}

MyPromise.all = function (promiseList) {
  var resPromise = new MyPromise(function (resolve, reject) {
    var count = 0;
    var result = [];
    var length = promiseList.length;

    if (length === 0) {
      return resolve(result);
    }

    promiseList.forEach(function (promise, index) {
      MyPromise.resolve(promise).then(function (value) {
        count++;
        result[index] = value;
        if (count === length) {
          resolve(result);
        }
      }, function (reason) {
        reject(reason);
      });
    });
  });

  return resPromise;
}

MyPromise.race = function (promiseList) {
  var resPromise = new MyPromise(function (resolve, reject) {
    var length = promiseList.length;

    if (length === 0) {
      return resolve();
    } else {
      for (var i = 0; i < length; i++) {
        MyPromise.resolve(promiseList[i]).then(function (value) {
          return resolve(value);
        }, function (reason) {
          return reject(reason);
        });
      }
    }
  });

  return resPromise;
}

MyPromise.prototype.catch = function (onRejected) {
  this.then(null, onRejected);
}

MyPromise.prototype.finally = function (fn) {
  return this.then(function (value) {
    return MyPromise.resolve(fn()).then(function () {
      return value;
    });
  }, function (error) {
    return MyPromise.resolve(fn()).then(function () {
      throw error
    });
  });
}

MyPromise.allSettled = function (promiseList) {
  return new MyPromise(function (resolve) {
    var length = promiseList.length;
    var result = [];
    var count = 0;

    if (length === 0) {
      return resolve(result);
    } else {
      for (var i = 0; i < length; i++) {

        (function (i) {
          var currentPromise = MyPromise.resolve(promiseList[i]);

          currentPromise.then(function (value) {
            count++;
            result[i] = {
              status: 'fulfilled',
              value: value
            }
            if (count === length) {
              return resolve(result);
            }
          }, function (reason) {
            count++;
            result[i] = {
              status: 'rejected',
              reason: reason
            }
            if (count === length) {
              return resolve(result);
            }
          });
        })(i)
      }
    }
  });
}

```
### 关于setInterval和setTImeout中的this指向问题

在setInterval和setTimeout中传入函数时，函数中的this会指向window对象，如下例：
```js
var num = 0;
function Obj (){
    this.num = 1,
    this.getNum = function(){
        console.log(this.num);
    },
    this.getNumLater = function(){
        setTimeout(function(){
            console.log(this.num);
        }, 1000)
    }
}
var obj = new Obj(); 
obj.getNum();//1　　打印的是obj.num，值为1
obj.getNumLater()//0　　打印的是window.num，值为0
```

三种解决方法

- 将当前对象的this存为一个变量，定时器内的函数利用闭包来访问这个变量，如下：
```js
var num = 0;
function Obj (){
    var that = this;    //将this存为一个变量，此时的this指向obj
    this.num = 1,
    this.getNum = function(){
        console.log(this.num);
    },
    this.getNumLater = function(){
        setTimeout(function(){
            console.log(that.num);    //利用闭包访问that，that是一个指向obj的指针
        }, 1000)
    }
}
var obj = new Obj; 
obj.getNum();//1　　打印的是obj.num，值为1
obj.getNumLater()//1　　打印的是obj.num，值为1
```
- 利用bind()方法
```js
var num = 0;
function Obj (){
    this.num = 1,
    this.getNum = function(){
        console.log(this.num);
    },
    this.getNumLater = function(){
        setTimeout(function(){
            console.log(this.num);
        }.bind(this), 1000)    //利用bind()将this绑定到这个函数上
    }
}
var obj = new Obj(); 
obj.getNum();//1　　打印的为obj.num，值为1
obj.getNumLater()//1　　打印的为obj.num，值为1
```
- 箭头函数

```js
var num = 0;
function Obj (){
    this.num = 1,
    this.getNum = function(){
        console.log(this.num);
    },
    this.getNumLater = function(){
        setTimeout(() => {
            console.log(this.num);
        }, 1000)    //箭头函数中的this总是指向外层调用者，也就是Obj
    }
}
var obj = new Obj(); 
obj.getNum();//1　　打印的是obj.num，值为1
obj.getNumLater()//1　　打印的是obj.num，值为1
```
### bind实现
```js
Function.prototype.bind = function (context,...v) {
   // 保存原函数
  let self = this;
  // 返回一个新函数
  return function () {
    // 绑定上下文并传参
    self.apply(context, v)
  }
}
```
### map实现
```js
// forEach实现(reduce类似)
Array.prototype.myMap = function (fn, context) {
  var result = []
  this.forEach((v, i, arr) => {
    result.push(fn.call(context, v, i, arr))
  })
  return result
}
var arr0 = [1, 2, 3]
console.log(arr0.myMap(v => v + 1))
```
### 异步执行顺序
```js
// 写出下面代码的输出结果
let p = [];
(function() {
  setTimeout(() => {
    console.log('timeout 0');
  }, 0);
  let i = 0;
  for (; i < 3; i++) {
    p[i] = function() {
      return new Promise(function(resolve) {
        console.log(`promise ${i}`);
        resolve(`promise ${i * i}`);
      })
    }
  }
})();

async function b() {
  console.log('async -1');
}
function a() {
  console.log(`async ${p.length}`);
  return async function() {
    console.log(`async ${p.length}`);
    await b();
    console.log('async -2')
  };
}
p.push(a());

p[1]().then(console.log);
p[3]();

//输出
async 3
promise 3
async 4
async -1
promise 9
async -2
timeout 0

// await awaitFn()
// console.log('awaitFn后面的代码')
// await执行完，后面的代码相当于 awaitFn.then(()=> console.log('awaitFn后面的代码'))
```
### 正则实现千分位
```js
      function format(num) {
        var reg = /\d{1,3}(?=(\d{3})+$)/g
        return (num + '').replace(reg, '$&,')
      }
      // $& 与 regexp 相匹配的子串
    /** 解释：
         1、?=n ,匹配任何其后紧接指定字符串 n 的字符串。

　　      2、正则表达式 \d{1,3}(?=(\d{3})+$)  表示前面有1~3个数字，后面的至少由一组3个数字结尾

　　      3、?=表示正向引用，可以作为匹配的条件，但匹配到的内容不获取，并且作为下一次查询的开始

　　      4、$& 表示 $& 与 regexp 相匹配的子串
  **/
```
### EventLoop
    1.浏览器
     （1）Task(macroTask): setTimeout, setInterval, setImmediate,I/O, UI rendering
     （2）microTask: Promise, process.nextTick, Object.observe, MutationObserver, MutaionObserver
      执行顺序：
       (1) event-loop start
      （2) microTasks 队列开始清空（执行）
      （3) 检查 Tasks 是否清空，有则跳到 （4），无则跳到 （6）
      （4) 从 Tasks 队列抽取一个任务，执行
      （5）检查 microTasks 是否清空，若有则跳到 （2），无则跳到 （3）
      （6）结束 event-loop
    2.node.js
      6个阶段
        (1) timers: 这个阶段执行setTimeout()和setInterval()设定的回调。
        (2) I/O callbacks: 是否有已完成的I/O操作的回调函数，来自上一轮的poll残留。执行几乎所有的回调，除了close回调，timer的回调，和setImmediate()的回调
        (3) idle, prepare: 仅内部使用。
        (4) poll: 获取新的I/O事件；node会在适当条件下阻塞在这里。阻塞等待监听的事件来临，然后执行对应的callback
          1）执行下限时间已经达到的timers的回调
          2）处理 poll 队列里的事件。
            a.队列不空=>执行清空或者执行的回调数到达系统上限
            b.队列空
              1.如果代码已经被setImmediate()设定了回调, event loop将结束 poll 阶段进入 check 阶段来执行 check 队列（里的回调）。
              2.如果代码没有被setImmediate()设定回调，event loop将阻塞在该阶段等待回调被加入 poll 队列，并立即执行。
        (5) check: 执行setImmediate()设定的回调。
        (6) close callbacks: 执行比如socket.on('close', ...)的回调。
      每个阶段结束后都执行process.nextTick()
      
 ### js实现new
 ```js
 // 构造器函数
let Parent = function (name, age) {
    this.name = name;
    this.age = age;
};
Parent.prototype.sayName = function () {
    console.log(this.name);
};
//自己定义的new方法
let newMethod = function (Parent, ...rest) {
    // 1.以构造器的prototype属性为原型，创建新对象；
    let child = Object.create(Parent.prototype);
    // 2.将this和调用参数传给构造器执行
    let result = Parent.apply(child, rest);
    // 3.如果构造器没有手动返回对象，则返回第一步的对象
    return typeof result  === 'object' && result !== null ? result : child;
};
//创建实例，将构造函数Parent与形参作为参数传入
const child = newMethod(Parent, 'echo', 26);
child.sayName() //'echo';

//最后检验，与使用new的效果相同
child instanceof Parent//true
child.hasOwnProperty('name')//true
child.hasOwnProperty('age')//true
child.hasOwnProperty('sayName')//false
 ```
     











### 1. 转化为boolean值后为fasle的：'',0,null,undefined,false和NaN
      
```js
Boolean(''),
Boolean(null),
Boolean(undefined),
Boolean(0),
Boolean(NaN),
Boolean(false)

//Boolean([])  true
console.log(([])?true:false); //true

//布尔类型与其它任何类型进行比较，布尔类型将会转换为number类型,Number(false) 0;Number([])实际是调用String([])得到"",再Number("")得到0
console.log(([]==false?true:false));//true

//Number({})得到NaN,0与NaN相比为false
console.log(({}==false)?true:false);//false
```

### 2. typeof 优先==;typeof 返回的是字符串

```js
typeof 1=='number'//true
typeof (1=='number')//boolean
typeof (typeof 1)//"string"
```

### 3. 正则

正则表达式的量词分别式贪婪，惰性，支配性

(1)贪婪量词：

      先看整个字符串是不是一个匹配。如果没有发现匹配，它去掉最后字符串中的最后一个字符，并再次尝试。
      
(2)惰性量词: 

      先看字符串中的第一个字母是不是一个匹配。如果单独这一个字符还不够，就读入下一个字符，组成两个字符的字符串。如果还是没有发现匹配，惰性量词继续从字符串添加字符直到发现一个匹配或者整个字符串都检查过也没有匹配。
 
**惰性量词和贪婪量词的工作方式正好是相反的。**
 
(3)支配量词：

      只尝试匹配整个字符串。如果整个字符串不能产生匹配，不做进一步尝试，支配量词其实简单的说，就是一刀切。
 
表示这3种量词：
<table>
      <tr>
            <th>贪婪</th>
            <th>懒惰</th>
            <th>支配</th>
            <th>描述</th>
      </tr>
       <tr>
             <td>?</td>
             <td>??</td>
             <td>?+</td>
             <td>零次或一次出现</td>
      </tr>
       <tr>
             <td>*</td>
             <td>*?</td>
             <td>*+</td>
             <td>零次或多次出现</td>
      </tr>
       <tr>
             <td>+</td>
             <td>+?</td>
             <td>++</td>
             <td>一次或多次出现</td>
      </tr>
       <tr>
             <td>{n}</td>
             <td>{n}?</td>
             <td>{n}+</td>
             <td>恰好n次出现</td>
      </tr>
       <tr>
             <td>{n，m}</td>
             <td>{n，m}</td>
             <td>{n，m}+</td>
             <td>至少n次至m次出现</td>
      </tr>
       <tr>
             <td> {n，}</td>
             <td> {n，}？</td>
             <td>{n，}+</td>
             <td>至少n次出现</td>
      </tr>
</table>

贪婪量词测试

```js
<script>
 var str="abbbaabbbaaabbb1234";
 var re1=/.*bbb/g;
 alert(re1.exec(str));
</script>
```

惰性量词测试

```js
<script>
 var str="abbbaabbbaaabbb1234";
 var re1=/.*?bbb/g;
 alert(re1.exec(str));
</script>
```

支配性量词测试

```js
<script>
 var str="abbbaabbbaaabbb1234";
 var re1=/.*+bbb/g;
 alert(re1.exec(str));
</script>
```
常用正则：
- 手机验证
  - /^1[3|4|5|7|8][0-9]\d{8}$/

### 4.slice,concat为浅复制
 slice和concat这两个方法，仅适用于对不包含引用对象的一维数组的深拷贝

### 5.var a=b=3
 从右往左执行，相当与b=3;var a=b;
 
### 6. 事件顺序 

 mousedown->focus->mouseup->click
 
### 7.计算机中国浮点数不精确

- 为什么0.1 + 0.2 不等于0.3。因为计算机不能精确表示0.1， 0.2这样的浮点数，计算时使用的是带有舍入误差的数
- 并不是所有的浮点数在计算机内部都存在舍入误差，比如0.5就没有舍入误差
- 具有舍入误差的运算结可能会符合我们的期望，原因可能是“负负得正”
- 怎么办？1个办法是使用整型代替浮点数计算；2是不要直接比较两个浮点数，而应该使用bignumber.js这样的浮点数运算库

### 8.如何阻止事件冒泡，阻止默认行为？
- DOM中
  - event.stopPropagation();取消事件的进一步捕获或冒泡。如果bubbles为true，则可以使用这个方法
  - event.preventDefault();取消事件的默认行为。如果cancelable是true，则可以使用这个方法
- IE中
  - event.cancelBubble=true;取消事件冒泡
  - event.returnValue=false;取消事件默认行为
  - DOM0级获取事件对象：window.event,DOM2级跟DOM一样传参event
  
### 9.字符串的方法
  
- str.substring(start,[stop]) 方法返回的子串包括 start 处的字符，但不包括 stop 处的字符,不接受负的参数。
- str.substr(start,[length]),方法可在字符串中抽取从 start 下标开始的指定数目的字符。
- str.slice(start,[stop]),方法返回的子串包括 start 处的字符，但不包括 stop 处的字符

### 10.

- Object 类的 toString 方法返回一个字符串，该字符串由类名（对象是该类的一个实例）、at 
标记符“@”和此对象哈希码的无符号十六进制表示组成。Arrays的toString方法是返回指定数组内容的字符串表示形式。

- 两者是重名函数关系，没有复写

```js
let o={name:yao};
let arr = [1,2,3]
o.toString()
//"[object Object]"
arr.toString()
//"1,2,3"
```
### 11深拷贝
```js
function deepCopy(obj) {
  let result = Array.isArray(obj) ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        result[key] = deepCopy(obj[key]);
      } else {
        result[key] = obj[key]
      }
    }
  }
  return result
}
```

function isHuiwen(num) {
  num = num + ''
  let arr = num.split('');
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (len % 2 === 0) {
      if (i !== len) {
        if (arr[i] !== arr[len - 1]) {
          return false
        }
      }
    } else {
      if (i !== len - 1) {
        if (arr[i] !== arr[len - 1]) {
          return false
        }
      }
    }
    len--
  }
  return true
}





