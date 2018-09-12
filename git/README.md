## 目录

- [创建版库](创建版库)
- [git clone](git clone)
- [分之管理](分支管理)

# 创建版库

    初始化一个Git仓库，使用git init命令。
    
    添加文件到Git仓库，分两步：

    使用命令git add <file>，注意，可反复多次使用，添加多个文件；实际上就是把文件修改从工作区添加到暂存区；
    
    使用命令git commit -m <message>，完成。实际上把暂存区的文件提交到分支
    
    查看 **工作区** 的状态，使用git status
    
    查看修改的内容   git diff test.js
    
# git clone

- clone master分支：
  - git clone https://github.com/yaojiafeng/web.git（只克隆master分支）

- clone 某个分支：
  - git clone -b  dev  https://github.com/yaojiafeng/web.git

> 当只git clone 到主分支到本地时，又想git clone dev分支到本地，可以 git checkout -b dev origin/dev 

# 分支管理
    Git鼓励大量使用分支：

    查看所有分支：git branch （当前分支有个*在前面）
    
    查看远程分支：git branch -a （红色标记）

    创建分支：git branch <name>

    切换分支：git checkout <name>

    创建+切换分支：git checkout -b <name>

    合并某分支到当前分支：git merge <name>

    删除分支：git branch -d <name>
    
    git rebase
    
  # 远程仓库的使用
 
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
 
        
