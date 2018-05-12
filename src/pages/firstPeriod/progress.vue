<template>
  <div class="progress">
  	<div class="button" @click="goWidth">开始</div>
	<div class="warpper">
	  <span>{{fills}}%</span>
	  <div class="fill" :style="{width: fills + '%'}"></div> 
	</div>	
	<div @click="startTimer" class="code_text">{{codeText}}</div>
	
	<input type="text" v-model="txt" />
	
  </div>
</template>
<script>
  import { Toast } from 'mint-ui';
//import { Scroller } from 'vux'
  //通过修改fills的值就可以改变进度条的进度
  export default {
    data () {
	  return {
	    fills: 0,
	    codeText: '获取验证码',
	    status: 2,
	    len: 0,
	    txt: ''
	  }
	},
//	components: {
//	  Scroller
//	},
	created () {
	  let str = "T";
	  let len = this.lenFor(str);
	  console.log(len)
      
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
	  },
	  startTimer () {
        let s = 5
        this.codeText = `剩余${s}秒`
        this.timer = setInterval(() => {
          s--
          s = s < 10 ? '0' + s : s
          this.codeText = `剩余${s}秒`
          s = +s
          if (s <= 0) {
            this.codeText = '获取验证码'
            this.disabled = false
            clearInterval(this.timer)
          }
        }, 1000)     
      },
      // 计算字节数
      lenFor (str){
　　    var byteLen=0,len=str.length;
　　    if (str) {
　　　　  for(var i=0; i<len; i++){
　　　　　　if(str.charCodeAt(i)>255){
　　　　　　  byteLen += 2;
　　　　　　} else {
　　　　　　  byteLen++;
　　　　　　}
　　　　  }
　　　　  return byteLen;
　　    } else {
　　　　  return 0;
　　    }
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
  .code_text {
  	margin-top: 20px;
  }
</style>