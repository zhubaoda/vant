<template>
  <div class="search">
  	<div class="main">
  	  <div class="boxs">
  	  	<mySearch @remoteMethod="remoteMethod" @select="select" :options="options"></mySearch>
  	  </div>
  	  <p style="
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
">
 该属性的表现是现实中你见到的吸附效果。（CSS3）* CSS3新增属性可能存在描述错误及变更，仅供参考，持续更新
</p>
  	  <upLoadImg></upLoadImg>
  	</div>
  </div>
</template>
<script>
  // 引入的mySearch是搜索的子组件暴露两个方法出来remoteMethod用来
  // 过滤和输入值相似的item，select用来获取点击选择的值
  // py是用来把汉字转换成拼音的js
  import mySearch from '../../components/mySearch.vue';
  import interfaces from '../../interfaces/index'
  import axios from 'axios'
  import py from '../../common/transform.js';
  import upLoadImg from '../../components/common/upLoadImg.vue'
  export default {
    data () {
    	  return {
    	  	options: [],
    	  	mydata: null,
    	  	list: ['我们啊','woMenA','哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈','啊啊啊啊','hahahhaha']
    	  }
    },
    components: {
    	  mySearch,
    	  upLoadImg
    },
    methods: {
    	  remoteMethod (params) {
    	  	if(params.newVal !== '') {
    	  	  setTimeout(() => {
    	  	    this.options = this.list.filter(item => {
    	  	  	  return item.value.toLowerCase().indexOf(params.newVal) > -1 || item.label.toLowerCase().indexOf(params.newVal) > -1;
    	  	    })
    	  	    console.log(this.options);
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
    async created () {
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