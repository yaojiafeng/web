### 1.npm 全局安装目录

- 在目录：/usr/local/lib/node_modules/下

- finder->前往->前往文件夹,然后输入/usr/local/lib/node_modules

### 2.mac 常用命令

Mac是基于Unix的，对于开发者而言，经常会用到mac下的终端命令，这里对mac的常用终端命令进行汇总。

（1）git：默认OS X是安装git的，我们可以通过git命令查看。出现下图所示，表示当前mac已经安装git：

（2）which git：查看git的安装路径。默认一般是/usr/bin/git.

（3）curl http://npmjs.org/install.sh | sh   ：安装node.js的套件管理工具；

（4）sudo npm update npm -g  ：更新node.js的套件管理工具nmp；

（5）nmp -v :查看nmp的版本；

（6） cd ~/.ssh  :检查本机的SSH密钥；

（7）cd ***   :进入某个文件目录；

（8）ls -a :显示当前文件夹下的所有隐藏文件；

（9）open ***   :打开当前目录下的某个文件；

（10）ssh -T git@github.com    :检查Github的SSH是否设置成功；

（11）git config --global user.name 用户名    ：修改git的用户名。因为Git会根据用户的名字和邮箱来记录提交。Github也是用这些信息来做权限的处理。

（12）git config --global user.email 邮箱    ：修改git的邮箱。因为Git会根据用户的名字和邮箱来记录提交。Github也是用这些信息来做权限的处理。

（13）open -t ~/.bash_profile    ：打开Mac下环境变量配置；

（14）ruby -e "$(curl -fsSkL https://raw.github.com/Homebrew/homebrew/go/install)"   ：安装os x下的包管理工具homebrew；

（15）brew doctor  :检查homebrew是否已经安装成功；

（16）echo $PATH  :   查看系统PATH环境变量；

（17）ls   ：列出当前目录下的所有文件名；

（18）node -v   :查看node.js的版本号；

（19）nmp -v  :查看nmp的版本号；

（20） which node   ：查看node.js的安装路径；

（21）which nmp  :查看nmp的安装路径；

（22）git --version: 查看git的版本；

（23）sudo npm install --unsafe-perm --verbose -g hexo   ：用npm命令安装hexo；

（24）sudo npm install -g hexo   ：用npm命令安装hexo；可以与上面的比较着用；

（25）tab键   :自动补全当前目录下的文件名；

（26）pwd   :显示当前目录；

（27）cd   ：进入root根目录；

（28）cd ..   :进入上级目录；

（29）cat 文件名   ：在终端下查看文件；

（30）vim 文件名：使用vim编辑某个文件；

（31）进入vim先按字母i键：对vim执行插入操作，即可以编辑文件了；

（32）:q      :在vim中没有对文件做任何修改的情况下退出vim可以使用该命令；

（33）先按ESC键，然后  :w     :保存当前写入的内容，但不退出vim；

（34）先按ESC键，然后  :wq      :保存修改的内容，退出vim；w：write    ；   q:   quit

（35）hexo g     :生成hexo静态网页，在你本地做修改后，首先要使用这个命令，  g  ＝  generate;

（36）hexo d    :部署静态网页，在执行hexo g之后执行hexo d,     d  = depoly;

（37）git clone https://github.com/wuchong/jacman.git themes/jacman     ：从Github下载Hexo的jacman主题，存放在themes目录下，注意执行git命令和执行hexo命令必须要在Hexo文件夹下，也就是要在根目录下；

（38）git clone https://github.com/A-limon/pacman.git themes/pacman     ：同上；

（39）hexo serve   ：在本地进行开启服务器进行hexo的调试；只要在浏览器中输入http://0.0.0.0:4000/即可进行调试；

（40）Ctrl ＋ C：在上一个命令之后执行，停止hexo服务器的调试；

（41）hexo clean  :清除缓存，网页正常情况下可以忽视该命令；

（42）hexo n "博客名称"= hexo new “博客名称”     ：新建文章；

（43）hexo g  =  hexo generate      :生成；

（44）hexo s  =  hexo serve   :启动服务预览；

（45）hexo d  = hexo deploy   :部署；

（46）hexo generate --deploy    :作用同 分别执行   hexo generate  ;      hexo deploy

（47）hexo deploy --generate   :同上hexo generate --deploy

（48）:q!     :强制退出vim，并放弃所有修改；

（49）:e!     :vim 中放弃所有修改，并打开原来的文件；

（50）JDK环境变量配置：

  cd  :进入根目录

  vim .bash_profile    :使用vim编辑环境变量

export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.7.0_67.jdk/Contents/Home #版本号根据自己的具体情况而定
export PATH=$JAVA_HOME/bin:$PATH 
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar

按ESC键进入命令模式

:wq     :保存退出

source .bash_profile    ：更新配置文件



（51）cd /Library/Java/JavaVirtualMachines

     ls       :可以查看当前你安装的所有JDK的版本，因为JDK默认是安装在/Library/Java/JavaVirtualMachines  路径下的；



（52）xcode-select --install   :终端下安装Xcode Command line tools；

（53）rm 文件名    ：删除某个文件；

（54）git clone ***github repository url     :从服务器上将代码给拉下来，注意：你要把本地库放到哪里，就要在某个文件夹下进行这个操作；

（55）git diff  :差异比较；

（56）git show  :显示某次提交的信息；

（57）git init    ：初始化一个版本仓库，如果想把本地的某个文件夹作为本地仓库，就在该文件夹执行这个操作。作为git clone之前的第一个操作；

（58）git remote -v   :查看远程仓库，在你当前文件夹下执行该命令，就会显示你的远程仓库的url；

（59）Ctrl + C   :强制退出某个在终端中运行的进程或者服务；

（60）curl -L https://get.rvm.io | bash -s stable    :安装rvm，可以理解为Ruby的虚拟机，可以和JVM一起理解；

（61）rvm -v   :检查rvm是否成功安装以及版本；

（62）rvm install 2.0.0    :使用rvm安装Ruby环境；这样Ruby ，Ruby Gems就安装完成了；

（63）ruby -v    :查看Ruby版本；

（64）gem -v :查看gem版本；

（65）gem sources -l   :查看gem来源；

（66）
