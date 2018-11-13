<template>
  <div>
  	混合mix
  	<div class="button" @click="bar">点击触发方法</div>
  </div>
</template>

<script>
//混合mixin
//created先调用的是混合里面的created钩子函数
//当混合和组件自身存在同样的方法名字，会取组件自身的方法
var mixin = {
	created(){
		console.log('混合对象的钩子函数')
	},
	methods:{
		bar(){
			console.log('来自混合的方法bar')
		}
	}
}
export default {
  mixins:[mixin],
  data () {
    return {
      
    }
  },
  methods:{
  	 bar(){
		console.log('来组件的方法bar')
	 }
  },
  created(){
  	   console.log('组件的钩子函数')
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
