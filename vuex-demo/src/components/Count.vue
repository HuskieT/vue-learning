<template>
  <div>
    <h2>{{msg}}</h2>
    <hr/>
    <h3>{{$store.state.count}}</h3>
    <h3>方法一：{{ count }}</h3>
    <p>
      <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </p>
    <p>
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </p>
  </div>
</template>

<script>
  import store from  '@/vuex/store';
  import { mapState,mapMutations,mapGetters,mapActions } from 'vuex';
  export default{
    data(){
      return{
        msg:"hello vuex"
      }
    },
   // computed:{ //方法一
   //      count(){
   //      return this.$store.state.count;
   //     }
   // },
/*    computed:mapState({ //方法二
        count:function (state) {
          return state.count;
        }
    }),*/

   // computed:mapState(['count']), //方法3
    computed:{
      ...mapState(['count']),
      /*count(){
        return this.$store.getters.count;
      }*/
      ...mapGetters(['count']),
    },
    //methods:mapMutations(['add','reduce']),
    methods:{
      ...mapMutations([
        'add','reduce'
      ]),
      ...mapActions(['addAction','reduceAction'])
    },
    store
  }
</script>

<style>
</style>
