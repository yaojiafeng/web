## 目录

- [创建版库](#创建版库)
- [clone](#clone)
- [分之管理](#分支管理)
- [远程仓库的使用](#远程仓库的使用)
- [diff](#diff)
- [查看git安装目录](#查看git安装目录)
- [git撤销](#git撤销)
- [status](#status)

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
 
    git diff

**用于比较两次修改的差异**

- 比较工作区与暂存区

        git diff 不加参数即默认比较工作区与暂存区

- 比较暂存区与最新本地版本库（本地库中最近一次commit的内容）

        git diff --cached  [<path>...] 

- 比较工作区与最新本地版本库

　　　　　　git diff HEAD [<path>...]  如果HEAD指向的是master分支，那么HEAD还可以换成master

　　　　1.4 比较工作区与指定commit-id的差异

　　　　　　git diff commit-id  [<path>...] 

　　　　1.5 比较暂存区与指定commit-id的差异

　　　　　　git diff --cached [<commit-id>] [<path>...] 

　　　　1.6 比较两个commit-id之间的差异

　　　　　　git diff [<commit-id>] [<commit-id>]

　　　　1.7 使用git diff打补丁

　　　　　　git diff > patch //patch的命名是随意的，不加其他参数时作用是当我们希望将我们本仓库工作区的修改拷贝一份到其他机器上使用，但是修改的文件比较多，拷贝量比较大，

　　　　　　此时我们可以将修改的代码做成补丁，之后在其他机器上对应目录下使用 git apply patch 将补丁打上即可

　　　　　　git diff --cached > patch //是将我们暂存区与版本库的差异做成补丁

　　　　　　  git diff --HEAD > patch //是将工作区与版本库的差异做成补丁

　　　　　　git diff Testfile > patch//将单个文件做成一个单独的补丁

　　　　拓展：git apply patch 应用补丁，应用补丁之前我们可以先检验一下补丁能否应用，git apply --check patch 如果没有任何输出，那么表示可以顺利接受这个补丁

　　　　　　　另外可以使用git apply --reject patch将能打的补丁先打上，有冲突的会生成.rej文件，此时可以找到这些文件进行手动打补丁　
       
 ### 查看git安装目录
 - Mac平台:在命令行中输入which git, 就会显示git的安装位置了;
 - Windows平台:打开cmd,输入where git就会显示git的安装路径了.
 
 ### git撤销
 - 工作区撤销修改：git checkout -- filename
 - 暂存区撤销修改：(1)git reset HEAD ;(2)git checkout -- filename
 - 分支撤销修改：git reset --hard HEAD^
 - git revert commit（要撤消的提交的commit，此时只是回滚了本地）已经提交到远程了，回滚
 
 ### status
 - git status 查看修改后工作区的状态
