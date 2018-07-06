
[ES6详细](https://github.com/yaojiafeng/es6tutorial/blob/gh-pages/docs/module.md)

### 1.把以下代码使用两种方法，来依次输出0到9？

```javascript
var funcs = []
    for (var i = 0; i < 10; i++) {
        funcs.push(function() { console.log(i) })
    }
    funcs.forEach(function(func) {
        func()
    })
```
    
**答：分别使用es5的闭包和es6的let**

```javascript
  // ES5告诉我们可以利用闭包解决这个问题
    var funcs = []
    for (var i = 0; i < 10; i++) {
        funcs.push((function(value){
	    return function() { 
	       console.log(i) 
	    }))(i))
    }
    funcs.forEach(function(func) {
        func()
    })
    // es6
   var funcs = []
    for (let i = 0; i < 10; i++) {
        funcs.push(function() { console.log(i) })
    }
    funcs.forEach(function(func) {
        func()
    })
```

### 2.ES6的模板字符串有哪些新特性？

***答：第一个用途，基本的字符串格式化。将表达式嵌入字符串中进行拼接。用${}来界定。***

```javascript
    //es5 
    var name = 'lux'
    console.log('hello' + name)
    //es6
    const name = 'lux'
    console.log(`hello ${name}`) //hello lux
```

***第二个用途，在ES5时我们通过反斜杠(\)来做多行字符串或者字符串一行行拼接。ES6s反引号直接搞定。***

```javascript
// es5
    var msg = "Hi \
    man!
    "
    // es6
    const template = `<div>
        <span>hello world</span>
    </div>`
```

***对于字符串es6当然也提供了很多厉害的方法。说几个常用的。***

```javascript
// 1.includes：判断是否包含然后直接返回布尔值
    let str = 'hahay'
    console.log(str.includes('y')) // true
    // 2.repeat: 获取字符串重复n次
    let s = 'he'
    console.log(s.repeat(3)) // 'hehehe'
    //如果你带入小数, Math.floor(num) 来处理
```

### 3.箭头有哪些新特点？

***答：不需要function关键字来创建函数,省略return关键字,继承当前上下文的 this 关键字***

### 4.以下代码依次输出内容是？

```javascript
setTimeout(function() {
      console.log(1)
    }, 0);
    new Promise(function executor(resolve) {
      console.log(2);
      for( var i=0 ; i<10000 ; i++ ) {
        i == 9999 && resolve();
      }
      console.log(3);
    }).then(function() {
      console.log(4);
    });
    console.log(5);
```

***答：首先先碰到一个 setTimeout，于是会先设置一个定时，在定时结束后将传递这个函数放到任务队列里面，因此开始肯定不会输出 1 。 然后是一个 Promise，里面的函数是直接执行的，因此应该直接输出 2 3 。 然后，Promise 的 then 应当会放到当前 tick 的最后，但是还是在当前 tick 中。 因此，应当先输出 5，然后再输出 4 。 最后在到下一个 tick，就是 1 。 “2 3 5 4 1”***
	
### 5.promise的原理？jquery的ajax返回的是promise对象吗？(百度面试)

***答：jquery的ajax返回的是deferred对象，通过promise的resolve()方法将其转换为promise对象。***

```javascript
  var jsPromise = Promise.resolve($.ajax('/whatever.json'));
```



















### 问题:
1. es6模块化如何使用，开发环境如何打包?
1. class 和普通构造函数有什么区别?
1. promise 的基本使用和原理?
1. 总结es6的其他功能?
### 解答:
    1.babel (只能编译es6语法，不能解决模块化问题)
	   1)npm install --save-dev babel-core babel-preset-es2015 babel-preset-latest
	   2)创建.babelrc文件
	   3)npm install -g babel-cli
	   4)创建./src/index.js并编辑内容
	   5)babel ./src/index.js
	  webpack解决模块化问题
	   1)npm install webpack babel-loader --save-dev
	   2)配置webpack.config.js
	   3)配置package.json中的scripts("start":webpack)
	   4)运行npm start
                                         			
     2.Module的语法
     
 ```javascript

export 可输出变量、函数和(class)
	 
//方式一:
 export var name='yao';
 export function v1(){}
 //方式二:
 var name='yao';
 export{name};
 //方式三:
 function v1(){};
 export {v1 as v11};
//方式四:指定模块的默认输出
export default {a:100}
export default function (){}//匿名函数
function foo(){};//非匿名函数
export default foo;

import 加载模块
//方式一:
import {name} from 'xxx';
//方式二:
import {name as name1} from 'xxx';
//import 'lodash';仅仅执行lodash,但是并没有输入任何值
//方式三:模块的整体加载(两个方法)
import *as circle from 'xxx';
circle.area();
circle.circumference();
//方式四:
import myClass from 'xxx';//export default class{};
```
	  
