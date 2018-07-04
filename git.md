# 创建版库

    初始化一个Git仓库，使用git init命令。
    
    添加文件到Git仓库，分两步：

    使用命令git add <file>，注意，可反复多次使用，添加多个文件；实际上就是把文件修改添加到暂存区；
    
    使用命令git commit -m <message>，完成。实际上把暂存区的文件提交到分支
    
    查看 **工作区** 的状态，使用git status
    
    查看修改的内容   git diff test.js
    
    







# 分支管理
    Git鼓励大量使用分支：

    查看分支：git branch

    创建分支：git branch <name>

    切换分支：git checkout <name>

    创建+切换分支：git checkout -b <name>

    合并某分支到当前分支：git merge <name>

    删除分支：git branch -d <name>


