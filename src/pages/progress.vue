<template>
  <div class="progress">
	<div class="warpper">
	  <span>{{fills}}%</span>
	  <div class="fill" ref="myfill" :style="{width: fills + '%'}"></div> 
	</div>	
  </div>
</template>
<script>
  //通过修改fills的值就可以改变进度条的进度
  export default {
    data () {
	  return {
	    fills: 10
	  }
	}
  }
</script>
<style scoped>
  .progress{
	width:100vw;
	height: 100vh;
  }
  .warpper{
  	margin-top:20px;
  	width:100%;
  	height:20px;
  	font-size:13px;
  	text-align: center;
  	border-radius: 10px;
  	position: relative;
  	border:1px solid gray;
  	box-sizing: border-box;
  	overflow: hidden;
  }
  .warpper span{
  	position: absolute;
  }
  .fill{
  	width:50%;
  	height:18px;
  	background-color: yellow;
  }
</style>