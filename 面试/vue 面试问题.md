## vue


## vue router

1 vue路由跳转的几种方式

- <router-link>  (<router-link :to="{name:'home'}"> )
- router.push(编程式路由)
- this.$router.push() (函数里面调用)
- this.$router.replace() (用法同上,push)
- this.$router.go(n) (向前或者向后跳转n个页面，n可为正整数或负整数)

ps : 区别

this.$router.push
跳转到指定url路径，并想history栈中添加一个记录，点击后退会返回到上一个页面

this.$router.replace
跳转到指定url路径，但是history栈中不会有记录，点击返回会跳转到上上个页面 (就是直接替换了当前页面)

this.$router.go(n)
向前或者向后跳转n个页面，n可为正整数或负整数

获取路由上面的参数，用的是$route，后面没有r

2 Vue.js最佳实践--VueRouter的beforeEnter与beforeRouteLeave冲突解决

 https://www.cnblogs.com/Amar/p/9154452.html
3

