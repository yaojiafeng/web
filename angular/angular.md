### 1.Angular2生命周期hooks

Angular 2组件/指令具有生命周期事件，是由@angular/core管理的。@angular/core会创建组件，渲染它，创建并呈现它的后代。当@angular/core的数据绑定属性更改时，处理就会更改，在从DOM中删除其模板之前，就会销毁掉它。Angular提供了一组生命周期hooks（特殊事件），可以被分接到生命周期中，并在需要时执行操作。构造函数会在所有生命周期事件之前执行。每个接口都有一个前缀为ng的hook方法。例如，ngOnint界面的OnInit方法，这个方法必须在组件中实现。 

一部分事件适用于组件/指令，而少数事件只适用于组件。

ngOnChanges：当Angular设置其接收当前和上一个对象值的数据绑定属性时响应。
ngOnInit：在第一个ngOnChange触发器之后，初始化组件/指令。这是最常用的方法，用于从后端服务检索模板的数据。
ngDoCheck：检测并在Angular上下文发生变化时执行。每次更改检测运行时，会被调用。
ngOnDestroy：在Angular销毁指令/组件之前清除。取消订阅可观察的对象并脱离事件处理程序，以避免内存泄漏。
组件特定hooks：

ngAfterContentInit：组件内容已初始化完成
ngAfterContentChecked：在Angular检查投影到其视图中的绑定的外部内容之后。
ngAfterViewInit：Angular创建组件的视图后。
ngAfterViewChecked：在Angular检查组件视图的绑定之后。
 
### 2.使用Angular2和使用AngularJs相比,有什么优势
Angular 2是一个平台，不仅是一种语言
更好的速度和性能
更简单的依赖注入
模块化，跨平台
具备ES6和Typescript的好处。
灵活的路由，具备延迟加载功能
更容易学习
 
### 3.Angular 2中的路由工作原理
路由是能够让用户在视图/组件之间导航的机制。Angular 2简化了路由，并提供了在模块级（延迟加载）下配置和定义的灵活性。 

Angular应用程序具有路由器服务的单个实例，并且每当URL改变时，相应的路由就与路由配置数组进行匹配。在成功匹配时，它会应用重定向，此时路由器会构建ActivatedRoute对象的树，同时包含路由器的当前状态。在重定向之前，路由器将通过运行保护（CanActivate）来检查是否允许新的状态。Route Guard只是路由器运行来检查路由授权的接口方法。保护运行后，它将解析路由数据并通过将所需的组件实例化到<router-outlet> </ router-outlet>中来激活路由器状态。


