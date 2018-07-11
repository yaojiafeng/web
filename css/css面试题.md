[css2.1文档](https://www.w3.org/TR/2011/REC-CSS2-20110607/#minitoc)

[css2.2文档](https://www.w3.org/TR/CSS22/)

[css参考手册](http://www.css88.com/book/css/)

### 1. 介绍一下标准的CSS的盒子模型？与低版本IE的盒子模型有什么不同的？
	
	ie8及以上为w3c标准盒子模型标准盒子模型：盒子宽度=内容的宽度（content）+ border + padding + margin;低版本IE盒子模型：盒子宽度=内容宽度（content+border+padding)+ margin;w3c中的内容宽度width=content;低版本ie的内容宽度width=content+border+padding。
	
![标准盒模型](/images/标准盒模型.jpg)

![IE盒子模型](/images/IE盒子模型.jpg)
	
### 2. box-sizing属性？

	可设置值为：content-box|border-box|inherit;
	用来控制元素的盒子模型的解析模式，默认为content-box,context-box：W3C的标准盒子模型，设置元素的 height/width 属性指的是content部分的高/宽;
	border-box：IE传统盒子模型。设置元素的height/width属性指的是border + padding + content部分的高/宽;
	inherit规定应从父元素继承 box-sizing 属性的值。
	
### 3. CSS选择器有哪些？哪些属性可以继承？

***(1)元素选择符：***

	通配符(*)不兼容ie6;
           	 
	id选择符(E#id);
            	  
	类选择符(E.class)ie6不支持多类选择;
	          
	E(类型选择符，即标签名)
	
	
***(2)关系选择符：***
	
	包含选择符(E F);
	
	子选择符(E>F)不兼容ie6;
		  
	相邻选择符(E+F)不兼容ie6;  
	
	兄弟选择符(E~F)不兼容ie6,如：
					
```html
   <style> 
      /* 相邻选择符(E+F) */ 
      p+p{color:#f00;}
      /* 兄弟选择符(E~F) */
      p~p{color:#f00;} 
   </style>
	<p>p1</p> 
	<p>p2</p> 
	<h3>这是一个标题</h3>
	<p>p3</p>
	<h3>这是一个标题</h3>
	<p>p4</p> 
	<p>p5</p>
   <!--此例，如果使用p + p{color:#f00;}，那么p2, p5将会变成红色；如果使用p ~ p{color:#f00;}，那么p2,p3,p4,p5将会变成红色；-->
```

***(3)属性选择器***

	E[att],选择具有att属性的E元素,不兼容ie6
		
	E[att="val"],选择具有att属性且属性值等于val的E元素,不兼容ie6			
						
	E[att~="val"],选择具有att属性且属性值有一个或者多个,其中一个等于val的E元素(包含只有一个值且该值等于val的情况)不兼容ie6，如<div class="a b">3</div>
						
	E[att^="val"],选择具有att属性且属性值为以val开头的字符串的E元素,不兼容ie6
						
	E[att$="val"],选择具有att属性且属性值为以val结尾的字符串的E元素,不兼容ie6
						
	E[att*="val"],选择具有att属性且属性值为包含val的字符串的E元素,不兼容ie6
						
	E[att|="val"],选择具有att属性且属性值为以val开头并用连接符"-"分隔的字符串的E元素，如果属性值仅为val，也将被选择
		  
***(4)伪类选择器:***	

	E:link,设置超链接a在未被访问前的样式
						
	E:visited,设置超链接a在其链接地址已被访问过时的样式
						
	E:hover,设置元素在其鼠标悬停时的样式
						
	E:active,设置元素在被用户激活（在鼠标点击与释放之间发生的事件）时的样式
						
	E:focus,设置对象在成为输入焦点（该对象的onfocus事件发生）时的样式
	
	E:firld-chird,匹配父元素的第一个子元素E
						
	E:lang(fr),匹配使用特殊语言的E元素,如：
						
```html
<!DOCTYPE html>
<html>
	<head>
	<meta charset="utf-8" />
	<title>语言伪类选择符 E:lang(fr)_CSS参考手册_web前端开发参考手册系列</title>
	<meta name="author" content="Joy Du(飘零雾雨), dooyoe@gmail.com, www.doyoe.com" />
	<style>
		p:lang(zh-cmn-Hans) {
			color: #f00;
		}
		p:lang(en) {
			color: #090;
		}
	</style>
	</head>
	<body>
		<p lang="zh-cmn-Hans">大段测试文字</p>
		<p lang="en">english</p>
	</body>
</html>
```
	E:not(s),匹配不含有s选择符的元素E,有了这个选择符，那么你将可以很好的处理类似这样的场景：假定有个列表，每个列表项都有一条底边线，但是最后一项不需要底边线,如：
	 
```css
.demo li:not(:last-child) {
	border-bottom: 1px solid #ddd;
}
```

其余的css3伪类选择器见css3新增的伪类选择器
===

***(5)伪对象选择器:***
		
	E:first-letter/E::first-letter,设置对象内的第一个字符的样式;
	此伪对象仅作用于块对象。内联对象要使用该伪对象，必须先将其设置为块级对象。该伪类常被用来配合font-size属性和float属性制作首字下沉效果。IE6在使用该选择符时有个显式的BUG：选择符与包含规则的花括号之间不能紧挨着，需留有空格或换行。同时还存在该BUG的选择符包括：E:first-lineCSS3将伪对象选择符(Pseudo-Element Selectors)前面的单个冒号(:)修改为双冒号(::)用以区别伪类选择符(Pseudo-Classes Selectors)，但以前的写法仍然有效。即E:first-letter可转化为E::first-letter
	
```html
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
	<head>
	<meta charset="utf-8" />
	<title>E::first-letter_CSS参考手册_web前端开发参考手册系列</title>
	<meta name="author" content="Joy Du(飘零雾雨), dooyoe@gmail.com, www.doyoe.com" />
		<style>
			h1{font-size:16px;}
			p{width:200px;padding:5px 10px;border:1px solid #ddd;font:14px/1.5 simsun,serif,sans-serif;}
			p:first-letter {float:left;font-size:40px;font-weight:bold;line-height:1;}
			p::first-letter {float:left;font-size:40px;font-weight:bold;line-height:1;}
		</style>
	</head>
	<body>
		<h1>杂志常用的首字下沉效果</h1>
		<p>今天，阳光明媚，晴空万里，非常适合户外活动，如踏青、远足之类的。长期坐在办公室的同学们要多注意运动。</p>
	</body>
</html>
```

![效果图](/images/first-letter.jpg)

	E:first-line/E::first-line ,设置对象内的第一行的样式
	
	E:before/E::before,设置在对象前（依据对象树的逻辑结构）发生的内容。用来和content属性一起使用，并且必须定义content属性
	
```html
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
	<head>
	<meta charset="utf-8" />
	<title>E::before_CSS参考手册_web前端开发参考手册系列</title>
	<meta name="author" content="Joy Du(飘零雾雨), dooyoe@gmail.com, www.doyoe.com" />
	<style>
		p{position:relative;color:#f00;font-size:14px;font-size:0\9;*font-size:14px;}
		p:before{position:absolute;background:#fff;color:#000;content:"如果你的能看到这段文字，说明你的浏览器只支持E:before";font-size:14px;}
		p::before{position:absolute;background:#fff;color:#000;content:"如果你的能看到这段文字，说明你的浏览器支持E:before和E::before";font-size:14px;}
	</style>
	</head>
	<body>
		<p>Sorry, 你的浏览器不支持E:before和E::before</p>
	</body>
</html>
```

![效果图](/images/beffore.jpg)

	E:after/E::after ,设置在对象后（依据对象树的逻辑结构）发生的内容。用来和content属性一起使用，并且必须定义content属性
	
	E::placehoder,设置对象文字占位符的样式
	::placeholder 伪元素用于控制表单输入框占位符的外观，它允许开发者/设计师改变文字占位符的样式，默认的文字占位符为浅灰色。当表单背景色为类似的颜色时它可能效果并不是很明显，那么就可以使用这个伪元素来改变文字占位符的颜色。需要注意的是，除了Firefox是 ::[prefix]placeholder，其他浏览器都是使用 ::[prefix]input-placeholder
	
	用法：
	<input type="text" placeholder="占位符" />

	input::-webkit-input-placeholder {
		color: #999;
	}
	
	input:-ms-input-placeholder { // IE10+
		color: #999;
	}
	input:-moz-placeholder { // Firefox4-18
		color: #999;
	}
	input::-moz-placeholder { // Firefox19+
		color: #999;
	}
	
	E::selection ,设置对象被选择时的样式,可以用来设置文字被选中时的样式
	需要注意的是，::selection只能定义被选择时的background-color，color及text-shadow(IE11尚不支持定义该属性)
	
====
	
***可继承的属性:***

	布局(visibility),
	颜色(color,opacity不能继承),
	字体(font,font-style,font-variant,font-weight,font-size, font-family,font-stretch,font-size-adjust), 
	文本(text-transform,white-space,tab-size,word-break,word-wrap,overflow-wrap,text-align,text-align-last,text-justify,word-spacing,text-indent,line-height,letter-spacing,text-size-adjust,文本中的vertical-align没有继承,其他具有),
	文本装饰(text-shadow,text-underline-position,text-decoration-skip),
	书写模式(derection,writing-mode),
	列表(list-style,list-style-image,,list-style-position,list-style-type),
	表格(table-layout,border-collapse,border-spacing,empty-cells),
	内容(quotes),
	用户界面(cursor,zoom,pointer-events),Only IE(scrollbar-3dlight-color,scrollbar-darkshadow-color,scrollbar-highlight-color,scrollbar-shadow-color,scrollbar-arrow-color,scrollbar-face-color,scrollbar-track-color,scrollbar-base-color,filter和behavior没有继承),Only webkit(text-fill0-color,text-stroke,text-stroke-width,text-stroke-color，tap-highlight-color，user-drag)
	不可继承的样式:border, padding, margin, width, height...
	
[css选择器](http://www.css88.com/book/css/selectors/index.htm)

### 4. CSS优先级算法如何计算？

	选择器的特殊性值表述为4个部分,用0,0,0,0表示。

	ID选择器的特殊性值，加0,1,0,0。
  
	类选择器、属性选择器或伪类，加0,0,1,0。
   
	元素和伪元素，加0,0,0,1。
    
	通配选择器*对特殊性没有贡献，即0,0,0,0。
    
	style="" 特殊性值为1,0,0,0
    
	最后比较特殊的一个标志!important（权重），它没有特殊性值，但它的优先级是最高的，为了方便记忆，可以认为它的特殊性值为1,0,0,0,0。
   
	!important声明的样式优先级最高，如果冲突再进行计算。
    
	如果优先级相同，则选择最后出现的样式。
    
	继承得到的样式的优先级最低。
	
	优先级(就近原则):!important > [ id > class > tag ]
	!important 比内联优先级高

### 5. CSS3新增伪类有那些?(CSS伪类是用来添加一些选择器的特殊效果)
   
	E:not(s) 匹配不含有s选择符的元素E
  
	E:root   匹配E元素在文档的根元素。在HTML中，根元素永远是HTML
   
	E:last-child 匹配父元素的最后一个子元素E,要使该属性生效,E元素必须是某个元素的子元素,E的父元素最高是body,即E可以是body的子元素,E必须是它的兄弟元素中的最后一个元素,换言之,E必须是父元素的最后一个子元素,否则无效。
   
	E:only-chird 匹配父元素仅有的一个子元素E
   
	E:nth-child(n) 匹配父元素的第n个子元素E，假设该子元素不是E，则选择符无效,可以使用odd, even实现奇偶,选择父元素的第n个子元素E，如果第n个子元素不是E，则是无效选择符，但n会递增。
    
	E:nth-last-child(n) 匹配父元素的倒数第n个子元素E，假设该子元素不是E，则选择符无效
   
	E:first-of-type 匹配同类型中的第一个同级兄弟元素E,该选择符总是能命中父元素的第1个为E的子元素，不论第1个子元素是否为E
    
	E:last-of-type 匹配同类型中的最后一个同级兄弟元素E,该选择符总是能命中父元素的倒数第1个为E的子元素，不论倒数第1个子元素是否为E
   
	E:only-of-type 匹配同类型中的唯一的一个同级兄弟元素E,该选择符总是能命中父元素的唯一同类型子元素E，不论该元素的位置
   
	E:nth-of-type(n) 匹配同类型中的第n个同级兄弟元素E,该选择符总是能命中父元素的第n个为E的子元素，不论第n个子元素是否为E
    
	E:nth-last-of-type(n) 匹配同类型中的倒数第n个同级兄弟元素E,该选择符总是能命中父元素的倒数第n个为E的子元素，不论倒数第n个子元素是否为E
   
	E:empty 匹配没有任何子元素(包括text节点)的元素
   
	E:checked 匹配用户界面上处于选中状态的元素E(用于input type为radio与checkbox时)
   
	E:enabled 匹配用户界面上处于可用状态的元素E
   
	E:disabled 匹配用户界面上处于禁用状态的元素E 
   
	E:target 匹配相关URL指向的E元素
  
### 6. 如何实现水平居中？如何居中一个浮动元素？如何让绝对定位的div居中？

***水平居中的实现方式***

	1)行内元素
	
		在父元素实现text-align:center
		
	2)定宽块状
		
```css

	div{
		width:960px;
          	margin: 0 auto;
	}
	或:
	div{
		position:absolute;
		width:960px;
          	left:50%;
		margin-left:-480px; 
	}
	或:
	div{
		position:absolute;
		width:960px;
		left:50%;
		margin-left:-480px; 
	}
```
		
	优点:实现方法简单易懂，浏览器兼容性强；
      
	缺点:扩展性差，无法自适应未知项情况
	
	3)不定宽块状
	
		a.直接把元素改为行内元素,既display:inline-block,然后就可以用text-align:center了；缺点:子元素之间由回车符带来的空白间距,(而且这个间距并不是所有浏览器都有),所以需要解决下inline-block带来的间距问题
	
		b.加入table标签，利用table标签的长度自适应性---即不定义其长度也不默认父元素body的长度（table其长度根据其内文本长度决定），因此可以看做一个定宽度块元素，然后再利用定宽度块状居中的margin的方法，使其水平居中。
	
		c.通过给父元素设置 float，然后给父元素设置 position:relative 和 left:50%，子元素设置 position:relative 和 left: -50% 来实现水平居中。我们可以这样理解：假想ul层的父层（即下面例子中的div层）中间有条平分线将ul层的父层（div层）平均分为两份，ul层的css代码是将ul层的最左端与ul层的父层（div层）的平分线对齐；而li层的css代码则是将li层的平分线与ul层的最左端（也是div层的平分线）对齐，从而实现li层的居中。

	4)浮动实现水平居中的方法

	给浮动元素添加一个父元素，并让其宽度等于(多个)浮动元素的宽度(之和)，并且设置margin:0 auto
	
	5）css3的flex实现居中
	
	父元素设置display:flex;justify-content:center

