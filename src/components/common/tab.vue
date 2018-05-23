<style lang="less" scoped>
  .tabbar {
  	width:100%;
  	.display_box {
  	  display: flex;
  	  flex-direction: row;
  	  justify-content: center;
  	  align-items: center;
  	}
  	.outbox {
  	  width:100%; 
  	  height: 42px;
  	  overflow: hidden;
  	}
  	.tab {
  	   width: 100%;
  	   .item {
  	     flex:1;
  	   }
  	}
  	.scroll_tab {
  	   overflow-x: scroll;
  	   overflow-y: hidden;
  	   width: 100%;
  	   display: flex;
  	   position: absolute;
  	   left: 0;
  	   .item {
  	   	 
  	   }
  	}
  	.scroll_tab::-webkit-scrollbar {
       display: none;
    }
  	.item_box {
     	padding: 10px 0;
     	font-size: 14px;
     	color: #8f8f8f;
     	border-bottom: 2px solid transparent;
     }
     .item_active {
     	color: #3a3a3a;
     	border-bottom: 2px solid #3a3a3a;
     }
  }
</style>
<template>
   <div class="tabbar">
   	 <div class="display_box tab" v-if="canScroll === 0">
   	 	<div class="item display_box" v-for="(todo,index) in list" :key="index" @click="selectBar(index)">
   	 		<div :class="[ index == idx ? 'item_active' : '', 'item_box' ]">{{ todo }}</div>
   	 	</div>
   	 </div> 	 
   	 <div class="outbox" v-else>
   	   <div  class="scroll_tab"   ref="scrollTab">
   	 	<div class="display_box" ref="scrollBox">
   	 	  <div class="item display_box" :style="{ width: itemWidth + 'px' }"  v-for="(todo,index) in list" :key="index" @click="selectBar(index)">
   	 		<div :class="[ index == idx ? 'item_active' : '', 'item_box' ]">{{ todo }}</div>
   	 	  </div>
   	 	</div>
   	   </div>
     </div>  	 
   </div>
</template>

<script> 
  export default {
    data () {
    	  return {
    	  	scrollLeft: 0,
    	  	canScrollWidth: 0,
    	  	offsetWidth: 0
    	  }
    },
    props: {
    	  list: {
    	  	type: Array,
    	  	default: []
    	  },
    	  idx: {
    	  	type: Number,
    	  	default: 0
    	  },
    	  canScroll: {
    	  	type: Number,
    	  	default: 0
    	  },
    	  itemWidth: {
    	  	type: Number,
    	  	default: 100
    	  }
    },
    methods: {
    	  selectBar (index) {
    	  	this.$emit('selectBar', index);
    	  }
    },
    mounted () {
    	  if (this.canScroll != 0) {
    	  	this.$refs.scrollBox.style.width = (this.list.length)*(this.itemWidth) + 'px';
    	  	this.canScrollWidth = (this.list.length)*(this.itemWidth) - document.body.offsetWidth;
    	  	this.offsetWidth = document.body.offsetWidth;
    	  	this.$refs.scrollTab.addEventListener('scroll', (e) => {
    	  	  this.scrollLeft = e.target.scrollLeft;
    	  	})
    	  }
    }
  }
</script>

