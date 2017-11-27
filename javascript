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
 