### 7. display有哪些值？说明他们的作用?

	inline(默认)--内联
	none  
	block  
	inline-block
	list-item  
	table  指定对象作为块元素级的表格。类同于html标签<table>(CSS2)
	inline-table 指定对象作为内联元素级的表格。类同于html标签<table>(CSS2)
	table-caption 指定对象作为表格标题。类同于html标签<caption>(CSS2)
	table-cell  指定对象作为表格单元格。类同于html标签<td>(CSS2)
	table-row  指定对象作为表格行。类同于html标签<tr>(CSS2)
	table-row-group  指定对象作为表格行组。类同于html标签<tbody>(CSS2)
	table-column  指定对象作为表格列。类同于html标签<col>(CSS2)
	table-column-group  指定对象作为表格列组显示。类同于html标签<colgroup>(CSS2)
	table-header-group  指定对象作为表格标题组。类同于html标签<thead>(CSS2)
	table-footer-group  指定对象作为表格脚注组。类同于html标签<tfoot>(CSS2)
	run-in  根据上下文决定对象是内联对象还是块级对象。(CSS3)
	box  将对象作为弹性伸缩盒显示。（伸缩盒最老版本）(CSS3)
	inline-box  将对象作为内联块级弹性伸缩盒显示。（伸缩盒最老版本）(CSS3)
	flexbox  将对象作为弹性伸缩盒显示。（伸缩盒过渡版本）(CSS3)
	inline-flexbox  将对象作为内联块级弹性伸缩盒显示。（伸缩盒过渡版本）(CSS3)
	flex  将对象作为弹性伸缩盒显示。（伸缩盒最新版本）(CSS3)
	inline-flex  将对象作为内联块级弹性伸缩盒显示。（伸缩盒最新版本）(CSS3)

