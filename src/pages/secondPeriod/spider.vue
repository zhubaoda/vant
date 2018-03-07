<template>
  	<div class="highcharts-container"></div>
</template>
<script>
  import Highcharts from 'highcharts/highstock';
  import HighchartsMore from 'highcharts/highcharts-more';
  import HighchartsDrilldown from 'highcharts/modules/drilldown';
  import Highcharts3D from 'highcharts/highcharts-3d';
  HighchartsMore(Highcharts)
  HighchartsDrilldown(Highcharts);
  Highcharts3D(Highcharts);
  export default {
    data () {
    	  return {
    	    chart: null,
    	    options: {
	      chart: {
		    polar: true,
		    type: 'line'
		  },
		  title: {
		    text: '各项能力解析'    
		  },
		  pane: {
		    size: '80%'
		  },
		  xAxis: {
		    categories: ['销售', '市场营销', '发展', '客户支持', '信息技术', '行政管理'],
		    tickmarkPlacement: 'on',
		    lineWidth: 0
		  },
		  yAxis: {
		    gridLineInterpolation: 'polygon',
		    lineWidth: 0,
		    min: 0
		  },
		  tooltip: {
		    shared: true,
		    pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
		  },
//		  legend: {
//		    align: 'right',
//		    verticalAlign: 'top',
//		    y: 70,
//		    layout: 'vertical'
//		  },
		  series: [{
		    name: '预算拨款',
		    data: [43000, 19000, 60000, 35000, 17000, 10000],
		    pointPlacement: 'on'
		  }, {
		    name: '实际支出',
		    data: [50000, 39000, 42000, 31000, 26000, 14000],
		    pointPlacement: 'on'
		  }],
		  credits: {
		  	enabled: false
		  }
    	    },
    	    styles: null
    	  };
    },
    methods: {
    	  initChart() {
        console.log(this.$el);
        this.$el.style.width = 300 + 'px';
        this.$el.style.height = 300 + 'px';
        this.chart = new Highcharts.Chart(this.$el, this.options);
      }
    },
    mounted () {
    	  this.initChart();
    }
  }
</script>
<style>
  .highcharts-container {
    width: 800px;
    height: 400px;
  }	
</style>
