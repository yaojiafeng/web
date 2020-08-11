
[ES6详细](https://github.com/yaojiafeng/es6tutorial)

### 1.把以下代码使用两种方法，来依次输出0到9？

```javascript
    var funcs = []
    for (var i = 0; i < 10; i++) {
        funcs.push(function() {
	    console.log(i)
	})
    }
    funcs.forEach(function(func) {
        func()
    })
```
    
**答：**

	分别使用es5的闭包立即执行和es6的let

```javascript
  // ES5告诉我们可以利用闭包解决这个问题
    var funcs = []
    for (var i = 0; i < 10; i++) {
        funcs.push((function(value){
	    return function() { 
	        console.log(value) 
	    }
	})(i))
    }
    funcs.forEach(function(func) {
        func()
    })
        
    // es6
    var funcs = []
    for (let i = 0; i < 10; i++) {
        funcs.push(function() { 
	    console.log(i) 
	})
    }
    funcs.forEach(function(func) {
        func()
    }) 
```

### 2.ES6的模板字符串有哪些新特性？

***答：***

	模板字符串（template string）是增强版的字符串，用反引号（\`\`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。

***（1）字符串中嵌变量***

```javascript
    //es5 
    var name = 'lux'
    console.log('hello' + name)
    //es6
    const name = 'lux'
    console.log(`hello ${name}`) //hello lux
```

***（2）保留空格和换行等格式***

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

[ES6字符串的拓展](http://es6.ruanyifeng.com/#docs/string)

### 3.箭头有哪些新特点？

***答:***

	(1)“箭头”（=>）定义函数,不需要function关键字;	
	
	(2)如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分;
	
	(3)如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回;
	
	(4)由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错;
	
	(5)如果箭头函数只有一行语句，且不需要返回值，可以采用下面的写法，就不用写大括号了:

```javascript
    let fn = () => void doesNotReturn();
```

箭头函数有几个使用注意点:

	（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

	（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

	（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

	（4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
	
	 除了this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：arguments、super、new.target

[ES6函数拓展](http://es6.ruanyifeng.com/#docs/function#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0)

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

***答：***
	
	首先先碰到一个 setTimeout，于是会先设置一个定时，在定时结束后(准确说是异步队列调度顺序到它的时候)将传递这个函数放到异步任务队列里面，因此开始肯定不会输出 1 。 然后是一个 Promise，Promise回调函数里面的代码是直接执行的，因此应该直接输出 2 ,3 。 然后，Promise 的 then 应当会放到当前 tick 的最后，但是还是在当前 tick 中。 因此，应当先输出 5，然后再输出 4 。 最后在到下一个 tick，就是 1 。 “2 3 5 4 1”
	
### 5.promise的原理？jquery的ajax返回的是promise对象吗？(百度面试)

***答：***

	jquery的ajax返回的是deferred对象，通过promise的resolve()方法将其转换为promise对象。

```javascript
  var jsPromise = Promise.resolve($.ajax('/whatever.json'));
```

[ES6 Promise](http://es6.ruanyifeng.com/#docs/promise)



















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
	  
