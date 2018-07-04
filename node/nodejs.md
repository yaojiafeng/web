app.set('port', process.env.PORT || 3000)：设置端口为 process.env.PORT 或 3000 
在 node.js 中模块分为核心模块和文件模块两种，核心模块是通过 require('xxxx') 导入的，文件模块是以 require('/xxxx') 或 require('./xxxx')、
require('../xxxx') 形式导入的；核心模块是用c/c++编译的二进制模块，而文件模块是后缀为.js、.json、.node 的文件，在 node.js 中一个文件/文件夹也可以
称之为一个模块。
这里导入了 express、http、path 核心模块，routes 文件夹下的 index.js 和 user.js 文件模块。
因为 express 框架是依赖 connect 框架（Node的一个中间件框架）创建而成的，可查阅 connect 文档：http://www.senchalabs.org/connect/和 express 
官方文档：http://expressjs.com/api.html了解更多内容。

app.set(name, value)：设置 name 的值为 value 
app.set('views', __dirname + '/views')：设置 views 文件夹为视图文件的目录，存放模板文件，__dirname 为全局变量，存储着当前正在执行脚本所在的目录名。
app.set('view engine', 'ejs')：设置视图模版引擎为 ejs
app.use([path], function)：使用中间件 function，可选参数path默认为"/"
app.use(express.favicon())：connect 内建的中间件，使用默认的 favicon 图标，如果想使用自己的图标，
需改为app.use(express.favicon(__dirname + '/public/images/favicon.ico')); 这里我们把自定义的 favicon.ico 放到了 public/images 文件夹下。
app.use(express.logger('dev'))：connect 内建的中间件，在开发环境下使用，在终端显示简单的不同颜色的日志，比如在启动 app.js 后访问 localhost:3000，
终端会输出：
Express server listening on port 3000 GET / 200 21ms - 206b GET /stylesheets/style.css 304 4ms 
数字200显示为绿色，304显示为蓝色。假如你去掉这一行代码，不管你怎么刷新网页，终端都只有一行 Express server listening on port 3000。
