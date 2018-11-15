***性能优化可以从两个大的层面考虑：***

## 1.优化加载页面性能 

## 2.页面渲染性能优化

## 目录
- [减少http请求](#减少http请求)

- [使用CDN](#使用CDN)

- [添加Expires头](#添加Expires头)

- [减少repaint和reflow](#减少repaint和reflow)

- [css注意事项](#css注意事项)

### 减少http请求

- 图片地图

- css sprites

    将多张图片合在一张图片上，合并后的图片比分开的图片总和要小，使用时用backgroung-image:url('xxx.jpg')引进来，再利用background-position属性定位，能大大加快响应速度，
    
如：
    
```css
.birth-icon{
    background: url("/images/icon/sprite.png")-20px -0px no-repeat;
}
```

- 内联图片

    可以通过data:url模式将图片包含进来，而不产生额外的http请求。
    
格式：

    data:[mediaType][;base64],<data>
    
如：

```html
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAAmCAYAAAAIjkMFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkJFOTk4RTk5OENGMTFFNEIwMThBRTk0Q0E0REMyMTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkJFOTk4RUE5OENGMTFFNEIwMThBRTk0Q0E0REMyMTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQkU5OThFNzk4Q0YxMUU0QjAxOEFFOTRDQTREQzIxMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQkU5OThFODk4Q0YxMUU0QjAxOEFFOTRDQTREQzIxMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkMP5XYAAAX/SURBVHja7Fv/caM6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" title="YAO JIAFENG official site">
```   

- 合并js和css脚本

      可使用工具来实现：gulp,grunt...
   
 
 
### 使用CDN

CDN 的全称是Content Delivery Network，即内容分发网络。其目的是通过在现有的Internet中增加一层新的网络架构，将网站的内容发布到最接近用户的网络"边缘"，使用户可 以就近取得所需的内容，解决 Internet网络拥挤的状况，提高用户访问网站的响应速度。

目前的CDN服务主要应用于证券、金融保险、ISP、ICP、网上交易、门户网站、大中型公司、网络教学等领域。另外在行业专网、互联网中都可以用到，甚至可以对局域网进行网络优化。利用CDN，这些网站无需投资昂贵的各类服务器、设立分站点，特别是流媒体信息的广泛应用、远程教学课件等消耗带宽资源多的媒体信息，应用CDN网络，把内容复制到网络的最边缘，使内容请求点和交付点之间的距离缩至最小，从而促进Web站点性能的提高，具有重要的意义。CDN网络的建设主要有企业建设的CDN网络，为企业服务；IDC的CDN网络，主要服务于IDC和增值服务；网络运营上主建的CDN网络，主要提供内容推送服务；CDN网络服务商，专门建设的CDN用于做服务，用户通过与CDN机构进行合作，CDN负责信息传递工作，保证信息正常传输，维护传送网络，而网站只需要内容维护，不再需要考虑流量问题。

    CDN适合发布静态内容，如图片，脚本样式表和Flash。
  
    缺点：响应时间受其他网站的影响。
    

### 添加Expires头
...

### 减少repaint和reflow
- 不要一条一条地修改 DOM 的样式。与其这样，还不如预先定义好 css 的 class，然后修改 DOM 的 className。 
- 不要把 DOM 结点的属性值放在一个循环里当成循环里的变量。 
- 为动画的 HTML 元件使用 fixed 或 absoult 的 position，那么修改他们的 CSS 是不会 reflow 的。 
- 千万不要使用 table 布局。因为可能很小的一个小改动会造成整个 table 的重新布局。
### css注意事项
css选择符是从右到左进行匹配的。所以，#nav li 我们以为这是一条很简单的规则，秒秒钟就能匹配到想要的元素，所以，会去找所有的li，然后再去确定它的父元素是不是#nav。因此，写css的时候需要注意：
- 重复代码抽离出来
- dom深度尽量浅。
- 减少inline javascript、css的数量。
- 使用现代合法的css属性。
- 不要为id选择器指定类名或是标签，因为id可以唯一确定一个元素。
- 避免后代选择符，尽量使用子选择符。原因：子元素匹配符的概率要大于后代元素匹配符。后代选择符;#tp p{} 子选择符：#tp>p{}
避免使用通配符，举一个例子，.mod .hd *{font-size:14px;} 根据匹配顺序,将首先匹配通配符,也就是说先匹配出通配符,然后匹配.hd（就是要对dom树上的所有节点进行遍历他的父级元素）,然后匹配.mod,这样的性能耗费可想而知.



- [规则四：压缩组件]

- [规则五：将样式表放在顶部]

- [规则六：将脚本放在底部]

- [规则七：避免css表达式]

- [规则八：使用外部的javascript和css]

- [规则九：减少dns查找]

- [规则十：精简javascript]

- [规则十一：避免重定向]

- [规则十二：移除重复脚本]

- [规则十三：配置Etag]

- [规则十四：使用Ajax可缓存]





