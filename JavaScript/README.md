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
1.贪婪量词：先看整个字符串是不是一个匹配。如果没有发现匹配，
           它去掉最后字符串中的最后一个字符，并再次尝试。
2.惰性量词: 先看字符串中的第一个字母是不是一个匹配。如果单独
           这一个字符还不够，就读入下一个字符，组成两个字符的字符串。
           如果还是没有发现匹配，惰性量词继续从字符串添加字符
           直到发现一个匹配或者整个字符串都检查过也没有匹配。
 
惰性量词和贪婪量词的工作方式正好是相反的。
 
3.支配量词：只尝试匹配整个字符串。如果整个字符串不能产生匹配，不做
           进一步尝试，支配量词其实简单的说，就是一刀切。
 
表示这3种量词：
 贪   婪                          惰   性                             支   配                             描   述
    ？                              ？？                                 ？+                              零次或一次出现
    *                               *？                                  *+                               零次或多次出现
    +                               +？                                  ++                               一次或多次出现
    {n}                             {n}？                                {n}+                             恰好n次出现
    {n，m}                          {n，m}？                             {n，m}+                          至少n次枝多m次出现
    {n，}                           {n，}？                              {n，}+                           至少n次出现
贪婪量词测试
<script>
 var str="abbbaabbbaaabbb1234";
 var re1=/.*bbb/g;
 alert(re1.exec(str));
</script>

惰性量词测试
<script>
 var str="abbbaabbbaaabbb1234";
 var re1=/.*?bbb/g;
 alert(re1.exec(str));
</script>

支配性量词测试
<script>
 var str="abbbaabbbaaabbb1234";
 var re1=/.*+bbb/g;
 alert(re1.exec(str));
</script>
由于使用支配性量词不能匹配到任何字符串，所以没有截图。
 