### 8. position的值？

	static（默认）：按照正常文档流进行排列；
	relative（相对定位）：不脱离文档流，参考自身静态位置通过 top, bottom, left, right 定位；其他元素还是以它的静态位置为基础排布
	absolute(绝对定位)：参考距其最近一个不为static的父级元素通过top, bottom, left, right 定位；脱离文档流，其他元素当它不存在
	fixed(固定定位)：所固定的参照对像是可视窗口。其他元素当它不存在
	center与absolute一致,但偏移定位是以定位祖先元素的中心点为参考 (支持不高)(css3)
	page 与absolute一致。元素在分页媒体或者区域块内,元素的包含块始终是初始包含块，否则取决于每个absolute模式。(CSS3)支持不高
	sticky：对象在常态时遵循常规流。它就像是relative和fixed的合体，当在屏幕中时按常规流排版，当卷动到屏幕外时则表现如fixed。该属性的表现是现实中你见到的吸附效果。（CSS3）
	
### 9. CSS3有哪些新特性？

	1)css3的新的选择器
  
	2)@Font-face 特性
    
	3)圆角
    
	4)多列布局
   
	5)阴影(shadow)
    
	6)渐变效果
    
	7)弹性盒子模型
   
	8)CSS3制作特效(过渡)
   
	9)媒体查询
	
	10)RGBA和透明度
	
	11)background-image background-origin(content-box/padding-box/border-box) background-size background-repeat
	
	12)word-wrap（对长的不可分割单词换行）word-wrap：break-word
	
	13)文字阴影：text-shadow： 5px 5px 5px #FF0000;（水平阴影，垂直阴影，模糊距离，阴影颜色）
	
	14)font-face属性：定义自己的字体
	
	15)圆角（边框半径）：border-radius 属性用于创建圆角
	
	16)边框图片：border-image: url(border.png) 30 30 round
	
	17)盒阴影：box-shadow: 10px 10px 5px #888888
	
	18)媒体查询：定义两套css，当浏览器的尺寸变化时会采用不同的属性

