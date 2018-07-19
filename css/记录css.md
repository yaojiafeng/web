
### z-index无效

在CSS中，只能通过代码改变层级，这个属性就是z- index，要让z-index起作用的前提，就是元素的position属性要是relative，absolute或是fixed。
1.第一种情况（z-index无论设置多高都不起作用情况）：
这种情况发生的条件有三个：
1、父标签 position属性为relative；
2、问题标签无position属性（不包括static）；
3、问题标签含有浮动(float)属性。
eg:z-index层级不起作用，浮动会让z-index失效，代码如下:
1	<</code>DIV style="POSITION: relative; Z-INDEX: 9999"> 
2	<</code>IMG style="FLOAT: left" src="http://www.yuanchuang.net/uploads/allimg/131101/1A5494I0-0.jpg"> 
3	</</code>DIV>
解决办法有三个（任一即可）：

1、position:relative改为position:absolute；
2、浮动元素添加position属性（如relative，absolute等）；
3、去除浮动。

2.第二种情况

IE6下，层级的表现有时候不是看子标签的z-index多高，而要看整个DOM tree（节点树）的第一个relative属性的父标签的层级。

eg:IE7与IE6有着同样的bug，原因很简单，虽然图片所在div当前的老爸层级很高(1000)，但是由于老爸的老爸不顶用，可怜了9999如此强势的孩子没有出头之日啊！，代码如下:

1	<</code>DIV style="POSITION: relative"> 
2	<</code>DIV style="POSITION: relative; Z-INDEX: 1000"> 
3	<</code>DIV style="POSITION: absolute; Z-INDEX: 9999"> <</code>IMG src="http://www.yuanchuang.net/uploads/allimg/131101/1A3194V7-1.jpg"> </</code>DIV> 
4	</</code>DIV> 
5	</</code>DIV>
解决办法： 在第一个relative属性加上一个更高的层级（z-index:1），代码如下:

1	<</code>DIV style="POSITION: relative; Z-INDEX: 1"> 
2	<</code>DIV style="POSITION: relative; Z-INDEX: 1000"> 
3	<</code>DIV style="POSITION: absolute; Z-INDEX: 9999"> <</code>IMG src="http://www.yuanchuang.net/uploads/allimg/131101/1A3194V7-1.jpg"> </</code>DIV> 
4	</</code>DIV> 
5	</</code>DIV>

三、:after,:before
定义和用法
:after 选择器在被选元素的内容后面插入内容。
请使用 content 属性来指定要插入的内容。
在P标签内容后面加上"台词"
p:after
{ 
content:"台词：";
}
：before用法类似。

四、利用@media screen实现网页布局的自适应

优点:无需插件和手机主题,对移动设备友好,能够适应各种窗口大小。只需在CSS中添加@media screen属性,根据浏览器宽度判断并输出不同的长宽值

1280分辨率以上（大于1200px）

@media screen and (min-width:1200px){
    #page{ width: 1100px; }#content,.div1{width: 730px;}#secondary{width:310px}
}
 
1100分辨率（大于960px，小于1199px）

@media screen and (min-width: 960px) and (max-width: 1199px) {
    #page{ width: 960px; }#content,.div1{width: 650px;}#secondary{width:250px}select{max-width:200px}
}
 
880分辨率（大于768px，小于959px）

@media screen and (min-width: 768px) and (max-width: 959px) {
    #page{ width: 900px; }#content,.div1{width: 620px;}#secondary{width:220px}select{max-width:180px}
}
 
720分辨率（大于480px，小于767px）

@media only screen and (min-width: 480px) and (max-width: 767px){
    #page{ width: 450px; }#content,.div1{width: 420px;position: relative; }#secondary{display:none}#access{width: 450px; }#access a {padding-right:5px}#access a img{display:none}#rss{display:none}#branding #s{display:none}
}
 
440分辨率以下（小于479px）

@media only screen and (max-width: 479px) {
    #page{ width: 300px; }#content,.div1{width: 300px;}#secondary{display:none}#access{width: 330px;} #access a {padding-right:10px;padding-left:10px}#access a img{display:none}#rss{display:none}#branding #s{display:none}#access ul ul a{width:100px}
} 
