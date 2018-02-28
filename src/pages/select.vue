<template>
  <div class="select">
  	<div class="main">
  	  <div class="box" v-for="(todo,index) in todos" :key="index">
  	    <span>{{index | optionSelect}}</span>
  	    <div class="ipt_box">
  	  	  <input type="text" class="ipt" v-model="todo.content" />
  	    </div>
  	    <img src="../../static/images/unselect.svg" v-show="!todo.judge" class="image" @click="change(index)"/>
  	    <img src="../../static/images/seleted.svg" v-show="todo.judge" class="image" @click="change(index)"/>
  	  </div>
  	  <span class="add" @click="add">添加选项</span>
  	  <span class="add" @click="delet">删减选项</span>
  	</div>
  </div>
</template>
<script>
  //默认是设定两个选项，可增加减少选项的场景，输入在输入框中的值数据双向绑定在todos的content上，judge是
  //判断该选项是否被选中
  import { Toast } from 'vant';
  export default {
    data() {
    	  return {
    	  	todos:[{
    	  	  content:'',
    	  	  judge:false
    	  	},{
    	  	  content:'',
    	  	  judge:false	
    	  	}]
    	  }
    },
    methods: {
    	  //添加选项
    	  add () {
    	  	if (this.todos.length < 6) {
    	  	  let obj = {
    	        content:'',
    	        judge:false
    	  	  }
    	      this.todos.push(obj);	
    	  	} else {
    	  	  Toast('最多只能添加6个~');
    	  	}
    	  },
    	  //删除选项
    	  delet () {
    	  	if(this.todos.length > 2) {
    	  	  this.todos.splice(-1,1);
    	  	} else {
    	  	  Toast('选项要求数量大于等于2~')
    	  	} 	    
    	  },
    	  //选择选项
    	  change (index) {	
    	  	this.todos[index].judge = !this.todos[index].judge;
    	  	if(this.todos.length === 2){
    	  	  this.todos.map((d,k) => {
    	        if(k !== index)d.judge = false;
    	  	  })
    	  	}
    	  }
    }
  }
</script>
<style>
  .select{
  	height:100vh;
  	width:100vw;
  	overflow-y: auto;
  }
  .main{
  	padding: 15px;
  }
  .box{
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	margin-bottom: 10px;
  }
  .box>span{
  	font-size: 18px;
  	margin-right:10px;
  }
  .ipt_box{
  	border: 1px solid #ccc;
  	border-radius: 5px;
  	padding: 3px 6px;
  	flex: 1;
  }
  .ipt{
  	border: none;
  	border-radius: 5px;
  }
  .image{
  	width:26px;
  	height:26px;
  	margin-left:10px;
  }
  .add{
  	padding: 5px;
  	color:#0F88EE;
  }
</style>