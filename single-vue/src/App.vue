<template>
  <div id="app">
    <!--<router-view class="child-view"></router-view>-->
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    data () {
      return {
        transitionName: 'slideleft'
      }
    },
    beforeRouteUpdate (to, from, next) {
      let isBack = this.$router.isBack;
      if (isBack) {
        this.transitionName = 'slideright'
      } else {
        this.transitionName = 'slideleft'
      }
      this.$router.isBack = false
      next()
    }
  }
</script>

<style scoped>
  #app{
    position: absolute;
    width:100%;
    height:100%;
    left:0;
    top:0;
    overflow: hidden;
  }
  .slideleft-enter-active{
    position: relative;
    /*left:50%;*/
    top:0;
  }
  .slideright-enter-active,.slideright-leave-active,.slideleft-enter-active,.slideleft-leave-active{transition: all 1s;}
  .slideleft-enter,.slideleft-leave-to,.slideright-enter,.slideright-leave-to{opacity: 0;}
  .slideright-enter {transform: translate(-100%,-100%);}
  .slideright-leave-active {transform: translate(+100%,+100%);}
  .slideleft-enter {transform: translate(100%,100%);}
  .slideleft-leave-active {transform: translate(-100%,-100%);}

</style>
