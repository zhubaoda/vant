<template>
  <div class="my-photo" id="myChart">
    
  </div>
</template>

<script>
  import axios from 'axios'
  let echarts = require('echarts/lib/echarts')
  import 'echarts/lib/chart/map';
  import 'echarts/map/js/china.js';
  import options from './map-option' 
  
  export default {
  	data () {
  	  return {
  	  	
  	  }
  	},
  	methods: {
  	  setChart () {
  	  	let myChart = echarts.init(document.getElementById('myChart'))
  	  	myChart.setOption(options)
  	  	
  	  	var img = myChart.getDataURL();
  	  	console.log(1111, img)
  	  }	  
   },
  	mounted () {
      this.setChart()
  	}
  }
</script>

<style>
	.my-photo {
		width: 100%;
		height: 100vh;
	}
</style>