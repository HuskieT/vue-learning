<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button @click="goBack">后退</button>
      <button @click="goNext">前进</button>
      <button @click="goHome">返回首页</button>
    </div>
    <div>

        <router-link to="/">首页</router-link>
    	  <router-link to="/hi">Hi首页</router-link>
        <router-link to="/biemingHi">biemingHi页面</router-link>

    	  <router-link to="/hi/hi1">Hi1页</router-link>
    	  <router-link :to="{name:'secondName',params:{username:'chrislin',id:'456123'}}">Hi2页</router-link>
    </div>
    <div>
      <router-link to="/params/198/chris @@@@">params</router-link>
      <router-link to="/goHome">goHome</router-link>
      <router-link to="/goParams/91919/xiaoqi">goParams</router-link>
      <router-link to="/bbbbbb">我是瞎写的404页面</router-link> |

    </div>
    <p>{{ $route.name }}</p>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
    <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
  </div>
</template>
<!--
router-link 相当于<a>标签
css过渡类名： 组件过渡过程中，会有四个CSS类名进行切换，这四个类名与transition的name属性有关，比如name=”fade”,会有如下四个CSS类名：

fade-enter:进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除。
fade-enter-active:进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除。
fade-leave:离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除。
fade-leave-active:离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除。

过渡模式mode：

in-out:新元素先进入过渡，完成之后当前元素过渡离开。
out-in:当前元素先进行过渡离开，离开完成后新元素过渡进入。

--->
<script>
export default {
  name: 'App',
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    goNext(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push("/");
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opecity:0;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave{
  opacity:1;
}
  .fade-leave-active{
    opacity:0;
    transition:opacity .5s;
  }
</style>

<!--
	作者：lin1209120@163.com
	时间：2018-09-01
	描述：
	<style scoped></style> 只对当前页面起作用（本模板）
-->

