<template>
  <div class="v_select">
  	<input type="text" v-model="keyword" @blur="leave" @focus="come"/>
  	<div class="box" v-show="keyword && show">
  	   <div v-for="(item,index) in options" :key="index" @click="select(item)" class="item">{{item.label}}</div>
  	</div>
  </div>
</template>
<script>
  export default {
    data () {
    	  return {
    	  	keyword: '',
    	  	show: false
    	  }
    },
    props: {
    	  options: null
    },
    methods: {
    	  select (item) {
    	  	this.keyword = item.label;
    	  	this.$emit('select',item);
    	  },
    	  come () {
    	  	this.show = true;
    	  },
    	  leave () {
    	  	this.show = false;
    	  }
    },
    watch: {
    	  keyword: function (newVal,oldVal) {
    	  	this.$emit('remoteMethod', {
    	  	  newVal: newVal,
    	  	  oldVal: oldVal
    	  	});
    	  }
    }
  }
</script>
<style scoped>
  .v_select{
  	width:100%;
  	height:35px;
  	border:1px solid #409EFF;
  	border-radius: 4px;
  	box-sizing: border-box;
  	position: relative;
  }
  .box{
  	position: absolute;
  	width:100%;
  	height:200px;
  	padding: 10px 15px;
  	overflow-y: scroll;
  	top: 45px;
  	box-shadow: 0 0 20px #ccc;
  	border-radius: 4px;
  	box-sizing: border-box;
  }
  .box .item {
  	width:90%;
  	overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  input{
  	border:none;
  	padding: 5px 10px;
  	border-radius: 4px;
  }		
</style>