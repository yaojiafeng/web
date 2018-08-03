# scss有什么好处？

- 导入其他文件（@import ）有几种方式
   - @import 'theme/nice.scss';
   - @import 'theme/_nice';文件名前加_,可省略.scss后缀名
   - 嵌套导入,只在导入的范围有效
- scss支持原生css导入（下列情形之一）
  - 被导入文件的名字以.css结尾；
  - 被导入文件的名字是一个URL地址（比如http://www.sass.hk/css/css.css），由此可用谷歌字体API提供的相应服务；
  - 被导入文件的名字是CSS的url()值。
 
