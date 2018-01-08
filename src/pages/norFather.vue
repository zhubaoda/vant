<template>
  <div>
  	<span>非父子组件1</span>
  	<div class="button" @click="send">点击发送</div>
  </div>
</template>

<script>
//引入common.js实现非父子组件之间通讯，在common中实例化的那个Vue
import common from '../common/common.js'
export default {
  data () {
    return {
      
    }
  },
  methods:{
  	 send(){
  	 	//发送事件
  	 	common.$emit('send','我是来自另外一个组件的信息');
  	 }
  },
  created(){
  	   //接收事件
  	   common.$on('send',function(val){
  	   	   console.log(val)
  	   })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button{
	width:200px;
	height:100px;
	border:1px solid red;
}
</style>
