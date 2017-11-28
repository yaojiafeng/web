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
任何位于局部变量color 的声明之后的代码，如果不使用window.color 都无法访问全局color变量。
4.3 垃圾收集
JavaScript 具有自动垃圾收集机制，也就是说，执行环境会负责管理代码执行过程中使用的内存。垃圾收集机制的原理其实很简单：找出那些不再继续使用的变
量，然后释放其占用的内存。为此，垃圾收集器会按照固定的时间间隔（或代码执行中预定的收集时间），周期性地执行这一操作。局部变量只在函数执行的过程中存在。
标识无用变量的策略可能会因实现而异，但具体到浏览器中的实现，则通常有两个策略。
4.3.1 标记清除
4.3.2 引用计数
4.3.3 性能问题
4.3.4 管理内存
一旦数据不再有用，最好通过将其值设置为null 来释放其引用——这个做法叫做解除引用（dereferencing）。这一做法适用于大多数全局变量和全局对象的属性。
局部变量会在它们离开执行环境时自动被解除引用。
function createPerson(name){
var localPerson = new Object();
localPerson.name = name;
return localPerson;
}
var globalPerson = createPerson("Nicholas");
// 手工解除globalPerson 的引用
globalPerson = null;//解除一个值的引用
解除引用的真正作用是让值脱离执行环境，以便垃圾收集器下次运行时将其回收。
4.4 小结
JavaScript 变量可以用来保存两种类型的值：基本类型值和引用类型值。基本类型的值源自以下5种基本数据类型：Undefined、Null、Boolean、Number 
和String。基本类型值和引用类型值具有以下特点：
   基本类型值在内存中占据固定大小的空间，因此被保存在栈内存中；
   从一个变量向另一个变量复制基本类型的值，会创建这个值的一个副本；
   引用类型的值是对象，保存在堆内存中；
   包含引用类型值的变量实际上包含的并不是对象本身，而是一个指向该对象的指针；
   从一个变量向另一个变量复制引用类型的值，复制的其实是指针，因此两个变量最终都指向同一个对象；
   确定一个值是哪种基本类型可以使用typeof 操作符，而确定一个值是哪种引用类型可以使用instanceof 操作符。
所有变量（包括基本类型和引用类型）都存在于一个执行环境（也称为作用域）当中，这个执行环境决定了变量的生命周期，以及哪一部分代码可以访问其中的变量。
以下是关于执行环境的几点总结：
   执行环境有全局执行环境（也称为全局环境）和函数执行环境之分；
   每次进入一个新执行环境，都会创建一个用于搜索变量和函数的作用域链；
   函数的局部环境不仅有权访问函数作用域中的变量，而且有权访问其包含（父）环境，乃至全局环境；
   全局环境只能访问在全局环境中定义的变量和函数，而不能直接访问局部环境中的任何数据；
   变量的执行环境有助于确定应该何时释放内存。
JavaScript 是一门具有自动垃圾收集机制的编程语言，开发人员不必关心内存分配和回收问题。可以对JavaScript 的垃圾收集例程作如下总结。
   离开作用域的值将被自动标记为可以回收，因此将在垃圾收集期间被删除。
  “标记清除”是目前主流的垃圾收集算法，这种算法的思想是给当前不使用的值加上标记，然后再回收其内存。
   另一种垃圾收集算法是“引用计数”，这种算法的思想是跟踪记录所有值被引用的次数。JavaScript引擎目前都不再使用这种算法；
但在IE 中访问非原生JavaScript 对象（如DOM 元素）时，这种算法仍然可能会导致问题。
   当代码中存在循环引用现象时，“引用计数”算法就会导致问题。
   解除变量的引用不仅有助于消除循环引用现象，而且对垃圾收集也有好处。为了确保有效地回收内存，应该及时解除不再使用的全局对象、
全局对象属性以及循环引用变量的引用。


第五章 引用类型
本章内容
   使用对象
   创建并操作数组
   理解基本的JavaScript 类型
   使用基本类型和基本包装类型
