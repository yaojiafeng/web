# 工作中遇到的问题

### 1.css连续的纯数字或字母强制换行问题

- 解决
```css
white-space:normal;
word-break:break-all;
```

### 2.img底下3像素距离

- 解决
```css
 vertical-align: top;
```
### 3.各种浏览器对基本元素的内置实现样式不一，需要reset

### 4.CSS 中 inline 元素可以设置 padding 和 margin 吗?
padding四个方向都可以，margin 只有水平方向可以设置，不能设置宽高
