#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd ./dist

# 如果是发布到自定义域名
echo 'word.lovejade.cn' > CNAME

git init
git add -A
git commit -m '🚀 local build for deploy'

git push -f git@github.com:nicejade/gpt-wordbook.git main:gh-pages
cd -