### 10. 请解释一下CSS3的flex布局,以及适用场景？

***(1)基本概念***

	采用Flex布局的元素，称为Flex容器（flex container），简称”容器”。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称”项目”。
	主要是通过设置的属性值自动调整元素的宽度和高度值，在容器空间充裕的情况下，可以使其填满容器的剩余空间；又或者在容器空间不足的情况下，可以收缩元素的高度和宽度，使其不会溢出容器。使用flex布局，可以灵活的控制元素在容器内的展示。尤其是对于移动端小屏幕来说，flex基本已成了主流的布局方式。
	
![flex](/images/flex.jpg)

	容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

***(2)容器的属性***

- flex-direction
  - flex-direction: row | row-reverse | column | column-reverse;决定主轴的方向(即项目的排列方向)  
- flex-wrap    
  - flex-wrap: nowrap | wrap | wrap-reverse;默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何换行
- flex-flow
  - flex-flow: <flex-direction> || <flex-wrap>;flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap
- justify-content
  - justify-content: flex-start | flex-end | center | space-between | space-around;justify-content属性定义了项目在主轴上的对齐方式
- align-items
  - align-items: flex-start | flex-end | center | baseline | stretch;align-items属性定义项目在交叉轴上如何对齐
- align-content
  - align-content: flex-start | flex-end | center | space-between | space-around | stretch;align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用
  
***(3)项目的属性***

- flex-grow
  - flex-grow: \<number\>; /* default 0 */;flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大,如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍
- flex-shrink
  - flex-shrink: \<number\>; /* default 1 */;flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小,如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。负值对该属性无效。
- flex-basis
  - flex-basis: \<length\> | auto; /* default auto */;flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小
- flex
  - flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ];flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值
- order
  -  order: \<integer\>;order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0
- align-self
  - align-self: auto | flex-start | flex-end | center | baseline | stretch;align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch

### 11 、用纯CSS创建一个三角形的原理是什么？

	首先，需要把元素的宽度、高度设为0。然后设置边框样式。

```css
/*四个三角形*/
.triangle {
    width: 0;
    height: 0;
    border-top: 20px solid #EEB422;
    border-right: 20px solid #C0FF3E;
    border-bottom: 20px solid #A020F0;
    border-left: 20px solid #7CFC00;
}
 /*向上三角形*/
.triangle-up {
    width: 0;
    height: 0;
    border-right: 20px solid transparent;
    border-bottom: 40px solid #A020F0;
    border-left: 20px solid transparent;
}
 /*向下三角形*/
.triangle-down {
    width: 0;
    height: 0;
    border-top: 40px solid #EEB422;
    border-right: 20px solid transparent;
    border-left: 20px solid transparent;
}
 /*向左三角形*/
.triangle-left {
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 40px solid #7CFC00;
}
/*向右三角形*/ 
.triangle-right {
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-right: 40px solid #C0FF3E;
}
 
.triangle-left-bottom {
    width: 0;
    height: 0;
    border-top: 40px solid transparent;
    border-left: 40px solid #7CFC00;
}
 
.triangle-right-bottom {
    width: 0;
    height: 0;
    border-top: 40px solid transparent;
    border-right: 40px solid #C0FF3E;
}
```

### 12.一个满屏品字布局如何设计?

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>满屏品字布局</title>
    <style type="text/css">
        *{
            margin: 0;
            padding: 0;
        }

        html,body{
            height: 100%;/*此设置非常关键，因为默认的body，HTML高度为0，所以后面设置的div的高度无法用百分比显示*/
        }       

        .header{
            height:50%; /*此步结合html,body高度为100%，解决元素相对窗口的定位问题*/
            width: 50%;     
            background: #ccc;           
            margin:0 auto;
        }
        .main{
            width: 100%;
            height: 50%;
            background: #ddd;
        }

        .main .left,.main .right{
            float: left;/*采用float方式，对元素进行左右定位*/
            width:50%;/*此步解决元素相对窗口的定位问题*/
            height:100%;/*此步解决元素相对窗口的定位问题*/
            background: yellow;
        }

        .main .right{
            background: green;
        }
    </style>
</head>
<body>
<div class="header"></div>
<div class="main">
    <div class="left"></div>
    <div class="right"></div>
</div>
</body>
</html>
```

![品字布局](/images/manpin.png)

### 13.常见的css兼容性问题？

***(1)浏览器对标签的默认支持不同***
	
a.了解标签的默认样式

```css
/*块级元素*/
html, body,  div,ol, p, ul,  h1, h2,h3,h4,h5, h6,address,blockquote, form,dd,dl, dt, fieldset, frame, frameset,noframes,center, dir, hr, menu, pre  { display: block }
 
