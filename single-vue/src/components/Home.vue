<template>
  <div class="home">
    <div class="smallB">
      <div class="block" v-for="item in chartData" @click="changeRouter('details')">
        <vue-pie :chart-data="item.data" :options="item.options" v-if="item.type == 'pie'"></vue-pie>
        <vue-bar :chart-data="item.data" :options="item.options" v-else-if="item.type == 'bar'"></vue-bar>
        <vue-line :chart-data="item.data" :options="item.options" v-else="item.type == 'line'"></vue-line>
      </div>
    </div>
  </div>
</template>

<script>

  import axios from 'axios'
  import Vue from 'vue'
  import vuePie from './VuePie'
  import vueBar from './VueBar'
  import vueLine from './VueLine'

  export default {
    components:{
      vuePie,
      vueLine,
      vueBar,
    },
    created(){
//      axios.post('url地址',{
//        //给后端的数据
//      }).then(function (res) {
//
//      }).catch(function (err) {
//
//      })
      this.getData();
    },
    data(){
      return{
        time:6,
        timer:null,
        chartData:'',
        datacollection:null
      }
    },
    mounted(){
      this.init();
    },
    methods:{
      init(){
        //定时调用接口
//          this.timer = setInterval(() => {
//          this.time -- ;
//          console.log(this.time);
//          if(this.time == 0){
//            this.time = 6;
//            this.getData();
//          }
//        },1000);
      },
      getData(){
        axios.get('static/data/pie.json').then((res) => {
          var curData = res.data;
          this.chartData = curData;
        }).catch(function (err) {

        })
      },
      changeRouter(routeName){
        this.$router.push(routeName);
        clearInterval(this.timer);
        this.timer = null;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{
    width:100%;
    height:100%;
    padding:0 0.5%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .smallB{
    width:100%;
    height:calc(50%);
    padding:0.5% 0;
  }
  .block{
    width:19%;
    /*height:calc(25% + 120px);*/
    margin-top:0.5%;
    background: #ccc;
    -webkit-border-radius: 5%;
    -moz-border-radius: 5%;
    border-radius: 5%;
    margin-right:1.25%;
    padding:1% 0.1%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    float: left;
  }
  .block:nth-of-type(5n){
    margin-right:0px;
  }
</style>
