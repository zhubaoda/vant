<template>
	<div class="paging">
		<div class="left-page normal-color common-style" @click="lastPage">上一页</div>
		<div class="more" @click="getMore(0)" v-show='startVal > 0'>...</div>
	    <div v-for="(todo, index) in pageArr" @click="thisPage(todo)" :class="[todo === current ? 'active' : 'normal-color', 'common-style']">{{todo + 1}}</div>
	    <div class="more" @click="getMore(1)" v-show='endVal < total-1'>...</div>
		<div class="right-page normal-color common-style" @click="nextPages">下一页</div>
		<div class="allpage">
			共<span>{{Math.ceil(total/pageSize)}}</span>页
		</div>
		<div class="go">
			<span>到第</span>
			<input type="number" v-model="currentPage" class="pagenum"/>
			<span>页</span>
		</div>
		<div class="confirm common-style" @click="confirm">确定</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				currentPage: 1 // 当前页数
			}
		},
		props: {
			// 展示的对应的索引数组
			pageArr: {
				type: Array,
				default: []
			},
			// 每页数量
			pageSize: {
				type: Number,
				default: 5
			},
			// 当前第几条
			current: {
				type: Number,
				default: 0
			},
			// 总条数
			total: {
				type: Number,
				default: 0
			},
			// 当前开始第几条
			startVal: {
				type: Number,
				default: 0
			},
			// 当前结束第几条
			endVal: {
				type: Number,
				default: 0
			}
		},
		watch: {
			currentPage (newVal, oldVal) {
				if (typeof +newVal !== 'number') {
					this.currentPage = '';
				} else if (+newVal > Math.ceil(this.total/this.pageSize)) {
					this.currentPage = Math.ceil(this.total/this.pageSize);
				} else if (+newVal < 1) {
					this.currentPage = '';
				}
			}
		},
		methods: {
			confirm () {
				if (this.currentPage) {
					let arr = [];
					let i = (this.currentPage - 1) * this.pageSize;
					let end = (this.currentPage - 1) * this.pageSize + this.pageSize;
					if (this.total < end) {
						end = this.total
					}
					for (i; i < end; i++) {
						arr.push(i);
					}
					this.$emit('changePages', {
						idx: (this.currentPage - 1) * this.pageSize,
						arr: arr
					});
				}
			},
			async lastPage () {
				if (this.current > 0) {
					let idx = this.current - 1;
					let arr = [];
					if (idx < this.startVal) {
						arr = this.changeArr(0);
					}
					this.$emit('changePages', {
						idx: idx,
						arr: arr
					});
				}	
			},
			nextPages () {
				if (this.current < this.total-1) {
					let idx = this.current + 1;
					let arr = [];
					if (idx > this.endVal) {
						arr = this.changeArr(1);
					}
					this.$emit('changePages', {
						idx: idx,
						arr: arr
					});
				}
			},
			thisPage (idx) {
				if (this.current !== idx) {	
					this.$emit('changePages', {
						idx: idx,
						arr: []
					});
				}
			},
			getMore (param) {
				let arr = this.changeArr(param);
				this.$emit('getMore', arr);
			},
			changeArr (param) {
				let arr = [];
				if (param) {
					let currentEndPage = this.pageArr[this.pageSize-1]+1;
					let max = currentEndPage + this.pageSize;
					if (this.total < max) {
						max = this.total;
					}
					for(let i = currentEndPage; i < max; i++) {
						arr.push(i);
					}							
				} else {
					let currentEndPage = this.pageArr[0] - this.pageSize;		
					for(let i = currentEndPage; i < this.pageArr[0]; i++) {
						arr.push(i);
					}	
				}
				return arr;
			}
		}
	}
</script>

<style scoped>
	.paging {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.common-style {
		padding: 5px 10px;
		margin-right: 10px;
		border-radius: 4px;
		border: 1px solid #ccc;
		cursor: pointer;
	}
	.more {
		margin-right: 10px;
		cursor: pointer;
	}
	.normal-color {
		color: #000;	
		background-color: rgba(255,238,238, .4);
	}
	.active {
		color: #fff;
		background-color: red;
	}
	.allpage {
		margin: 0 12px;
		color: #999;
	}
	.go {
		color: #999;
	}
	.pagenum {
		width: 33px;
		height: 20px;
		border: 1px solid #ccc;
		border-radius: 3px;
		text-align: center;
		color: #999;
	}
	.confirm {
        background-color: red;
        color: #fff;
        margin-left: 10px;
	}
</style>