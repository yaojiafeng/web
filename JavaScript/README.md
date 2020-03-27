## 目录
- [防抖](#防抖)
- [节流](#节流)
- [类型转换](#类型转换)
- [自定义事件](#自定义事件)
- [promise实现](#promise实现)
- [关于setInterval和setTImeout中的this指向问题](#关于setInterval和setTImeout中的this指向问题)
- [bind实现]（#bind实现）

### 防抖
- 函数执行过一次后，在等待某时间段内不能再次执行。
- 在等待时间内触发此函数，则重新计算等待时间
```js
function debounce(fn,wait){
    var timer = null;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(fn,wait);
    }
}
function doSomeThing(){
   console.log('do');
}
var callback = debounce(doSomeThing,5000);
someEle.onclick = callback;
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
    return function (params) {
        if (!timer) {
            timer = setTimeout(function () {
                timer = null;
            }, wait);
            fn.call(this, params);
        }
    }
}
```
节流的使用场景
- 监听页面的滚动事件

### 类型转换
- 1.通过 ToPrimitive() 转换为原始值
  - 如果 input 是个原始值，则直接返回它。
  - 否则，如果 input 是一个对象。则调用 obj.valueOf() 方法。 如果返回值是一个原始值，则返回这个原始值。
  - 否则，调用 obj.toString() 方法。 如果返回值是一个原始值，则返回这个原始值。
  - 否则，抛出 TypeError 异常。
  
        如果 PreferredType 被标志为 String，则转换操作的第二步和第三步的顺序会调换。 如果没有 PreferredType 这个参数，则 PreferredType 的值会按照这样的规则来自动设置：

  - Date 类型的对象会被设置为 String
  - 其它类型的值会被设置为 Number
```js
    1+{} // "1[object Object]"
    1+[] // "1"
    /*
        1) 调用 obj.valueOf() 方法 //{}
        2) obj.toString() // "[object Object]"
        3) 1+"[object Object]"// "1[object Object]"
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

### 自定义事件
```js
function EventTarget(){
    this.handlers={};
}

EventTarget.prototype = {
    constructor:EventTarget,
    addHandler:function(type,handler){
        if(typeof this.handlers[type]=='undefined'){
            this.handlers[type]=[];
        }
        this.handlers[type].push(handler);
    },
    fire:function(event){
        if(!event.target){
            event.target=this;
        }
        if(this.handlers[event.type] instanceof Array){
            var handlers = this.handlers[event.type];
            for(var i = 0 ,len = handlers.length;i<len;i++){
                handlers[i](event);
            }
        }
    },
}

function handleMessage(event){
    console.log('message received:'+event.message);
}

var target =new EventTarget();

target.addHandler('message',handleMessage)

target.fire({type:'message',message:'hello world'})
```
    如果输入的值是一个对象，则会首先会调用 ToPrimitive(obj, String) 将该对象转换为原始值， 然后再调用 ToString() 将这个原始值转换为字符串。
    
### promise实现
```js
function promise () {
  this.msg = '' // 存放value和error
  this.status = 'pending'
  var that = this
  var process = arguments[0]

  process (function () {
    that.status = 'fulfilled'
    that.msg = arguments[0]
  }, function () {
    that.status = 'rejected'
    that.msg = arguments[0]
  })
  return this
}

promise.prototype.then = function () {
  if (this.status === 'fulfilled') {
    arguments[0](this.msg)
  } else if (this.status === 'rejected' && arguments[1]) {
    arguments[1](this.msg)
  }
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
Function.prototype.bind = function () {
   // 保存原函数
  var self = this
  // 取出第一个参数作为上下文, 相当于[].shift.call(arguments)
  var context = Array.prototype.shift.call(arguments)
  // 取剩余的参数作为arg; 因为arguments是伪数组, 所以要转化为数组才能使用数组方法
  var arg = Array.prototype.slice.call(arguments)
  // 返回一个新函数
  return function () {
    // 绑定上下文并传参
    self.apply(context, Array.prototype.concat.call(arg, Array.prototype.slice.call(arguments)))
  }
}
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
function copy(arr){
    var obj=arr.constructor==Array?[]:{};
　　//第二种方法 var obj=arr instanceof Array?[]:{}
    for(var item in arr){
        if(typeof arr[item]==="object"){
            obj[item]=copy(arr[item]);
        }else{
            obj[item]=arr[item];
        }
    }
    return obj;
}
```




