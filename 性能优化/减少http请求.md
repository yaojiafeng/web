***减少http请求能大大加快响应时间***

#### 1.图片地图

#### 2.css sprites

    将多张图片合在一张图片上，合并后的图片比分开的图片总和要小，使用时用backgroung-image:url('xxx.jpg')引进来，再利用background-position属性定位，能大大加快响应速度，
    
如：
    
```css
.birth-icon{
    background: url("/images/icon/sprite.png")-20px -0px no-repeat;
}
```

#### 3.内联图片

    可以通过data:url模式将图片包含进来，而不产生额外的http请求。
    
格式：

    data:[mediaType][;base64],<data>
    
    

#### 4.合并js和css脚本
   


