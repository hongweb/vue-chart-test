<template>
  <div class="content">
    <div class="goBack" @click="goBack">返回</div>
    <div class="left">
    <div><br><br><br><br><br><br><router-link to='/details/tab1'>goto test</router-link></div>
    </div>
    <div class="center">

    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goBack(){
      this.$router.goBack();
    }
  }
}
</script>

<style scoped>
  .content{
    position: absolute;
    left:0;
    right:0;
    width:100%;
    height:100%;
  }
  .goBack{
    position: absolute;
    top:1%;
    left:1%;
    width:5%;
    padding:1.5% 0;
    text-align: center;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    border:1px solid #fff;
    background:#eee;
  }
  .left,.center,.right{
    float: left;
    height:100%;
  }
  .left{
    width:20%;
    background:#dedede;
  }
  .center{
    width:30%;
    background:#999999;
  }
  .right{
    width:50%;
    background:#aaa;
  }
</style>
