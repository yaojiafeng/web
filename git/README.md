## 目录

- [创建版库](#创建版库)
- [clone](#clone)
- [分之管理](#分支管理)
- [远程仓库的使用](#远程仓库的使用)
- [diff](#diff)
- [查看git安装目录](#查看git安装目录)
- [撤销修改](#撤销修改)
- [status](#status)
- [版本回退](#版本回退)

### 创建版库

    初始化一个Git仓库，使用git init命令。
    
    添加文件到Git仓库，分两步：

    使用命令git add <file>，注意，可反复多次使用，添加多个文件；实际上就是把文件修改从工作区添加到暂存区；
    
    使用命令git commit -m <message>，完成。实际上把暂存区的文件提交到分支
    
    查看 **工作区** 的状态，使用git status
    
    查看修改的内容   git diff test.js
    
### clone

- clone master分支：
  - git clone https://github.com/yaojiafeng/web.git（只克隆master分支）

- clone 某个分支：
  - git clone -b  dev  https://github.com/yaojiafeng/web.git

> 当只git clone 到主分支到本地时，又想git clone dev分支到本地，可以 git checkout -b dev origin/dev 

### 分支管理
    Git鼓励大量使用分支：

    查看所有分支：git branch （当前分支有个*在前面）
    
    查看远程分支：git branch -a （红色标记）

    创建分支：git branch <name>

    切换分支：git checkout <name>

    创建+切换分支：git checkout -b <name>

    合并某分支到当前分支：git merge <name>

    删除分支：git branch -d <name>
    
    git rebase
    
 ### 远程仓库的使用
 
 1. 查看当前远程仓库
                    
          git remote 
          or
          git remote -v (show the url)
    
 1. 添加远程仓库

          git remote add [shortname] [url]
           
 1. 从远程仓库拉取数据
    
           git fetch [remote-name] [branch-name]
    
 1. 推送数据到远程仓库
 
            git push [remote-name] [branch-name]
    
 1. 查看远程仓库的详细信息
 
            git remote show [remote-name]
      
 1. 远程仓库的删除和重命名
  
        git remote rename  oldremotename  newremotename
        git remote rm remote-name
 ### diff

**用于比较两次修改的差异**

- git diff demo.js
  - 当将修改add到暂存区时，git diff则比较的是，当前工作区中的文件与暂存区中的文件。
  - 当没将工作区的修改提交到暂存区时，git diff比较的是，工作区中的文件与上次提交到版本库中的文件。

- git diff HEAD -- demo.js
  - 比较的是工作区中的文件demo.js与版本库中文件demo.js的差异。HEAD指向的是版本库中的当前版本

 ### 查看git安装目录
 - Mac平台:在命令行中输入which git, 就会显示git的安装位置了;
 - Windows平台:打开cmd,输入where git就会显示git的安装路径了.
 
 ### 撤销修改
 - 工作区撤销修改：
   - git checkout -- demo.js 其实是用版本库里的版本替换工作区的版本
 - 暂存区撤销修改：
   - git reset HEAD demo.js
   - git checkout -- demo.js
 - 分支撤销修改：git reset --hard HEAD^
 - git revert commit（要撤消的提交的commit，此时只是回滚了本地）已经提交到远程了，回滚
 
 ### status
 - git status 查看修改后工作区的状态
 
 ### 版本回退
    git reset --hard commit_id
在Git中，用HEAD表示当前版本，也就是最新的提交commit_id，上一个版本就是HEAD^，上上一个版本就是HEAD^^，当然往上100个版本写100个^比较容易数不过来，所以写成HEAD~100。
- HEAD指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令 git reset --hard commit_id
- 穿梭前，用git log可以查看提交历史，以便确定要回退到哪个版本。
- 要重返未来，用git reflog查看命令历史，以便确定要回到未来的哪个版本。
