<template>
  <div class="find">
    <div class="main">
      <div class="drug" id="drug">热门药材</div>
    </div>
    <div class="main white">
      <div class="item" v-for="(todo,index) in arr" :key="index" @click="select(todo.id)">
      	<span>{{todo.name}}</span>
      	<img src="/static/images/check.svg" class="image" v-show="selectMap[todo.id]"/>
      </div>
    </div>
    <div class="main">
      <div>被选中的</div>
    </div>
    <div class="main white">
      <div class="item" v-for="(id,index) in selectArr" :key="index" @click="delet(id)">{{allMap[id].name}}</div>
    </div>
  </div>
</template>
<script>
  import list from '../../common/list.js'
  export default {
  	data () {
  	  return {
  	  	arr: list.allDurg,
  	  	selectArr: [],
  	  	allMap: {},
  	  	selectMap: {}
  	  }
  	},
  	methods: {
  	  //在热门药材中没选中的点击变成选中，选中的变成未选中
  	  //下面被选中的也要跟着出现和消失热门药材中选中和取消选中的
  	  select (id) {
  	  	//selectMap是被选中的id的集合，一个对象形式的字典
  	  	//selectArr是所有被选中的药材的id的集合，它是一个数组
  	  	//如果之前没有选中这个药材，则向selectArr添加id，selectMap中加入该id属性
  	  	//如果之前已经选中这个药材，这里selectArr删除id，selectMap去掉该id属性
  	  	if (!this.selectMap[id]) {
  	  	  this.selectArr.push(id);
  	  	  this.selectArr.map(d => this.selectMap[d] = d);
  	  	} else {
  	  	  this.selectArr.splice(this.selectArr.findIndex(d => d === id),1);
  	  	  delete this.selectMap[id];
  	  	}
  	  },
  	  delet (id) {
  	  	//点击下面被选中的药材，相当于删除
  	  	//删除时，这里selectArr删除id，selectMap去掉该id属性
  	  	this.selectArr.splice(this.selectArr.findIndex(d => d === id),1);
  	  	delete this.selectMap[id];
  	  }
  	},
  	created () {
  	  //对于数组中的药材由于每一次查询里面某个元素时都需要循环，所以初始化的时候我们把它变成对象的形式
  	  //id作为属性，数组中的每个对象作为value，这样就可以通过id去查询每一个对象，这里我们称这个对象为药材字典
  	  this.arr.map(d => this.allMap[d.id] = d);
  	},
  	mounted () {
  		document.getElementById('drug').onclick = () => {
  			function a () {
  				var i = 0;	
  				function b () {
  					console.log(++i);
  				}
  				return b;
  			}
  			var c = a();
  			c();
  		}
  		
  		var arr = [8,7,3,9];
  		for (var i = 0;i < arr.length; i++) {
  			for (var j = 0; j < arr.length - i - 1; j++) {
  				if (arr[j] > arr[j+1]) {
  						var temp = arr[j];
  				    arr[j] = arr[j+1];
  				    arr[j+1] = temp;
  				}
  			}		
  		}
  	}
  }
</script>
<style scoped>
  .find{
  	width:100vw;
  	height:100vh;
  	background-color:#ece8e7;
  }	
  .main{
  	padding: 15px; 	
  }
  .white{
  	background-color: #fff;
  	display: flex;
  	flex-direction: row;
  	flex-wrap: wrap;
  }
  .item{
  	padding:5px 0;
  	width:70px;
  	text-align: center;
  	background-color: #ece8e7;
  	border-radius: 4px;
  	margin:5px;
  	color:#999;
  	position:relative;
  }
  .image{
  	position: absolute;
  	bottom: 0;
  	right:0;
  	width:20px;
  }
</style>