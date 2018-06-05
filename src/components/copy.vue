<style lang="less" scoped>
.send-out {
	position: absolute;
	left: 40%;
	top: -25px;
}
.send-out--other {
	left: 50%;
}
.send {
   position:relative;
   background: rgba(0,0,0,.6);
   border-radius:5px;
   padding:2px 10px;
   color: #fff;
 } 

 .send .arrow {
   position:absolute;
   width:0;
   height:0;
   font-size:0;
   border:solid 7px;
 }
 .send .arrow_bottom {
   bottom: -14px;
   left: 3px;
   border-color: rgba(0,0,0,.6) transparent transparent  transparent;
 }
 .copy {
 	width: 100%;
 	position: relative;
 }
</style>
<template>
  <div class="copy" v-holdDown="{ 'func': longPress }">
  	<slot name="title">hahhahh</slot>
  	<div class="send-out" v-show="show" @click="copyNext">
	   <div class="send">
          <span class="send_word">复制号码</span>
          <div class="arrow arrow_bottom"></div>
       </div> 
    </div>
  </div>
</template>

<script>
  export default {
  	props: {
  	  show: {
  	  	type: Boolean,
  	  	default: true
  	  }
  	},
  	methods: {
  	  longPress () {
  	  	console.log(21321)
  	  	alert(123131)
  	  },
  	  copyNext () {
  	  	console.log('hahhha')
  	  }
  	}
  }
</script>