/*列表元素类*/
li{ display:list-item }
ol{list-style-type: decimal }
ol ul, ul ol,ul ul, ol ol  { margin-top: 0; margin-bottom: 0 }
ol, ul{ margin-left: 40px }
 
/*预格式文本类*/
i, cite, em,var, address{ font-style: italic }
big{ font-size:1.17em }
small, sub, sup{ font-size: .83em }
sub{ vertical-align:sub }
sup{ vertical-align:super }
s, strike, del{ text-decoration: line-through }
u, ins{ text-decoration:underline }
/*标题类*/
h1{ font-size:2em; margin: .67em 0 }
h2{ font-size:1.5em; margin: .75em 0 }
h3{ font-size:1.17em; margin: .83em 0 }
h4, p,blockquote, ul,fieldset, form,ol, dl, dir,menu { margin: 1.12em 0}
h5 { font-size:.83em; margin: 1.5em 0 }
h6{ font-size:.75em; margin: 1.67em 0 }
h1, h2, h3, h4,h5, h6, b,strong  { font-weight: bolder }
/*伪类*/
br:before{ content: ”\A” }
:before, :after{ white-space: pre-line }
:link, :visited { text-decoration: underline }
:focus{ outline: thin dotted invert }
/*表格类*/
table{ display: table }
tr{ display:table-row }
thead{ display:table-header-group }
tbody{ display:table-row-group }
tfoot{ display:table-footer-group }
col{ display:table-column }
colgroup{ display:table-column-group }
td, th{ display: table-cell;}
caption{ display: table-caption }
th{font-weight: bolder; text-align: center }
caption{ text-align: center }
table{ border-spacing: 2px;}
thead, tbody,tfoot { vertical-align:middle }
td, th { vertical-align:inherit }
/*其它元素*/
head{ display: none }
body{ margin: 8px;line-height: 1.12 }     
button, textarea,input, object,select  { display:inline-block;}
blockquote{ margin-left: 40px;margin-right: 40px }
pre, tt, code,kbd, samp  { font-family: monospace }
pre{ white-space: pre}
hr{ border: 1px inset }
center{ text-align: center }
abbr, acronym{ font-variant: small-caps; letter-spacing:0.1em }
BDO[DIR="ltr"]  { direction: ltr; unicode-bidi:bidi-override }
BDO[DIR="rtl"]  { direction: rtl; unicode-bidi:bidi-override }
/*定义BDO元素当其属性为DIR="ltr/rtl"时的默认文本读写显示顺序*/
*[DIR="ltr"]{ direction: ltr;unicode-bidi: embed }
*[DIR="rtl"] { direction: rtl;unicode-bidi: embed }
/*定义任何元素当其属性为DIR="rtl/rtl"时的默认文本读写显示顺序*/
 @media print {
       h1{page-break-before: always }
       h1, h2, h3,h4, h5, h6    { page-break-after: avoid }
       ul, ol, dl{ page-break-before: avoid }
  } /*定义标题和列表默认的打印样式*/
```

b.了解浏览默认样式类

	不同的浏览器默认的样式可能不尽相同，所以开发时的第一件事可能就是如何把它们统一。如果没对CSS初始化往往会出现浏览器之间的页面差异。

	1).页边距

		IE默认为10px，通过body的margin属性设置
		FF默认为8px，通过body的padding属性设置

	2).段间距

		IE默认为19px，通过p的margin-top属性设置
		FF默认为1.12em，通过p的margin-bottom属性设置

	3).标题样式

		h1~h6默认加粗显示：font-weight:bold;
		
	4).列表样式
	
		IE默认为40px，通过ul、ol的margin属性设置
		FF默认为40px，通过ul、ol的padding属性设置
		dl无缩进，但起内部的说明元素dd默认缩进40px，而名称元素dt没有缩进。

	5).元素居中

		IE默认为text-align:center;
		FF默认为margin-left:auto;margin-right:auto;

	6).超链接<a>样式

		a样式默认带有下划线，显示颜色为蓝色，被访问过的超链接变紫色

	7).鼠标样式

		IE默认为cursor:hand;
		FF默认为cursor:pointer;该声明在IE中也有效

	8).图片链接样式
	
		IE默认为紫色2px的边框线
		FF默认为蓝色2px的边框线　　
	
	解决方案：css reset
		
```css
/*reset*/
@charset "UTF-8";
/*css 初始化 */
html, body, ul, li, ol, dl, dd, dt, p, h1, h2, h3, h4, h5, h6, form, fieldset, legend, img {
    margin: 0;
    padding: 0;
}

fieldset, img, input, button {
    border: none;
    padding: 0;
    margin: 0;
    outline-style: none;
}

ul, ol {
    list-style: none;
}

input {
    padding-top: 0;
    padding-bottom: 0;
    font-family: "SimSun", "宋体";
}

select, input {
    vertical-align: middle;
}

select, input, textarea {
    font-size: 12px;
    margin: 0;
}
textarea {
    resize: none;
}

/*防止拖动*/
img {
    border: 0;
    vertical-align: middle;
}

/*  去掉图片低测默认的3像素空白缝隙*/
table {
    border-collapse: collapse;
}

body {
    font: 12px/150% Arial, Verdana, "\5b8b\4f53";
    color: #666;
    background: #fff
}
h1, h2, h3, h4, h5, h6 {
    text-decoration: none;
    font-weight: normal;
    font-size: 100%;
}

s, i, em {
    font-style: normal;
    text-decoration: none;
}


