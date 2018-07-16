## 记录一下npm 

参考官网：[npm](https://docs.npmjs.com/)

CLI commands：

        npm install npm@latest -g// 跟新 npm 版本

        npm config list //查看基本配置 
        
        npm config list -l //查看所有配置

        npm install grunt // 本地安装，则是将模块下载到当前命令行所在目录。 

        npm install -g grunt//全局安装，模块将被下载安装到【全局目录】中；

        npm config get prefix // npm获取全局安装的默认目录
      
        npm config set prefix “directory”//  npm设置全局安装的默认目录

npm安装应用时，安装源被墙怎么办？
        
        设置一个国内npm镜像即可，例如：可以设置淘宝npm镜像 
        
        方法一：编辑npm的配置文件(文件默认位置是 C:\Users\Administrator.npmrc)，修改registry=https://registry.npm.taobao.org即可； 

        方法二：npm config set registry https://registry.npm.taobao.org
        
    
### npm同时启动两个或者多个命令
    
        npm insatll -g concurrently

        然后修改package.json中script：

        "server":"react-scripts start",

        "json_server":"json-server mock/db.json --port 3003",

        "start": "concurrently \"npm run json_server\" \"npm run server\" ",
