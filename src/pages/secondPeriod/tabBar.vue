<style lang="less" scoped>
  .tab_bar {
  	width: 100%;
  }
</style>
<template>
   <div class="tab_bar">
   	 <tab :list="tabList" 
   	 	  :idx="idx" 
   	 	  :canScroll="canScroll" 
   	 	  :itemWidth="itemWidth" 
   	 	  @selectBar="selectBar">
   	 </tab>
   </div>
</template>

<script>
  import tab from '../../components/common/tab'
  export default {
    data () {
    	  return {
    	  	tabList: [], // 循环的列表数据
    	  	idx: '', // 默认选中第几个
    	  	canScroll: 1, // 0是不可滚动的tab，1是可滚动的
    	  	itemWidth: 100 // 设置每个item的宽度
    	  }
    },
    components: {
    	  tab
    },
    methods: {
    	  // 切换tab
    	  selectBar (index) {
    	  	this.idx = index;
    	  }
    },
    created () {
    	  // 初始化数据
    	  this.tabList = ['选项一', '选项二', '选择三', '选项四', '选项五'];
    	  this.idx = 0;
    }
  }
</script>

