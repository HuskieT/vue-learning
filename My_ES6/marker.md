# 1 初始化项目：npm init -y
# 2 全局安装Babel-cli：cnpm install -g babel-cli
# 3 本地安装babel-preset-es2015 和 babel-cli: cnpm install --save-dev babel-preset-es2015 babel-cli
    安装完成后，我们可以看一下我们的package.json文件，已经多了devDependencies选项。 
    "devDependencies": {
        "babel-cli": "^6.24.1",
        "babel-preset-es2015": "^6.24.1"
      }
# 4 根目录下新建  .babelrc 文件 录入：

{
    "presets":[
        "es2015"
    ],
    "plugins":[]
}

# 5  这个文件我们建立完成后，现在可以在终端输入的转换命令了，这次ES6成功转化为ES5的语法。
    使用： babel src/index.js -o dist/index.js