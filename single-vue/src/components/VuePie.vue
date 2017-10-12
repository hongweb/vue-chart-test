<!--饼图-->
<script>
  import { Pie,mixins } from 'vue-chartjs';
  const { reactiveProp } = mixins;

  export default Pie.extend({
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
