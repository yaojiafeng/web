```javascript
const path = require('path')

module.exports = {
  context: path.resolve(__dirname, '../'),//提供给entry的一个基准路径
//entry一共可以分为string、array和object
//entry:'./main.js'//一个入口，产出一个bundle.js
//entry:['./main1.js','./main2.js'],//多个入口产出一个bundle.js
  entry:{
    one:'a.js',
    two:'b.js'
  },
  output: {
   path:  path.resolve(__dirname, 'dist/assets'),//输出路径
   filename: '[name].js',//使用入口名称来指定输出文件的名称
   publicPath: process.env.NODE_ENV === 'production'
     ? config.build.assetsPublicPath
     : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'], //自动解析确定的拓展名,使导入模块时不带拓展名
    alias: { // 创建import或require的别名
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  plugins: [
  new webpack.DefinePlugin({ // 编译时配置的全局变量
    'process.env': config.dev.env //当前环境为开发环境
  }),
  new webpack.HotModuleReplacementPlugin(), //热更新插件
  new webpack.NoEmitOnErrorPlugin(), //不触发错误,即编译后运行的包正常运行
  new HtmlWebpackPlugin({  //自动生成html文件,比如编译后文件的引入
    filename: 'index.html', //生成的文件名
    template: 'index.html', //模板
    inject: true
  }),
  new FriendlyErrorsPlugin() //友好的错误提示
  ]
}
```
