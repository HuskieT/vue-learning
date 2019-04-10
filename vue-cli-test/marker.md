# 1 vue-cli 安装

	npm -v    											查看npm版本
	cnpm       											淘宝npm镜像
	npm install vue-cli -g          					全局安装vue-cli
	vue -V												vue版本
# 2 初始化
	
	vue init <template-name> <project-name>				vue init命令来初始化项目
	
	<template-name>：表示模板名称，vue-cli官方为我们提供了5种模板，

	webpack-一个全面的webpack+vue-loader的模板，功能包括热加载，linting,检测和CSS扩展。
	
	webpack-simple-一个简单webpack+vue-loader的模板，不包含其他功能，让你快速的搭建vue的开发环境。
	
	browserify-一个全面的Browserify+vueify 的模板，功能包括热加载，linting,单元检测。
	
	browserify-simple-一个简单Browserify+vueify的模板，不包含其他功能，让你快速的搭建vue的开发环境。
		
	<project-name>：标识项目名称，这个你可以根据自己的项目来起名字
	
	
	例如： vue init webpack vuecliTest
	
	
	
	输入命令后，会询问我们几个简单的选项，我们根据自己的需要进行填写就可以了。
	Project name :项目名称 ，如果不需要更改直接回车就可以了。注意：这里不能使用大写，所以我把名称改成了vueclitest
	Project description:项目描述，默认为A Vue.js project,直接回车，不用编写。
	Author：作者，如果你有配置git的作者，他会读取。
	Install vue-router? 是否安装vue的路由插件，我们这里需要安装，所以选择Y
	Use ESLint to lint your code? 是否用ESLint来限制你的代码错误和风格。我们这里不需要输入n，如果你是大型团队开发，最好是进行配置。
	setup unit tests with Karma + Mocha? 是否需要安装单元测试工具Karma+Mocha，我们这里不需要，所以输入n。
	Setup e2e tests with Nightwatch?是否安装e2e来进行用户行为模拟测试，我们这里不需要，所以输入n。
	
	
	
# 3 启动项目
    
	cd vuecliTest 进入我们的vue项目目录。
	npm install 安装我们的项目依赖包，也就是安装package.json里的包，如果你网速不好，你也可以使用cnpm来安装。
	npm run dev 开发模式下运行我们的程序。给我们自动构建了开发用的服务器环境和在浏览器中打开，并实时监视我们的代码更改，即时呈现给我们。	
	
	
	
	
	
	
	
	
