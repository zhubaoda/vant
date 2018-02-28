<template v-if="loginType === 'username'">
	<div>
		<!--v-for类似于ng-repeat-->
		<ul class="list">
			<li class="item" :key="index" v-for="(item,index) in list" :class="{active:item==current}" @click="changeColor(item)">{{item}}</li>
		</ul>
		<div v-if="type==='A'">A</div>
		<div v-else-if="type==='B'">B</div>
		<div v-else-if="type==='C'">C</div>
		<div v-else>
			Not A/B/C
		</div>
	</div>
</template>
<script>
	//假设这是后端传过来的列表数据
	var mydata = ['标题一', '标题二', '标题三'];
	export default {
		data() {
			return {
				loginType:'username',
				list: mydata,
				//当前选中的那个item对应的值
				current: mydata[0],
				type: 'A'
			}
		},
		methods: {
			//点击的li改变css样式
			changeColor(item) {
				this.current = item;
			}	
		},
		created() {
           this.type = 'B'
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.item {
		height: 5vh;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		border-bottom: 1px solid #ccc;
		cursor: pointer;
	}
	.list{
		margin-bottom:20px;
		cursor: pointer;
	}
	.active {
		background-color: #FF0000;
	}
</style>