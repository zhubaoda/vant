<template>
  <div class="search">
  	<div class="main">
  	  <div class="box">
  	  	<mySearch @remoteMethod="remoteMethod" @select="select" :options="options"></mySearch>
  	  </div>
  	</div>
  </div>
</template>
<script>
  // 引入的mySearch是搜索的子组件暴露两个方法出来remoteMethod用来
  // 过滤和输入值相似的item，select用来获取点击选择的值
  // py是用来把汉字转换成拼音的js
  import mySearch from '../../components/mySearch.vue';
  import py from '../../common/transform.js';
  export default {
    data () {
    	  return {
    	  	options: [],
    	  	list: ['我们啊','woMenA','哈哈哈','啊啊啊啊','hahahhaha']
    	  }
    },
    components: {
    	  mySearch
    },
    methods: {
    	  remoteMethod (params) {
    	  	if(params.newVal !== '') {
    	  	  setTimeout(() => {
    	  	    this.options = this.list.filter(item => {
    	  	  	  return item.value.toLowerCase().indexOf(params.newVal) > -1;
    	  	    })
    	  	  },200);
    	    } else {
    	    	  this.options = [];
    	    }  	
    	  },
    	  select (params) {
    	  	//暴露选中的值
    	  	console.log(params);
    	  }
    },
    created () {
    	  // 引入的tansform.js是用来把汉字转换成拼音的
    	  this.list = this.list.map(item => {
    	  	let value = py.convertPinyin(item);
    	  	return { value: value, label: item };
    	  })
    }
  }
</script>
<style scoped>
  .search{
  	width:100vw;
  	height:100vh;
  	overflow-y: auto;
  }
  .main{
  	padding:20px;
  }
</style>