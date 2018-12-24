# 工作中遇到的问题
- [css连续的纯数字或字母强制换行问题](#css连续的纯数字或字母强制换行问题)
- [img底下3像素距离](#img底下3像素距离)
- [CSS中inline元素可以设置padding和margin吗](#CSS中inline元素可以设置padding和margin吗)

### css连续的纯数字或字母强制换行问题

- 解决
```css
white-space:normal;
word-break:break-all;
```

### img底下3像素距离

- 解决
```css
 vertical-align: top;
```
### CSS中inline元素可以设置padding和margin吗
padding四个方向都可以，margin 只有水平方向可以设置，不能设置宽高