/*淘宝reset*/
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; }
    body, button, input, select, textarea { font:12px/1.5tahoma, arial, \5b8b\4f53; }
    h1, h2, h3, h4, h5, h6{ font-size:100%; }
    address, cite, dfn, em, var { font-style:normal; }
    code, kbd, pre, samp { font-family:couriernew, courier, monospace; }
    small{ font-size:12px; }
    ul, ol { list-style:none; }
    a { text-decoration:none; }
    a:hover { text-decoration:underline; }
    sup { vertical-align:text-top; }
    sub{ vertical-align:text-bottom; }
    legend { color:#000; }
    fieldset, img { border:0; }
    button, input, select, textarea { font-size:100%; }
    table { border-collapse:collapse; border-spacing:0; }
```

***(2)IE6双边距bug***

	问题：块属性标签添加了浮动float之后，若在浮动方向上也有margin值，则margin值会加倍。
	
```html
<html>
              <head>
                      <style>
                            body{
                                    margin:0px;
                                    padding:0px;
                            }
                            #box{
                                    float:left;
                                    margin:10px;
                                    width:200px;
                                    height:200px;
                                    background:#696969;
                            }
                      </style>
              </head>
              <body>
                       <div id="box"></div>
              </body>
    </html>
```
左一chrome,中间firefox,右边ie6

![chrome](/images/chrome.jpg) ![firefox](/images/firefox.jpg) ![ie6](/images/ie6.jpg)

解决方案：

	1.给float元素添加_display：inline 即可正常显示,因为在IE7以及IE7以上的IE版本中，这个双边距的bug已经修正，前缀符号"_"只有IE6能够识别，所以只需要让IE6去设置这个属性就足以。 

	2.对IE6进行 _margin-left:5px;
	
***(3)行内属性标签，为了设置宽高，我们经常就会设置成display：block; 又有float,这样一来就产生ie6双边距问题***

	解决方案：在display:block;后面加入display:inline;display:table;
	(display：inline; 但是这样一来我们就不能设置宽高了，所以呢需要再加个 display:table;所以你设置display:block后，再添上display:inline和display:table)
	
***(4)img标签在ie中的兼容问题***

	问题：img是行内的，一般都会紧接着排放，但是在ie中会出现个间距
	
	解决方案：
	
***(5)(8)chrome下默认会将小于12px的文本强制按照12px来解析***

	解决方案:为其添加 -webkit-text-size-adjust: none;
	
***(6)CSS控制透明度问题***

	解决方案：设置属性值兼容ie
	
```css
.alpha{
  opacity:0.6;
  filter:alpha(opacity=60)
}
```

***(7)有些时候图片下方会出现一条间隙，通常会出现在FF和IE6下面比如***

```html
<div><img src="1.jpg"/></div>
```

	解决方案：给img添加vertical-align属性，如：

```css
img{verticle-align:middle;}
```

***(8)IE6下div高度无法小于10px***

问题如：

	正常：

![2px](/images/2px.jpg)

	ie6:
	
![2px2](/images/2px2.jpg)

解决方案：添加overflow属性或设置fontsize大小为高度大小  如

```html
<div style="height:2px;overflow:hidden;background:#000000;width:778px;"></div>
<!--或者-->
<div style="height:2px;font-size:2px;background:#000000;width:778px;">&nbps;</div>
```

### 14. absolute的containing block计算方式跟正常流有什么不同？

***containing block 概念***

[containing block 参考](https://www.w3.org/TR/CSS2/visudet.html)

	有时，一个元素的盒子的位置和尺寸根据一个确定的矩形计算，这个确定的矩形叫这个元素的包含块。一个元素的包含块根据以下规则确定：
	
	1、根元素所在的包含块叫初始包含块 initial containing block。对于连续媒体设备（continuous media），初始包含块的大小等于视口viewport的大小，基点在画布的原点（视口左上角）；对于分页媒体（paged media），初始包含块是页面区域（page area）。初始包含块的direction属性与根元素的相同。

	2、对于其他元素，如果元素的position属性是relative或static，他的包含块是由最近的祖先块容器盒（block container ancestor box）的内容区域（content edge：width属性和height属性确定的区域）创建的。

	3、如果一个元素的position属性为fixed，他的包含块由视口创建（连续媒体）或者由页面区域创建（paged media）。

	4、如果元素的position为absolute，他的包含块由最近的position不为static的祖先元素创建，具体创建方式如下：

		A.如果创建包含块的祖先元素是行内元素（inline element），包含块的范围是这个祖先元素中的第一个和最后一个行内盒的padding box围起来的区域。

		B.如果这个祖先元素不是行内元素，包含块的范围是这个祖先元素的内边距+width区域（padding edge）。

	如果没有找到这样的祖先元素，这个绝对定位的元素的包含块为初始包含块。
	
下面的文档中没有定位的元素

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
<HTML>
   <HEAD>
      <TITLE>Illustration of containing blocks</TITLE>
   </HEAD>
   <BODY id="body">
      <DIV id="div1">
      	<P id="p1">This is text in the first paragraph...</P>
      	<P id="p2">This is text <EM id="em1"> in the 
     	 <STRONG id="strong1">second</STRONG> paragraph.</EM></P>
      </DIV>
   </BODY>
</HTML>
```

包含块的创建如下表：

<table>
        <tr>
            <th>元素</th>
            <th>创建其包含块的元素</th>
        </tr>
        <tr>
            <th>html</th>
            <th>initial C.B.(UA-dependent)</th>
        </tr>
        <tr>
            <th>body</th>
            <th>html</th>
        </tr>
        <tr>
            <th>div1</th>
            <th>body</th>
        </tr>
	<tr>
            <th>p1</th>
            <th>div1</th>
        </tr>
	<tr>
            <th>p2</th>
            <th>div1</th>
        </tr>
	<tr>
            <th>em1</th>
            <th>p2</th>
        </tr>
	<tr>
            <th>strong1</th>
            <th>p2</th>
        </tr>
    </table>
    
如果添加以下CSS规则：

```css
 #div1  { position: absolute; left: 50px; top: 50px }
 #em1  { position: absolute; left: 100px; top: 100px }
```

包含块的创建如下表：

<table>
        <tr>
            <th>元素</th>
            <th>创建其包含块的元素</th>
        </tr>
        <tr>
            <th>html</th>
            <th>initial C.B. (UA-dependent)</th>
        </tr>
        <tr>
            <th>body</th>
            <th>html</th>
        </tr>
        <tr>
            <th>div1</th>
            <th>initial C.B.</th>
        </tr>
	<tr>
            <th>p1</th>
            <th>div1</th>
        </tr>
	<tr>
            <th>p2</th>
            <th>div1</th>
        </tr>
	<tr>
            <th>em1</th>
            <th>div1</th>
        </tr>
	<tr>
            <th>strong1</th>
            <th>em1</th>
        </tr>
    </table>

