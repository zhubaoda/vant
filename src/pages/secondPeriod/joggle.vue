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
  	  	
  	  }
  	},
  	computed: {
  	   name () {
  		 return this.$store.state.infor.name
  	   },
  	   sex () {
  	   	 return this.$store.state.infor.sex
  	   }
  	},
  	methods: {
  	  
  	},
  	created () {
  	  // 在vuex里面调用接口	
      this.$store.dispatch('getInfor')
  	}
  }
</script>

