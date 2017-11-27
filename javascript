第四章 变量、作用域和内存问题
本章内容
  理解基本类型和引用类型的值
  理解执行环境
  理解垃圾收集
4.1 基本类型和引用类型的值
基本数据类型：Undefined、Null、Boolean、Number 和String。这5 种基本数据类型是按值访问的，因为可以操作保存在变量中的实际的值。
引用数据类型：引用类型值指那些可能由多个值构成的对象。object
4.1.1 动态的属性
4.1.2 复制变量值
基本类型：复制一份；
引用类型，复制指针（地址），即复制一个指向堆内存中的对象值的地址。
4.1.3 传递参数
ECMAScript 中所有函数的参数都是按值传递的而不是按引用。包括基本类型和引用类型都是。
基本类型作为参数：
 function  add(num){
   num+=10;
   return num;
 }
 var count = 20;
 var result = add(count);
 console.log(count);//20,没有变化
 console.log(result);//30
引用类型作为参数：
  function setName(obj) {
   obj.name = "Nicholas";
 }
 var person = new Object();
 setName(person);
 alert(person.name); //"Nicholas"
 4.1.4 检测类型
 typeof 检测基本类型中的string,number,boolean比较好，其他类型不好用。
通常，我们并不是想知道某个值是对象，而是想知道它是什么类型的对象。为此，ECMAScript提供了instanceof 操作符，其语法如下所示：
          result = variable instanceof constructor
          alert(person instanceof Object); // 变量person 是Object 吗？
          alert(colors instanceof Array); // 变量colors 是Array 吗？
          alert(pattern instanceof RegExp); // 变量pattern 是RegExp 吗？
4.2 执行环境及作用域  
在Web 浏览器中，全局执行环境被认为是window 对象,因此所有全局变量和函数都是作为window 对象的属性和方法创建的.某个执行环境中的所有代码执行完
毕后，该环境被销毁，保存在其中的所有变量和函数定义也随之销毁（全局执行环境直到应用程序退出——例如关闭网页或浏览器——时才会被销毁）。
4.2.1 延长作用域链
执行环境的类型总共只有两种——全局和局部（函数），但还是有其他办法来延长作用域链。
当执行流进入下列任何一个语句时，作用域链就会得到加长：
  try-catch 语句的catch 块；
  with 语句。
  这两个语句都会在作用域链的前端添加一个变量对象。对with 语句来说，会将指定的对象添加到作用域链中。对catch 语句来说，会创建一个新的变量对象，
  其中包含的是被抛出的错误对象的声明。
4.2.2 没有块级作用域
  JavaScript 没有块级作用域
  对于有块级作用域的语言来说，for 语句初始化变量的表达式所定义的变量，只会存在于循环的环境之中。而对于JavaScript 来说，
 由for 语句创建的变量i 即使在for 循环执行结束后，也依旧会存在于循环外部的执行环境中。
1. 声明变量
使用var 声明的变量会自动被添加到最接近的环境中。在函数内部，最接近的环境就是函数的局部环境；在with 语句中，最接近的环境是函数环境。
如果初始化变量时没有使用var 声明，该变量会自动被添加到全局环境。如下所示：
function add(num1, num2) {
var sum = num1 + num2;
return sum;
}
var result = add(10, 20); //30
alert(sum); //由于sum 不是有效的变量，因此会导致错误.
如果省略这个例子中的var 关键字(此时sum为全局变量)，那么当add()执行完毕后，sum 也将可以访问到：
 function add(num1, num2) {
   sum = num1 + num2;
   return sum;
}
var result = add(10, 20); //30
alert(sum); //30
在严格模式下，初始化未经声明的变量会导致错误。
 2. 查询标识符
 通过下面这个示例，可以理解查询标识符的过程：
var color = "blue";
function getColor(){
  return color;
}
alert(getColor()); //"blue"
在这个搜索过程中，如果存在一个局部的变量的定义，则搜索会自动停止，不再进入另一个变量对象。换句话说，如果局部环境中存在着同名标识符，
就不会使用位于父环境中的标识符。
如：
var color = "blue";
function getColor(){
    var color = "red";
    return color;
}
alert(getColor()); //"red"