### 16. CSS里的visibility属性有个collapse属性值？在不同浏览器下以后什么区别？

	当一个元素的visibility属性被设置成collapse值后，对于一般的元素，它的表现跟hidden是一样的。
	
> chrome中，使用collapse值和使用hidden没有区别。

> firefox，opera和IE，使用collapse值和使用display:none没有什么区别。

17、 display:none与visibility：hidden的区别？

display：none 不显示对应的元素，在文档布局中不再分配空间（回流+重绘）

visibility：hidden 隐藏对应元素，在文档布局中仍保留原来的空间（重绘）

18、 position跟display、overflow、float这些特性相互叠加后会怎么样？

display属性规定元素应该生成的框的类型；position属性规定元素的定位类型；float属性是一种布局方式，定义元素在哪个方向浮动。

类似于优先级机制：position：absolute/fixed优先级最高，有他们在时，float不起作用，display值需要调整。float 或者absolute定位的元素，
只能是块元素或表格。

19、 对BFC规范(块级格式化上下文：block formatting context)的理解？

BFC规定了内部的Block Box如何布局。

定位方案：

➤内部的Box会在垂直方向上一个接一个放置。

➤Box垂直方向的距离由margin决定，属于同一个BFC的两个相邻Box的margin会发生重叠。

➤每个元素的margin box 的左边，与包含块border box的左边相接触。

➤BFC的区域不会与float box重叠。

➤BFC是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。

➤计算BFC的高度时，浮动元素也会参与计算。

满足下列条件之一就可触发BFC

➤根元素，即html

➤float的值不为none（默认）

➤overflow的值不为visible（默认）

➤display的值为inline-block、table-cell、table-caption

➤position的值为absolute或fixed

20、 为什么会出现浮动和什么时候需要清除浮动？清除浮动的方式？

浮动元素碰到包含它的边框或者浮动元素的边框停留。由于浮动元素不在文档流中，所以文档流的块框表现得就像浮动框不存在一样。

浮动元素会漂浮在文档流的块框上。

浮动带来的问题：

➤父元素的高度无法被撑开，影响与父元素同级的元素

➤与浮动元素同级的非浮动元素（内联元素）会跟随其后

➤若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构。

清除浮动的方式：

➤父级div定义height

➤最后一个浮动元素后加空div标签 并添加样式clear:both。

➤包含浮动元素的父标签添加样式overflow为hidden或auto。

➤父级div定义zoom

21、 上下margin重合的问题

在重合元素外包裹一层容器，并触发该容器生成一个BFC。

例子：

