## 目录

- [创建版库](#创建版库)
- [clone](#clone)
- [分支管理](#分支管理)
- [远程仓库的使用](#远程仓库的使用)
- [diff](#diff)
- [查看git安装目录](#查看git安装目录)
- [撤销修改](#撤销修改)
- [status](#status)
- [版本回退](#版本回退)
- [删除文件](#删除文件)
- [重命名](#重命名)
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

> 当只git clone 到主分支到本地时，又想git clone dev分支到本地，可以 git checkout -b dev origin/dev 不行就先 git checkout -b dev 创建并切换到本地分支dev，再git pull origin dev

### 分支管理

    查看分支：git branch

    查看远程分支：git branch -a （红色标记）

    创建分支：git branch <name>

    切换分支：git checkout <name>或者git switch <name>

    创建+切换分支：git checkout -b <name>或者git switch -c <name>

    合并某分支到当前分支：git merge <name>

    删除分支：git branch -d <name>
    
 ### 远程仓库的使用
 
 1. 查看当前远程仓库
                    
          git remote 
          or
          git remote -v (show the url)
    
 1. 添加远程仓库

- git remote add origin git@server-name:path/repo-name.git

      比如：git remote add origin git@github.com:yaojiafeng/web.git
           
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
 - git reset (Reset current HEAD to the specified state)
 
            用法：git reset  [--soft | --mixed [-N] | --hard | --merge | --keep] [-q] [<commit>]
            比如：git reset --hard commit_id
            
    - --hard是指完全重设，会把回退到某版本之后的修改全部删除
    - --soft这是个回退解体，让版本库回退到某个版本，这个版本之后的修改全部存在缓存区，这个时候在commit的话，又会把会退的部分重新加载到最新版本中
    
 - git revert (Revert some existing commits)
 
       用法：git revert [--[no-]edit] [-n] [-m parent-number] [-s] [-S[<keyid>]] <commit>…​
             git revert --continue
             git revert --quit
             git revert --abort
       比如：git revert commit_id (要删除的commit_id)
   

### 删除文件
- 工作区删除demo.js后，使用git rm demo.js 从版本库中删除demo.js,并且git commit,文件就从版本库中被删除了
  - git rm demo.js
  - git commit -m 'rm demo.js'

### 重命名
- 重命名本地分支
   git branch -m oldbranch newbranch
- 删除远程分支
   git push origin :oldbranch
- 重推到远程
   git push origin newbranch
   

