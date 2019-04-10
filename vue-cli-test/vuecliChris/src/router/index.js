import Vue from 'vue'
import Router from 'vue-router' //引入vue-router
import HelloWorld from '@/components/HelloWorld'  //引入根目录下的Hello.vue组件
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Second from '@/components/Hi2'
import Left from '@/components/Left'
import Right from '@/components/Right'
import Params from '@/components/Params'
import Error from '@/components/Error'


Vue.use(Router)   //Vue全局使用Router


export default new Router({
  mode:'history',
  routes: [        //配置路由，这里是个数组
    {             //每一个链接都是一个对象
      path: '/', //链接路径
      name: 'hello',   //路由名称，
      alias:'indexHome', //此处别名是不起作用的
      components: {  //对应的组件模板  多个为components
        default:HelloWorld,
        left:Left,
        right:Right
      }
    },{
    	path:'/hi',
    	component:Hi,
      alias:'/biemingHi',//别名请不要用在path为’/’中，如下代码的别名是不起作用的。
    	children:[
        {path:'/', name:'hello/hi',component:Hi},
    		{path:'hi1',name:'first',component:Hi1},
    		{path:'second',name:'secondName',component:Second}
    	]
    },{
      path:'/params/:newsId(\\d+)/:name',   //括号内为正则 必须为数字(加入正则需要在路由配置文件里（/src/router/index.js）以圆括号的形式加入)
      component:Params,
      beforeEnter:(to,from,next)=>{
        console.log('我进入了params模板');
        console.log("to : "+ to);
        console.log("from : "+ from);
        next(true);  //必须要next()才会跳转 切next(true)

      }
    },{
      path:'/goHome',
      redirect:'/',   //重定向为这种写法
    },{
      path:'/goParams/:newsId(\\d+)/:name',
      redirect:'/params/:newsId(\\d+)/:name',   //重定向为这种写法
    },{
      path:'*',
      component:Error,
    }
  ]
})


