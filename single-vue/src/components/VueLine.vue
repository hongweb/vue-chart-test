<!--折线图-->
<script>
  import { Line,mixins } from 'vue-chartjs';
  const { reactiveProp } = mixins;

  export default Line.extend({
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

