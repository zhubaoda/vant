<template>
	<div class="list">
		<van-pull-refresh v-model="isLoading">
			<ul v-waterfall-lower="loadMore" waterfall-disabled="disabled" waterfall-offset="400">
				<li class="item" :key="index" v-for="(todo,index) in renderList" @click="jump(todo.router)">{{index+1}}{{ todo.title }}</li>
			</ul>
		</van-pull-refresh>
	</div>
</template>
<script>
	//引入vant框架瀑布流组件，使用方法见vant官网https://www.youzanyun.com/zanui/vant#/zh-CN/component/waterfall
	import { Waterfall } from 'vant';
	import { Toast } from 'vant';
	//引入list的数据
	import listData from '../common/list.js'
	export default {
		name: 'list',
		data() {
			return {
				isLoading: false,
				//list可视为后台数据
				list: listData.list,
				//初始假设我已经拿了5条数据
				renderList: [],
				disabled: false,
				//初始页码1，分页数5
				param: {
					pageNo: 1,
					pageSize: 5
				},
				//在created计算count数remainder数
				count: 1,
				remainder: null
			}
		},
		watch: {
			//下拉刷新
			isLoading() {
				if(this.isLoading) {
					setTimeout(() => {
						Toast('刷新成功');
                        this.isLoading = false;
						this.param.pageNo = 1;
						//下拉刷新初始化数据
					    this.renderList = this.list.slice(0,5)
					}, 500);
				}
			}
		},
		directives: {
			WaterfallLower: Waterfall('lower')
		},
		methods: {
			jump(router) {
				//跳转到对应路由
//				console.log(router)
                this.$router.push(router)       
			},
			//上拉瀑布流
			loadMore() {
				//当页数小于等于count的时候才执行瀑布流
				if(this.param.pageNo <= this.count) {
					//正常分页每一页数量
					var size = 5;
					//正常分页现有总数量
					var num = this.param.pageNo * size;
					
					//当页码等于count的时候取最后一次分页size是最后一次余数
					if(this.param.pageNo == this.count) {
						size = this.remainder
					}
					this.disabled = true;
					setTimeout(() => {
						for(let i = 0; i < size; i++) {
							this.renderList.push(this.list[num + i])
						}
						//添加数据后页码加1
						this.param.pageNo++;
						this.disabled = false;
					},500)
				}
			}
		},
		beforeRouteEnter(to, from, next){
			//进入
			next();
		},
		//路由跳转前钩子函数
		beforeRouteLeave (to, from, next) {
			//from是当前路由的相关信息，to是将要去的路由的相关信息
            //next()就是放行，放他到下一个路由
            next();
	    },
		created() {
			console.log(2);
			//count要比实际分页小1，remainder最后一次分页数量
			this.count = parseInt(this.list.length / 5);
			this.remainder = this.list.length - this.count * 5;
			//初始化列表数据
			this.renderList = this.list.slice(0,5);
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*弹性盒子布局，横向布局，左右居中，上下居中*/
	.item {
		height: 20vh;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		border: 1px solid #ccc;
	}
	.list{
		height:100vh;
		overflow: scroll;
	}
</style>