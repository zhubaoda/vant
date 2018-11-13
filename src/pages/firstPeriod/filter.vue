<template>
  <div>
  	<span>一、全局注册的过滤器</span>
  	<br />
  	<span style="color:red">{{msg | filterText(5)}}</span>
  	<br />
  	<span>二、组件内注册的过滤器</span>
  	<br />
  	<span style="color:red">{{msg | filterLength(6)}}</span>
  </div>
</template>
<script>
//	全局注册的过滤器js代码在common文件夹filter.js里面,要在main.js全局使用
export default {
  data () {
    return {
      msg:'我是过滤器啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦'
    }
  },
  //组件内过滤器
  filters:{
  	filterLength:function(text,len){
  		if(text && text.length>len && len && len>0){
  		    return text.substring(0,len) + '...'
  		}else{
  			return text
  		}
  	}
  },
  methods:{
  	 
  },
  created(){
  	  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
