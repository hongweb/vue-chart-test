<template>
  <canvas class="vueChart"></canvas>
</template>
<script>
  import Chart from 'chart.js'
export default {
  props: ['type','data', 'options'],
  mounted() {
    var ctx = document.getElementsByClassName('vueChart');
    var myChart = new Chart(ctx, {
      type: this.type,
      data: this.data,
      options:this.options
    });
  }
}
</script>

<style scoped>
  canvas{
    width:100%;
    height:calc(100%);
  }
</style>
