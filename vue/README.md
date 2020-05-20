[vue.js文档](https://cn.vuejs.org/)
# 目录
- [对mvvm的理解](#对mvvm的理解)
- [vue如何实现响应式](#vue如何实现响应式)
- [vue如何解析模板](#vue如何解析模板)
- [Vue的双向数据绑定原理](#Vue的双向数据绑定原理)
- [组件设计原则](#组件设计原则)
- [diff算法](#diff算法)


### 对mvvm的理解
- vm为viewModel,连接view和model
- mvvm的三要素
  - 响应式
  - 模版引擎
  - 渲染 （再渲染）

### vue如何实现响应式
- 实现响应式监听
- data代理到vm
  - Object.defineProperty()
```js
var vm={};
var data={name:'yao',age:18}
for(key in data){
  (function(key){
    Object.defineProperty(vm,key,{
      get:function(){
        console.log('监听到get操作,读取数据可以调用的逻辑')
        return data[key];
      },
      set:function(newVal){
        data[key]=newVal;
        console.log('监听到set操作，改变数据时可以调用的逻辑')
      }
    })
  })(key)
}
            
```

### vue如何解析模板

![compile](./images/compile.jpg)

### Vue的双向数据绑定原理

  vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

具体步骤：

- 1.监听数据变化，对需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上setter和getter。
- 2.compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图

第三步：Watcher订阅者是Observer和Compile之间通信的桥梁，主要做的事情是:
1、在自身实例化时往属性订阅器(dep)里面添加自己
2、自身必须有一个update()方法
3、待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。

第四步：MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效果。

### 组件设计原则
- 尽可能减少状态
  - 如果一个数据可以由另一个 state 变换得到，那么这个数据就不是一个 state。只需要写一个变换的处理函数，在 Vue 中可以使用计算属性。
  - 如果你的 state 是一个数组，而模版最外层是渲染这个数组，那么你需要做的事是把渲染的项作为一个组件，只接受一个单级对象形式的数据，由外部决定这个组件的展示次数
  - 如果一个数据是固定的，不会变化的常量，那么这个数据就如同 HTML 固定的站点标题一样，写死或作为全局配置属性等，不属于 state。
  - 如果一个数据需要从外部得到，它应该属于 props。
  - 如果组件和兄弟组件拥有相同的 state，那么这个 state 应该放到更高的层级中，使用 props 传递到两个组件中。
- 合理的依赖关系
  - 父组件不依赖子组件。要做到当我们把子组件删除后，只是丢失了一个功能，或一个模块等，而不会造成父组件及兄弟组件功能异常。
  - 子组件基于父组件传递 props 作出个性化展示。
- 扁平化的参数
  - 像 HTML 原生元素那样，只接受原始类型（字符串、数值、布尔值和函数）作为属性，避免复杂的对象。当然，数据除外。
```vue
<!-- good -->
<my-component
  label="hello"
  :actived="true"
  :width="600"
  :on-show="show">
</my-component>
<!-- bad -->
<my-component :config="myConfig"></my-component>
```
- 良好的接口设计
  - 把组件内部可以完成的工作做到极致。虽然提倡拥抱变化，但接口不是越多越好。
  - 如果常量变为 props 能应对更多的场景，那么就可以作为 props。原有的常量可作为默认值。
  - 如果组件不能提供调用者所需求的功能，那么这个组件的接口还不够完善。
  - 如果需要为了某一调用者编写大量特定需求的代码，那么可以考虑通过扩展等方式构建一个新的组件。
  - 保证组件的属性和事件足够的给大多数的组件使用。
### diff算法
 

