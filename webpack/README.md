# 问题列表
- [为什么选择webpack](#为什么选择webpack)
- [1. webpack与grunt、gulp的不同？](#1.webpack与grunt、gulp的不同？)
- [2.什么是bundle,什么是chunk，什么是module?](#2.什么是bundle,什么是chunk，什么是module?)
- [4.有哪些常见的Loader?他们是解决什么问题的？](#4.有哪些常见的Loader?他们是解决什么问题的？)
- [5.有哪些常见的Plugin？他们是解决什么问题的？](#5.有哪些常见的Plugin？他们是解决什么问题的？)
- [6.Loader和Plugin的不同？](#6.Loader和Plugin的不同)
- [7.webpack的构建流程是什么?](#7.webpack的构建流程是什么?)
- [8.是否写过Loader和Plugin？描述一下编写loader或plugin的思路？](#8.是否写过Loader和Plugin？描述一下编写loader或plugin的思路？)
- [9.webpack的热更新是如何做到的？说明其原理？](#9.webpack的热更新是如何做到的？说明其原理？)
- [10.如何利用webpack来优化前端性能？（提高性能和体验）](#10.如何利用webpack来优化前端性能？（提高性能和体验）)
- [11.如何提高webpack的构建速度？](#11.如何提高webpack的构建速度？)
- [12.怎么配置单页应用？怎么配置多页应用？](#12.怎么配置单页应用？怎么配置多页应用？)
- [13.npm打包时需要注意哪些？如何利用webpack来更好的构建？](#13.npm打包时需要注意哪些？如何利用webpack来更好的构建？)
- [14.如何在vue项目中实现按需加载？](#14.如何在vue项目中实现按需加载？)
- [15.什么是长缓存？在webpack中如何做到长缓存优化？](#15.什么是长缓存？在webpack中如何做到长缓存优化？)
- [16.什么是Tree-shaking?CSS可以Tree-shaking吗](#16.什么是Tree-shaking?CSS可以Tree-shaking吗)
- [17.webpack-dev-server和http服务器如nginx有什么区别?](#17.webpack-dev-server和http服务器如nginx有什么区别?)


## 为什么选择webpack
对比同类模块打包工具，Webpack具备以下几点优势。
1）Webpack默认支持多种模块标准，包括AMD、CommonJS，以及最新的ES6模块，而其他工具大多只能支持一到两种。这对于一些同时使用多种模块标准的工程非常有用，Webpack会帮我们处理好不同类型模块之间的依赖关系。
2）Webpack有完备的代码分割（code splitting）解决方案。从字面意思去理解，它可以分割打包后的资源，首屏只加载必要的部分，不太重要的功能放到后面动态地加载。这对于资源体积较大的应用来说尤为重要，可以有效地减小资源体积，提升首页渲染速度。
3）Webpack可以处理各种类型的资源。除了JavaScript以外，Webpack还可以处理样式、模板，甚至图片等，而开发者需要做的仅仅是导入它们。比如你可以从JavaScript文件导入一个CSS或者PNG，而这一切最终都可以由第4章讲到的loader来处理。
4）Webpack拥有庞大的社区支持。除了Webpack核心库以外，还有无数开发者来为它编写周边插件和工具，绝大多数的需求你都可以直接找到已有解决方案，甚至会有多个解决方案供你挑选。
