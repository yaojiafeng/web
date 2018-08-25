 # gulp 原理与使用
 [参考gulp文档](https://www.gulpjs.com.cn/docs/)
## 1.gulp是什么？
  前端构建工具，gulp是基于Nodejs，自动化地完成 javascript、coffee、sass、less、html/image、css 等文件的测试、检查、合并、压缩、格式化、浏览器自动刷新、部署文件生成，并监听文件在改动后重复指定的这些步骤。借鉴了Unix操作系统的管道（pipe）思想，前一级的输出，直接变成后一级的输入，使得在操作上非常简单。流，Node将几乎所有IO操作都抽象成了stream的操作，简单来说就是建立在面向对象基础上的一种抽象的处理数据的工具。
## 2.特点  压缩资源文件，实页面响应速度提升。自动构建。
- 性能优化

我们都知道浏览器请求的文件越多越耗时，请求的文件越大越耗时，尤其是在我们现在很多使用前端MVC, MVVM框架的时候，我们为了前端代码更清晰，结构更合理，我们就由很多JS文件，无疑又拖慢了网页的速度。为了解决这个问题，因此我们需要做两件事
- 文件合并

浏览器需要下载多个JS文件，而浏览器是有并发限制，也就是同时并发只能下载几个文件，假如浏览器并发数是5，你有20个JS文件，而每5个需要2S, 那么你光下载JS文件都需要8S，那么网页的性能可想而知，所以我们需要合并多个文件以减少文件的数量。
- 文件压缩

我们知道文件越大，下载越慢，而针对JavaScript和CSS, 里面的空格，换行这些都是为了让我们读代码时更容易阅读，但是对机器来说，这些对它没有影响，所以为了减少文件大小，一般的情况我们都会用工具去掉空格和换行，有时候我们还会用比较短的变量名(记住这个要让工具最后压缩时做，而源代码一定要保证命名可读性) 来减少文件大小。而所有的前端构建工具都具有文件合并和压缩的功能。
- 效率提升
  - Vendor前缀
  
在CSS3使用越来越多的时候，我们都知道一些CSS的特性，不同的浏览器CSS有不同的前缀，如果我们手工添加将会很繁琐，而如果使用构建工具，很多构建工具可以自动给我添加CSS的Vendor前缀
- 单元测试

JavaScript的单元测试在使用MVC或者MVVM的框架后，变得越来越容易，而单元测试是质量保证的一个很重要的手段，所以在提交之前，使用构建工具自动跑一遍我们的单元测试是非常重要的
- 代码分析

我们写的JavaScript很多时候会有一些潜在的bug, 比如忘了添加分号，某个变量没有等等，使用一些JavaScript的代码分析工具，可以很好的帮我们检查一些常见的问题。
- HTML引用JavaScript或者CSS文件

比如我们需要使用Bower之类来引用前端JavaScript和CSS的第三方库，那么如果版本升级，添加移除等都用手工来修改HTML的话，第一比较耗时，第二比较容易疏漏，尤其是在我们需要切换Debug和production版本时将会有很多额外的工作，那么使用前端构建工具可以很好的解决这些问题。
## 常用插件
```js
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');//sourcemaps记录了生成文件中的每一条语句在源文件中的对应位置，
const gutil = require('gulp-util');
const del = require('del');
const nodemon = require('gulp-nodemon');
const runSequence = require('run-sequence');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const minify = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const shell = require('gulp-shell');
const connect = require('gulp-connect');
const open = require('gulp-open');
const pug = require('gulp-pug');

const path = process.env.PWD;

/**
 * 公共错误处理函数
 */
function commonErrorHandle(event) {
    gutil.beep();
    gutil.log(event)
};

/* 删除dist目录，删除所有之前编译的内容 */
gulp.task('clean', (cb) => {
    return del(['dist'], cb);
});

/* 移动字体库 */
gulp.task('fonts', () => {
    return gulp.src('source/fonts/**/*')
        .pipe(gulp.dest('dist/fonts/'));
});

/* 压缩图片 */
gulp.task('imagemin', () => {
    return gulp.src('source/images/**/*')
           .pipe(imagemin({
               progressive: true,
               svgoPlugins: [{ removeViewBox: false }],
               use: [pngquant()]
           }))
        .pipe(gulp.dest('dist/images/'));
});

/* 压缩合并js逻辑 */
gulp.task('jsmin', () => {
    return gulp.src(['source/js/*.js', '!source/js/libs.min.js'])
        .pipe(plumber({ errorHandler: commonErrorHandle }))
        // .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(uglify())
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/js/'))
});

/* 移动通用js文件 */
gulp.task('cpjs', () => {
    return gulp.src(['source/js/*.js', '!source/js/app.js'])
        .pipe(gulp.dest('dist/js/'));
})

/* 压缩合并css样式 */
gulp.task('cssmin', () => {
    return gulp.src('source/css/**/*.scss')
        .pipe(plumber({ errorHandler: commonErrorHandle }))
        // .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minify())
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css/'))
});

// gulp.task('views', () => {
//     return gulp.src('source/**/*.pug')
//         .pipe(pug())
// })

/* 开发阶段，编译生成页面 */
gulp.task('pages', shell.task(`pug -O locale/zh.json source/pages -o dist/ -P `));

/* 编译英文版本 */
gulp.task('pages_en', shell.task(`pug -O locale/en.json source/pages -o dist/ -P `));

/* 生产环境中，编译生成页面 */
gulp.task('pagesmin', shell.task(`pug -O locale/zh.json source/pages -o dist/`));

/* 生产环境中，编译英文版本 */
gulp.task('pagesmin_en', shell.task(`pug -O locale/en.json source/pages -o dist/`));

/* liveReload服务器*/
gulp.task('server', () => {
    connect.server({
        root: 'dist',
        livereload: true
    });
});

/* 加载html页面 */
gulp.task('html', () => {
    gulp.src('./dist/*.html')
        .pipe(connect.reload());
})

/**
 * 检测文件变化
 */
gulp.task('watch', () => {
    gulp.watch(['source/**/*'], ['pages', 'cssmin', 'jsmin']).on('change', (e) => {
        console.info(`Source->File ${e.path} + has been changed`)
    })
});

gulp.task('browser', () => {
    gulp.src(__filename)
        .pipe(open({ uri: 'http://localhost:8080' }));
})

/**
 * 默认为开发者环境
 */
gulp.task('default', () => {
    runSequence('clean', 'fonts', 'pages', 'cssmin', 'jsmin', 'cpjs','imagemin', 'server', 'watch', 'browser');
});

/**
 * 编译英文版本
 */
gulp.task('english', () => {
    runSequence('clean', 'fonts', 'pages_en', 'cssmin', 'jsmin', 'cpjs', 'imagemin', 'server', 'watch');
});

/**
 * 构建生产版本
 */
gulp.task('build', (cb) => {
    runSequence('clean', 'fonts', 'pagesmin', 'cssmin', 'jsmin', 'cpjs', 'imagemin', cb)
});
gulp.task('build_en', (cb) => {
    runSequence('clean', 'fonts', 'pagesmin_en', 'cssmin', 'jsmin', 'cpjs', 'imagemin', cb)
});
```
## 目录

- [安装 Node 和 gulp](chapter1.md)
- [使用 gulp 压缩 JS](chapter2.md)
- [使用 gulp 压缩 CSS](chapter3.md)
- [使用 gulp 压缩图片](chapter4.md)
- [使用 gulp 编译 LESS](chapter5.md)
- [使用 gulp 编译 Sass](chapter6.md)
- [使用 gulp 构建一个项目](chapter7.md)

将规律转换为 gulp 代码
-------------------

现有目录结构如下：

```
└── js/
    └── a.js
```

### 规律

1. 找到 js/目录下的所有 .js 文件
2. 压缩这些 js 文件
3. 将压缩后的代码另存在 dist/js/ 目录下

### 编写 gulp 代码

```js
// 压缩 JavaScript 文件
gulp.task('script', function() {
    // 1. 找到
    gulp.src('js/*.js')
    // 2. 压缩
        .pipe(uglify())
    // 3. 另存
        .pipe(gulp.dest('dist/js'));
});
```

### 代码执行结果

代码执行后文件结构

```
└── js/
│   └── a.js
└── dist/
    └── js/
        └── a.js
```

a.js 压缩前
```js
function demo (msg) {
    alert('--------\r\n' + msg + '\r\n--------')
}

demo('Hi')
```
a.js 压缩后
```js
function demo(n){alert("--------\r\n"+n+"\r\n--------")}demo("Hi");
```

此时 `dist/js` 目录下的 `.js` 文件都是压缩后的版本。

你还可以监控 `js/` 目录下的 js 文件，当某个文件被修改时，自动压缩修改文件。启动 gulp 后就可以让它帮助你自动构建 Web 项目。

-----------------

gulp 还可以做很多事，例如：

1. 压缩CSS
2. 压缩图片
3. 编译Sass/LESS
4. 编译CoffeeScript
5. markdown 转换为 html

[开始阅读：安装 Node 和 gulp](chapter1.md)
