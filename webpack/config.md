  ```js
const path = require('path')

module.exports = {
  context: path.resolve(__dirname, '../'),//提供给entry的一个基准路径
//entry一共可以分为string、array和object
//entry:'./main.js'//一个入口，产出一个bundle.js
//entry:['./main1.js','./main2.js'],//多个入口产出一个bundle.js
  entry:{
    
  }
  output: {
   path: config.build.assetsRoot,
   filename: '[name].js',
   publicPath: process.env.NODE_ENV === 'production'
     ? config.build.assetsPublicPath
     : config.dev.assetsPublicPath
  },
}
```
