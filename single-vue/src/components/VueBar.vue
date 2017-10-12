<!--柱状图-->
<script>
  import { Bar,mixins } from 'vue-chartjs';
  const { reactiveProp } = mixins;

  export default Bar.extend({
    mixins: [reactiveProp],
    props: ['options'],
    mounted () {
      this.renderChart(this.chartData, this.options);
    },
    watch:{
      chartData(val){
        this.chartData = val;
      }
    }
  })
</script>
