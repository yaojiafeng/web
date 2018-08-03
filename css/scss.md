# scss有什么好处？

### 1.@import导入

- css有一个特别不常用的特性，即@import规则，它允许在一个css文件中导入其他css文件。然而，后果是只有执行到@import时，浏览器才会去下载其他css文件，这导致页面加载起来特别慢。

- sass也有一个@import规则，但不同的是，sass的@import规则在生成css文件时就把相关文件导入进来。另外，所有在被导入文件中定义的变量和混合器均可在导入文件中使用。

- 导入其他文件（@import ）有几种方式
   - @import 'theme/nice.scss';
   - @import 'theme/_nice';文件名前加_,可省略.scss后缀名
   - 嵌套导入,只在导入的范围有效
- scss支持原生css导入（下列情形之一）
  - 被导入文件的名字以.css结尾；
  - 被导入文件的名字是一个URL地址
  - 被导入文件的名字是CSS的url()值。
  
### 2.使用变量
  
- 变量申明
```css
  $highlight-color: #F90;
```
任何可以用作css属性值的赋值都 可以用作sass的变量值
  
- 变量引用
```css
$nav-color: #F90;
nav {
   $width: 100px;
   width: $width;
   color: $nav-color;
}
```
凡是css属性的标准值（比如说1px或者bold）可存在的地方，变量就可以使用

### 3.嵌套

- 选择器嵌套
- 属性嵌套

### 4.混合器

- @mixin, 混合器中不仅可以包含属性，也可以包含css规则，包含选择器和选择器中的属性
```css
//定义
@mixin bg-color ($color){
    background: $color;
    display: flex;
}
//使用
h1{
    height: 10px;
    @include bg-color($color:green)
}
```

### 5.选择器继承

- 选择器继承是说一个选择器可以继承为另一个选择器定义的所有样式
```css
//通过选择器继承继承样式
.error {
  border: 1px solid red;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
```
### 6.操作符




  
 
