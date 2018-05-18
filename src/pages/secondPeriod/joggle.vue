<style scoped>
.joggle {
  height: 100vh;
  
} 
</style>
<template>
  <div class="joggle">
  	<div class="box">
  	  <span>从接口获取的数据</span>
  	  <span>姓名：{{name}}</span>
  	  <span>性别：{{sex}}</span>
  	</div>
  </div> 
</template>

<script>
  // 调用接口的js	
  import interfaces from '../../interfaces/index'
  export default {
  	data () {
  	  return {
  	  	name: '',
  	  	sex: ''
  	  }
  	},
  	methods: {
  	  async getData () {
  	  	let res = await interfaces.getInfor();
  	  	this.name = res.name;
  	  	this.sex = res.sex;
  	  }
  	},
  	created () {
      this.getData();
  	}
  }
</script>

