<template>
  <div class="progress">
  	<div class="button" @click="goWidth">开始</div>
	<div class="warpper">
	  <span>{{fills}}%</span>
	  <div class="fill" :style="{width: fills + '%'}"></div> 
	</div>	
  </div>
</template>
<script>
  import { Toast } from 'mint-ui';
  //通过修改fills的值就可以改变进度条的进度
  export default {
    data () {
	  return {
	    fills: 0
	  }
	},
	methods: {
	  goWidth () {
	  	Toast('提示信息');
	    let func = () => {
	    	  clearInterval(interval);
	    	  if(this.fills < 100){
	    	  	this.fills++;
	    	  	interval = setInterval(func, 200);
	    	  }else{
//	    	  	this.$router.push('/card')
	    	  }
	    }
	    let interval = setInterval(func,200);
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
  .progress .button{
  	margin:10px 10px 0 10px;
  	padding:5px 10px;
  	width:65px;
  	border:1px solid #ccc;
  	text-align: center;
  }
</style>