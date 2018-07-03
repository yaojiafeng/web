# 安装环境
    1.安装node.js(包含了npm)
    cmd中node -v检查node环境
    npm instsall -g typescript
    2.安装angular-cli
    npm install -g @angular/cli
    或者利用淘宝镜像安装（最好）
    (1) npm install -g cnpm 
     --registry=https://registry.npm.taobao.org
    (2)cnpm install -g @angular/cli
    卸载angular-cli:
       npm uninstall -g angular-cli  
       npm cache clean  
    ng -v检查ng环境
 # 创建一个项目
    ng new my-app --skip-install
    cd my-app
    cnpm install
    ng serve
    或者
    ng new my-app
    cd my-app
    4.建立一个组件
    ng generate component helloworld
    5.ng generate
    命令	描述
    ng generate <type> [options]	在项目中构建新代码
    ng g <type> [options]	简写
    支持的类型	用法
    Component	    ng g component my-new-component
    Directive   	ng g directive my-new-directive
    Pipe	        ng g pipe my-new-pipe
    Service     	ng g service my-new-service
    Class	        ng g class my-new-class
    Interface	    ng g interface my-new-interface
    Enum	        ng g enum my-new-enum
    Module	      ng g module my-module
    Route	        ng g route my-route当前已禁用
 # angular项目目录结构
    node_modules        第三方依赖包存放目录
    e2e                 端到端的测试目录  用来做自动测试的
    src                 应用源代码目录  
    angular-cli.json   Angular命令行工具的配置文件。后期可能会去修改它，引一些其他的第三方的包  比如jquery等
    karma.conf.js       karma是单元测试的执行器，karma.conf.js是karma的配置文件
    package.json        这是一个标准的npm工具的配置文件，这个文件里面列出了该应用程序所使用的第三方依赖包。实际上我们在新建项目的时候，
                        等了半天就是在下载第三方依赖包。下载完成后会放在node_modules这个目录中，后期我们可能会修改这个文件。
    protractor.conf.js  也是一个做自动化测试的配置文件
    README.md           说明文件
    tslint.json         是tslint的配置文件，用来定义TypeScript代码质量检查的规则
    app目录               包含应用的组件和模块，我们要写的代码都在这个目录
    assets目录            资源目录，存储静态资源的  比如图片
    environments目录  环境配置。Angular是支持多环境开发的，我们可以在不同的环境下（开发环境，测试环境，生产环境）共用一套代码，主要用来配置环境的
    index.html          整个应用的根html，程序启动就是访问这个页面
    main.ts             整个项目的入口点，Angular通过这个文件来启动项目
    polyfills.ts        主要是用来导入一些必要库，为了让Angular能正常运行在老版本下
    styles.css          主要是放一些全局的样式
    tsconfig.app.json   TypeScript编译器的配置,添加第三方依赖的时候会修改这个文件
    tsconfig.spec.json  
    test.ts             也是自动化测试用的
    typings.d.ts        
    @component
    元数据属性：
    animations - 规定这个component的动画列表
    changeDetection - 通过这个component变更侦测策略；
    encapsulation - 通过该component设计封装策略；
    entryComponents - 一个components的列表，这个列表会动态插入进当前component的视图中。
    exportAs -名下component的实例化被导出在一个模板视图中。
    host - class属性映射到host元素上，并绑定了事件，属性；
    inputs - 当前class属性名列表，当前components输入的数据绑定。
    interpolation - 自定义改写工具，被用于当前component的视图模板上。
    moduleld - 文件中ES/CommonJS 模块的id,而当前component就定义在该模块中。
    outputs - 当前class属性名列表，对外暴露输出事件，这样其他components就可以调用。
    providers - providers列表，该列表可以用于当前component和其子component.
    queries - 将配置问题注入到当前component中。
    selector - 样式选择器，它可以在一个复杂的视图模板中识别出当前component.
    styleUrls - 运用在当前component中的一组样式表的url列表
    styles - 样式
    template - 视图模板
    viewProvider - providers列表，该列表可以用于当前component，以及其子视图。
    templateUrl - 视图模板的url链接
    注解（Annotation）
    任何通过Angular2 快速入门开始Angular2，都会看到这么一段代码：
    @Component({
        selector: 'my-app',
        template: '<h1>My First Angular 2 App</h1>'
    })
    export class AppComponent { }
    我们看到有一个 AppComponent 空类，同时该类包括一个 @Component 注解，假如我们移除注解那么类就变成完全没有任何意义了。@Component 告诉Angular这个类以什么形式与该组件连接。selector 表明连接位置，是一个CSS选择器；template 表明渲染的内容，现在是一段HTML代码。
    这看起来非常简单，但是我们需要理解几个问题：
    这些注解从哪来？JavaScript如何解析它？
    为什么是 @Component，谁来定义它？
    如果这是TypeScript特有的，那么现流行浏览器是怎么支持和解释它们？
    首先要回答第一个问题。我们需要完成上面的示例代码，定义一个组件之间需要先从Angular2框架导入 Component，例如：
    import {Component} from 'angular2/core';
    从源代码可以查看他实现定义：
    export class ComponentMetadata extends DirectiveMetadata { }
    可以从源代码库中查找到所有Angular2所提供的注解的具体实现细节。这也间接回答我们第二个问题。既然定义由Angular2来做，那么怎么去解析这些带有 @ 符号的特殊语言呢？事实目前浏览器还不能直接支持并解析它，虽然注解有可能成为ES7标准，这还是相当长的路要走；所以我们还是需要借助解析器。
    解析器的选择非常多，比如有名的Babel、Traceur、TypeScript都可以来解析注解。上面代码被TypeScript解析成：

    AppComponent = (function () {
     function AppComponent() {
        }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h1>My First Angular 2 App</h1>'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
    }());
    最后我们看到他被编译成一个函数，而且这里的 @Component 实则变成具体的函数调用 core_1.Component()。事实上，Angular2已经把 @Component 等相关的注解做了定义和具体实现，最终并交由编译器解析。注解并没有什么特殊之处，我们完全可以单纯理解为语法糖，从Web组件的结构上来看，注解解决我们最核心的解耦问题。然而，注解中的参数值是由我们 @Component 直接定义好的，那么问题来了，假如我想在执行中改变这些值怎么办？这个可以交由装饰器来解决。

   ### 装饰器（Decorators）

    一个简单的装饰器，看起来像这样子：

    @decoratorExpression
    class MyClass { }
    这个感觉就跟注解一个样，但是从开发的角度来讲完全不一样。一个完成的装饰器还需要包括对 decoratorExpression 的具体实现：
    function decoratorExpression(target) {
     target.annotated = true;
    }
    修饰器的第一个参数 target 就是所要修饰的目标类，我们可以通过target来修改、添加属性、方法等等操作。
    结论
    注解和修饰器从语法层面完全是一样的，而唯一不同的是注解我们无法过多参与控制行为能力；修饰器则不然。虽然最后都是以注解（也可以说是修饰符，因为对于ES6而言它已经是标准了）被编译。当然了，Angular2所提供的相应注解可以让我们更专注于业务层面开发。注解的实在太优雅了！
 ### 数据绑定（默认单向绑定)