引用类型的(值)对象是某个特定引用类型的实例。 
5.1 Object 类型（创建Object 实例的方式有两种。）
第一种是使用new 操作符后跟Object 构造函数，如下所示：
var person = new Object();
person.name = "Nicholas";
person.age = 29;
第二种是使用对象字面量表示法
var person = {
name : "Nicholas",
age : 29  //最后一个变量不能有逗号
};
在通过对象字面量定义对象时，实际上不会调用Object 构造函数。
访问对象属性时可以使用点表示法和方括号。
alert(person["name"]); //"Nicholas"
alert(person.name); //"Nicholas"
5.2 Array 类型
创建数组的基本方式有两种。
第一种是使用Array 构造函数，如下面的代码所示。
var colors = new Array();//空数组
var colors = new Array(20);//数组长度20
var colors = new Array("red", "blue", "green");//数组有三个值
var colors = new Array(3); // 创建一个包含3 项的数组
var names = new Array("Greg"); // 创建一个包含1 项，即字符串"Greg"的数组
在使用Array 构造函数时也可以省略new 操作符
var colors = Array(3); // 创建一个包含3 项的数组
var names = Array("Greg"); // 创建一个包含1 项，即字符串"Greg"的数组
第二种基本方式是使用数组字面量表示法
var colors = ["red", "blue", "green"]; // 创建一个包含3 个字符串的数组
var names = []; // 创建一个空数组
var values = [1,2,]; // 不要这样！这样会创建一个包含2 或3 项的数组
var options = [,,,,,]; // 不要这样！这样会创建一个包含5 或6 项的数组
与对象一样，在使用数组字面量表示法时，也不会调用Array 构造函数（Firefox 3及更早版本除外）。
5.2.1 检测数组
var arr= new Array();
arr instanceof Array;//true, 检测假定只有一个执行环境,当网页中包含多个框架，实际上就存在两个以上不同的全局执行环境，从而存在两个不同版本的Array构造函数。
Array.isArray(arr);//true,这个方法的目的是最终确定某个值到底是不是数组，而不管它是在哪个全局执行环境中创建的。
5.2.2 转换方法
所有对象都具有toLocaleString()、toString()和valueOf()方法。
join()方法只接收一个参数，即用作分隔符的字符串，然后返回包含所有数组项的字符串。
var colors = ["red", "green", "blue"];
alert(colors.join(",")); //red,green,blue
alert(colors.join("||")); //red||green||blue
5.2.3 栈方法 (数组从下标0开始从左往右走，记住这个模型，栈和队列都是基于这个模型理解和记忆）
ECMAScript 为数组专门提供了push()和pop()方法，以便实现类似栈的行为。
push()方法可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度。而
pop()方法则从数组末尾移除最后一项，减少数组的length 值，然后返回移除的项。
var colors = new Array(); // 创建一个数组
var count = colors.push("red", "green"); // 推入两项
alert(count); //2
count = colors.push("black"); // 推入另一项
alert(count); //3
var item = colors.pop(); // 取得最后一项
5.2.4 队列方法 (数组从下标0开始从左往右走，记住这个模型，栈和队列都是基于这个模型理解和记忆）shift()和unshift()在左边，push()和pop()在右边。
shift()，它能够移除数组中的第一个项并返回该项，同时将数组长度减1。结合使用shift()和push()方法，可以像使用队列一样使用数组。
var colors = new Array(); //创建一个数组
var count = colors.push("red", "green"); //推入两项
alert(count); //2
count = colors.push("black"); //推入另一项
alert(count); //3
var item = colors.shift(); //取得第一项
alert(item); //"red"
alert(colors.length); //2
unshift()方法。顾名思义，unshift()与shift()的用途相反：它能在数组前端添加任意个项并返回新数组的长度。因此，同时使用unshift()和pop()方法，
可以从相反的方向来模拟队列，即在数组的前端添加项，从数组末端移除项。
var colors = new Array(); //创建一个数组
var count = colors.unshift("red", "green"); //推入两项
count = colors.unshift("black"); //推入另一项
alert(count); //3
var item = colors.pop(); //取得最后一项
alert(item); //"green"
alert(colors.length); //2
5.2.5 重排序方法
数组中已经存在两个可以直接用来重排序的方法：reverse()和sort()。
sort()方法会调用每个数组项的toString()转型方法，然后比较得到的字符串，以确定如何排序。即使数组中的每一项都是数值，sort()方法比较的也是字符串。
sort()方法可以接收一个比较函数作为参数，以便我们指定哪个值位于哪个值的前面。比较函数接收两个参数，如果第一个参数应该位于第二个之前则返回一个负数，
如果两个参数相等。
升序排序：
function compare(value1, value2) {
if (value1 < value2) {
return -1;
} else if (value1 > value2) {
return 1;
} else {
return 0;
}
var values = [0, 1, 5, 10, 15];
values.sort(compare);
alert(values); //0,1,5,10,15
reverse()和sort()方法的返回值是经过排序之后的数组。
}
则返回0，如果第一个参数应该位于第二个之后则返回一个正数。
5.2.6 操作方法





第八章 BOM
本章内容
   理解window 对象——BOM的核心
   控制窗口、框架和弹出窗口
   利用location 对象中的页面信息
   使用navigator 对象了解浏览器
8.1 window 对象
   BOM 的核心对象是window，它表示浏览器的一个实例。在浏览器中，window 对象有双重角色，它既是通过JavaScript 访问浏览器窗口的一个接口，
又是ECMAScript 规定的Global 对象。这意味着在网页中定义的任何一个对象、变量和函数，都以window 作为其Global 对象，因此有权访问parseInt()等方法。
8.1.1 全局作用域  
所有在全局作用域中声明的变量、函数都会变成window 对象的属性和方法。
全局变量不能通过delete 操作符删除，而直接在window 对象上的定义的属性可以。
var age = 29;
window.color = "red";
//在IE < 9 时抛出错误，在其他所有浏览器中都返回false
delete window.age;
//在IE < 9 时抛出错误，在其他所有浏览器中都返回true
delete window.color; //returns true
alert(window.age); //29
alert(window.color); //undefined
使用var 语句添加的window 属性有一个名为[[Configurable]]的特性，这个特性的值被设置为false，因此这样定义的属性不可以通过delete 操作符删除。
要记住一件事：尝试访问未声明的变量会抛出错误，但是通过查询window 对象，可以知道某个可能未声明的变量是否存在。
//这里会抛出错误，因为oldValue 未定义
var newValue = oldValue;
//这里不会抛出错误，因为这是一次属性查询
//newValue 的值是undefined
var newValue = window.oldValue;
8.1.2 窗口关系及框架
