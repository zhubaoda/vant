<template>
  <div class="arr">
  	<div v-for="(item,index) in arr">
  	  {{item}}
  	</div>
  	<div @click="delRepeat">es6去重//this.arr = Array.from(new Set(this.arr))</div>
  </div> 
</template>

<script>
  export default {
  	data () {
  	  return {
  	  	arr: [1,1,2,2,4,4,3,4]
  	  }
  	},
  	methods: {
  	  delRepeat () {
  	  	//es6数组去重的方法
  	  	this.arr = Array.from(new Set(this.arr));
  	  }
  	},
  	created () {

  	}
  }
</script>

<style>
	.mybox {
		display:flex;
		flex-direction: row;
		flex-wrap: wrap;
		width:100%;
	}
	.mybox>div{
		width:33%;
		border:1px solid red;
		box-sizing: border-box;
	}
</style>