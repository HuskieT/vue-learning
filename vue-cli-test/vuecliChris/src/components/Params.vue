<template>
  <div class="hello">
    <h1>{{ tt }}</h1>
    <p>newsId:{{ $route.params.newsId }}</p>
    <p>name:{{ $route.params.name }}</p>
  </div>
</template>

<script>
  export default {
    name: 'hi1',
    data() {
      return {
        tt: 'params page !'
      }
    },
    beforeRouteEnter:(to,from,next)=>{
      console.log("准备进入路由模板");
      next();
    },
    beforeRouteLeave:(to,from,next)=>{
      console.log("准备离开路由模板");
      next();
    },

  }
</script>

<style scoped>

</style>
