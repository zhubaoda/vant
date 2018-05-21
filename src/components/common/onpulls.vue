<style lang="less" scoped>
.onpull {
  overflow-y:auto;
  height: 100%;
  box-sizing: border-box;
  .cirle {
  	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 10px 0;
  }
}

@keyframes reducePadding {
   0% {
     padding-top: 150px;
   }
   100% { 
     padding-top: 0px;
   }
}

.onpull_active {
   animation: reducePadding 1.5s forwards;
}

@keyframes roll {
   0% {
     transform: rotate(0deg);
   }
   100% { 
     transform: rotate(360deg);
   }
}
.myroll {
	display: block;
	width: 24px;
   	height: 24px;
   	position: relative;
   	border-radius: 50%;	
   	border: 4px solid rgba(0, 134, 139, .4);
   	border-top: 4px solid transparent;
	animation: roll 1.5s infinite linear;
}

</style>
<template>
  <div  ref="touchBox" :class="[onpull ? 'onpull_active' : '', 'onpull']">
    <div class="cirle" v-show="onpull">
       <i class="myroll"></i>
    </div>	
    <!--<div class="cirle" v-show="scrollTop > 0 && scrollTop <= 100">
       <span>↓</span>
    </div>-->
    <slot></slot>
    <div class="cirle" v-show="pulldown">
       <i class="myroll"></i>
    </div>	
  </div> 
</template>

<script>
  export default {
  	data () {
  	  return {
  	  	positions: {
  	  	  sY: 0,
  	  	  eY: 0
  	  	}
  	  }
  	},
  	props: {
  	  onpull: {
  	  	type: Boolean,
  	  	default: false
  	  },
  	  pulldown: {
  	  	type: Boolean,
  	  	default: false
  	  }
  	},
  	watch: {
  	  positions: {
  	  	handler (oldval, newval) {
  	  	  if (newval.eY - newval.sY > 140) {
  	  	    this.initData();
  	  	  	this.$emit('changeOnpull');
  	  	  }
  	  	},
  	  	deep: true
  	  }
  	},
  	methods: {
  	  // 初始化数据	
  	  initData () {
  	  	this.$refs.touchBox.style.paddingTop = 0;
  	  	this.positions = { sY: 0, eY: 0 };
  	  }
  	},
  	// 监听touchstart，touchmove，touchend模拟下拉刷新事件
  	// 监听scroll事件， 模拟上拉加载事件
  	mounted () {
  	  this.$refs.touchBox.addEventListener('touchstart', (e) => {
  	  	this.positions.sY = e.targetTouches[0].pageY
  	  })
  	  this.$refs.touchBox.addEventListener('touchmove', (e) => { 
	  	this.positions.eY = e.targetTouches[0].pageY
        if (this.positions.eY - this.positions.sY < 150) {
        	  this.$refs.touchBox.style.paddingTop = this.positions.eY - this.positions.sY + 'px';
        }     
  	  })
  	  this.$refs.touchBox.addEventListener('touchend', (e) => {
  	  	if (this.positions.eY - this.positions.sY <= 100) {
  	  	  this.initData()
  	  	}
  	  })
  	  this.$refs.touchBox.addEventListener('scroll', (e) => {
        if (e.target.scrollTop === e.target.scrollHeight - document.body.clientHeight) {
        	  this.$emit('changePullDown') 
        }
  	  })
  	}
  }
</script>