1. <h1>{{xxx}}</h1>//插值绑定
1. <img [src]="imgUrl">//属性绑定
1. button (click)="do()">提交</button>//事件绑定
一、dom属性绑定
插值表达式和属性绑定是同一样东西，选用一种风格就行
html属性初始化后不能改变
dom属性可以改变
angular的模板绑定是通过dom属性和事件来工作的，而不是HTML属性

属性绑定
二、html属性绑定

1,Html属性绑定
语法：<td [attr.colspan]="tableColspan">C罗<td> //tableColspan的值被绑定到attr.colspan这个属性名字上。更新到html属性， 浏览器根据html属性同步
到dom属性，最终渲染出来。

2,css类绑定(3种情况)
1）<div class="aaa bbb" [class]="somethingExpression">something</div>//[class]="somethingExpression"将完全替换掉前面aaa bbb 的值
2）<div class="a b " [class.c]="isC">something</div>//c是一个样式类的名字，isC为true是出现[class.C]。
3）<div [ngClass]="{aaa:isA,bbb:isB}"></div>//控制类名为aaa 和bbb的样式是否显示，控制多个类名

3，样式绑定(与css类绑定类似，2种情况)
1)<button [style.color]="isSpecial?'red':'green'">Red</button>//控制单一内联样式
2)<div [ngStyle]="{'font-style':this.canSave?'italic':'normal'}"></div>//控制多个内联样式

三、双向绑定
两种方式
1),使用事件绑定和属性绑定
2),用ngModel指令，<input [(ngModel)]="name">{{name}}



