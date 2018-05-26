<style lang="less" scoped>
 .line_two {
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
 }
 @blue: #369;
 .one_line {
 	button {
 	  color: #fff;
 	  padding: 10px;
 	  margin: 10px;
 	  background: linear-gradient(left, lighten(@blue, 10%) 0%, @blue 100%);/*颜色函数*/
 	}
 	height: 100vh;
 	width: 100%;
 	.ceng1 {
 	  padding: 15px 10px;
 	  text-align: center;
 	  font-size: 14px;
 	  box-sizing: border-box;
 	  border: 1px solid #ccc;
 	  line-height: 1.5;
 	  .ceng2 {
 	  	display: inline-block;
 	  	text-align: left;
 	  	strong {
 	  	  .line_two;
 	  	  overflow: hidden;
 	  	}
 	  }
 	}
 }
</style>

<template>
  <div class="one_line">
  	<button @click="changeIt">切换为{{button_text}}</button>
  	<div class="ceng1">
  		<div class="ceng2">
  			<strong>{{texts}}</strong>
  		</div>
  	</div>
  </div>
</template>

<script>
  export default {
    data () {
    	  return {
    	  	show: true,
    	  	button_text: '长文字',
    	  	texts: '我是只有一行'
    	  }
    },
    methods: {
    	  changeIt () {
    	  	if (this.show) {  	  	 
    	  	  this.texts = '我是超过两行的啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
    	  	  this.button_text = '短文字';
    	  	} else {
    	  	  this.texts = '我是只有一行';
    	  	  this.button_text = '长文字';
    	  	}
    	  	this.show = !this.show;
    	  }
    },
    mounted () {
    	  
    }
  }
</script>