<div class="aside"></div><div class="text"> <div class="main"></div></div><!--下面是css代码-->
.aside {

margin-bottom: 100px; width: 100px;

height: 150px;

background: #f66; }

.main {

margin-top: 100px;

height: 200px;

background: #fcc; }

.text{

/*盒子main的外面包一个div，

通过改变此div的属性使两个

盒子分属于两个不同的BFC，

以此来阻止margin重叠*/overflow: hidden;

//此时已经触发了BFC属性。}

22、设置元素浮动后，该元素的display值是多少？

自动变成display:block

23 、移动端的布局用过媒体查询吗？

通过媒体查询可以为不同大小和尺寸的媒体定义不同的css，适应相应的设备的显示。

➤<head>里边

<link rel="stylesheet" type="text/css" href="xxx.css" media="only screen and (max-device-width:480px)">

➤CSS : @media only screen and (max-device-width:480px) {/css样式/}

24 、使用 CSS 预处理器吗？

Less sass

25、 CSS优化、提高性能的方法有哪些？

➤避免过度约束

➤避免后代选择符

➤避免链式选择符

➤使用紧凑的语法

➤避免不必要的命名空间

➤避免不必要的重复

➤最好使用表示语义的名字。一个好的类名应该是描述他是什么而不是像什么

➤避免！important，可以选择其他选择器

➤尽可能的精简规则，你可以合并不同类里的重复规则

26 、浏览器是怎样解析CSS选择器的？
CSS选择器的解析是从右向左解析的。若从左向右的匹配，发现不符合规则，需要进行回溯，会损失很多性能。
若从右向左匹配，先找到所有的最右节点，对于每一个节点，向上寻找其父节点直到找到根元素或满足条件的匹配规则，则结束这个分支的遍历。
两种匹配规则的性能差别很大，是因为从右向左的匹配在第一步就筛选掉了大量的不符合条件的最右节点（叶子节点），而从左向右的匹配规则的性能都浪费在了失败的
查找上面。而在 CSS 解析完毕后，需要将解析的结果与 DOM Tree 的内容一起进行分析建立一棵 Render Tree，最终用来进行绘图。在建立 Render Tree 时
（WebKit 中的「Attachment」过程），浏览器就要为每个 DOM Tree 中的元素根据 CSS 的解析结果（Style Rules）来确定生成怎样的Render Tree。

27、 在网页中的应该使用奇数还是偶数的字体？为什么呢？

使用偶数字体。偶数字号相对更容易和 web 设计的其他部分构成比例关系。Windows 自带的点阵宋体（中易宋体）从 Vista 开始只提供 12、14、16 px 这三个大小的
点阵，而 13、15、17 px时用的是小一号的点。（即每个字占的空间大了 1 px，但点阵没变），于是略显稀疏。

28、 margin和padding分别适合什么场景使用？

何时使用margin：

➤需要在border外侧添加空白

➤空白处不需要背景色

➤上下相连的两个盒子之间的空白，需要相互抵消时。

何时使用padding：

➤需要在border内侧添加空白

➤空白处需要背景颜色

➤上下相连的两个盒子的空白，希望为两者之和。

兼容性的问题：在IE5 IE6中，为float的盒子指定margin时，左侧的margin可能会变成两倍的宽度。通过改变padding或者指定盒子的display：inline解决。

29、 元素竖向的百分比设定是相对于容器的高度吗？

当按百分比设定一个元素的宽度时，它是相对于父容器的宽度计算的，但是，对于一些表示竖向距离的属性，例如 padding-top , padding-bottom , margin-top ,
 margin-bottom 等，当按百分比设定它们时，依据的也是父容器的宽度，而不是高度。

30、 全屏滚动的原理是什么？用到了CSS的哪些属性？

➤原理：有点类似于轮播，整体的元素一直排列下去，假设有5个需要展示的全屏页面，那么高度是500%，只是展示100%，剩下的可以通过transform进行y轴定位，也可以通过margin-top实现

➤overflow：hidden；transition：all 1000ms ease；

31、 什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的IE？

响应式网站设计(Responsive Web design)是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本。

基本原理是通过媒体查询检测不同的设备屏幕尺寸做处理。

页面头部必须有meta声明的viewport。

<meta name=’viewport’
content=”width=device-width,

initial-scale=1. maximum-scale=1,

user-scalable=no”>

32、 视差滚动效果？

视差滚动（Parallax Scrolling）通过在网页向下滚动的时候，控制背景的移动速度比前景的移动速度慢来创建出令人惊叹的3D效果。

➤CSS3实现

优点：开发时间短、性能和开发效率比较好，缺点是不能兼容到低版本的浏览器

➤jQuery实现

通过控制不同层滚动速度，计算每一层的时间，控制滚动效果。

优点：能兼容到各个版本的，效果可控性好

缺点：开发起来对制作者要求高

➤插件实现方式

例如：parallax-scrolling，兼容性十分好

33、 ::before 和 :after中双冒号和单冒号有什么区别？解释一下这2个伪元素的作用

➤单冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素。

➤::before就是以一个子元素的存在，定义在元素主体内容之前的一个伪元素。并不存在于dom之中，只存在在页面之中。

:before 和 :after 这两个伪元素，是在CSS2.1里新出现的。起初，伪元素的前缀使用的是单冒号语法，但随着Web的进化，在CSS3的规范里，伪元素的语法被修改成使用双冒号，成为::before ::after

34 、你对line-height是如何理解的？

行高是指一行文字的高度，具体说是两行文字间基线的距离。CSS中起高度作用的是height和line-height，没有定义height属性，最终其表现作用一定是line-height。

单行文本垂直居中：把line-height值设置为height一样大小的值可以实现单行文字的垂直居中，其实也可以把height删除。

多行文本垂直居中：需要设置display属性为inline-block。

35 、怎么让Chrome支持小于12px 的文字？

p{
font-size:10px;

-webkit-transform:scale(0.8);

}

//0.8是缩放比例

36、让页面里的字体变清晰，变细用CSS怎么做？

-webkit-font-smoothing在window系统下没有起作用，但是在IOS设备上起作用-webkit-font-smoothing：antialiased是最佳的，灰度平滑。

37、position:fixed;在android下无效怎么处理？

<meta name="viewport"
content="width=device-width,

initial-scale=1.0,

maximum-scale=1.0,

minimum-scale=1.0,

user-scalable=no"/>

38、如果需要手动写动画，你认为最小时间间隔是多久，为什么？

多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60＊1000ms ＝ 16.7ms。

39、 li与li之间有看不见的空白间隔是什么原因引起的？有什么解决办法？

行框的排列会受到中间空白（回车空格）等的影响，因为空格也属于字符,这些空白也会被应用样式，占据空间，所以会有间隔，把字符大小设为0，就没有空格了。

解决方法：

➤可以将<li>代码全部写在一排

➤浮动li中float：left

➤在ul中用font-size：0（谷歌不支持）；可以使用letter-space：-3px

40、 display:inline-block 什么时候会显示间隙？

➤有空格时候会有间隙 解决：移除空格

➤margin正值的时候 解决：margin使用负值

➤使用font-size时候 解决：font-size:0、letter-spacing、word-spacing

41、 有一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度

外层div使用position：relative；高度要求自适应的div使用position: absolute; top: 100px; bottom: 0; left: 0

42、 png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过webp？

➤png是便携式网络图片（Portable Network Graphics）是一种无损数据压缩位图文件格式.优点是：压缩比高，色彩好。 大多数地方都可以用。

➤jpg是一种针对相片使用的一种失真压缩方法，是一种破坏性的压缩，在色调及颜色平滑变化做的不错。在www上，被用来储存和传输照片的格式。

➤gif是一种位图文件格式，以8位色重现真色彩的图像。可以实现动画效果.

➤webp格式是谷歌在2010年推出的图片格式，压缩率只有jpg的2/3，大小比png小了45%。缺点是压缩的时间更久了，兼容性不好，目前谷歌和opera支持。

43、 style标签写在body后与body前有什么区别？

页面加载自上而下 当然是先加载样式。

写在body标签后由于浏览器以逐行方式对HTML文档进行解析，当解析到写在尾部的样式表（外联或写在style标签）会导致浏览器停止之前的渲染，等待加载且解析样式表完成之后重新渲染，在windows的IE下可能会出现FOUC现象（即样式失效导致的页面闪烁问题）

44 、CSS属性overflow属性定义溢出元素内容区的内容会如何处理?

参数是scroll时候，必会出现滚动条。

参数是auto时候，子元素内容大于父元素时出现滚动条。

参数是visible时候，溢出的内容出现在父元素之外。

参数是hidden时候，溢出隐藏。

45 、阐述一下CSS Sprites

将一个页面涉及到的所有图片都包含到一张大图中去,然后利用CSS的 background-image,background- repeat,background-position 的组合进行背景定位。
利用CSS Sprites能很好地减少网页的http请求，从而大大的提高页面的性能；CSS Sprites能减少图片的字节。
