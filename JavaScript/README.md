# javascript常忘的东西

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







