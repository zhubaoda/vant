<style lang="less" scoped>
.onpulls {
  position: relative;
  background-color: #f5f5f5;
  height: 100vh;
  .list {
  	.item {
  		width: 100%;
  		border: 1px solid #ccc;
  		padding: 40px 0;
  	}
  }
}

</style>
<template>
  <div class="onpulls">
    <onpulls :onpull="onpull" :pulldown="pulldown"  @changeOnpull="changeOnpull" @changePullDown="changePullDown"> 
    	  <div class="list">
    	  	<div class="item" v-for="(todo,index) in list" :key="index">
    	  		{{todo}}
    	  	</div>
    	  </div>
    </onpulls>
  </div> 
</template>

<script>
  // 引入上拉加载，下拉刷新的组件	
  import onpulls from '../../components/common/onpulls'
  export default {
  	data () {
  	  return {
  	  	list: [0,1,2,3,4,5,6,7,8,9],
  	  	onpull: false,
  	  	pulldown: false
  	  }
  	},
  	components: {
  	  onpulls
  	},
  	created() {
  	  console.log(2)
      function fact(n){
        return n > 1 ? n * fact(n-1) : 1;
      }
      console.log(fact(0) + fact(0) + fact(0) + fact(0))
  	},
  	methods: {
  	  // 模拟的获取接口数据函数	
  	  async getList() {
  	  	return new Promise((resolve) => {
  	  	  if (this.onpull) {
  	  	  	setTimeout(() => {
  	  	  	  this.list = [0,1,2,3,4,5,6,7,8,9]
  	  	  	  resolve()
  	  	  	}, 1500)
  	  	  } else {
  	  	  	let len = this.list.length;
  	  	  	if (len < 30) {
  	  	      setTimeout(() => {
  	  	  	    for (let i=len;i<len+10;i++) {
  	  	  	      this.list.push(i)
  	  	  	    }
  	  	  	    resolve()
  	  	      },1500) 
  	  	  	} else {
  	  	  	  resolve()
  	  	  	}
  	  	  }
  	  	})
  	  },
  	  // 下拉刷新
  	  async changeOnpull() {
  	  	this.onpull = true;
  	  	await this.getList();
	  	this.onpull = false;
  	  },
  	  // 上拉加载
  	  async changePullDown() {
  	  	this.pulldown = true;
  	  	await this.getList();
  	  	this.pulldown = false;
  	  }
  	}
  }
</script>

