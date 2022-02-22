#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
vuepress build docs

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo '/' > CNAME

git init
git add -A
git commit -m 'deploy'

# git push -f git@github.com:xiaojun2sheng/xiaojun2sheng.github.io.git master
# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:xiaojun2sheng/blog.git master:gh-pages
git push -f git@github.com:xiaojun2sheng/blog.git master:gh-pages

cd -
