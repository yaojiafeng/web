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
 
