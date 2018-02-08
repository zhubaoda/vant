<template>
	<div class="weibo">
		<textarea class="text" placeholder="写点东西吧~" v-model="text"></textarea>
		<div class="button">
			<van-button type="primary" size="small" @click="release">发布</van-button>
		</div>
		<div class="box" v-if="!show" :class="{active:first}">
			<div class="inbox" v-for="(todo,index) in arr" :key="index">
				<div class="time">{{todo.time | successTimeFormats}}</div>
				<div class="content">{{todo.content}}</div>
				<div class="comment">
					<img src="../../static/images/like-nor.svg" class="active" v-show="!todo.show" @click="changeShow(todo,1)" />
					<img src="../../static/images/like.svg"  class="active" v-show="todo.show" @click="changeShow(todo,0)" />
					<img src="../../static/images/comment.svg" class="active" @click="startComment(todo)" />
				</div>
				<div class="other" v-for="(item,idx) in todo.other">
					<span>{{item.user}}:</span>{{item.content}}
				</div>
				<div class="input_box active" v-if="todo.autofocus" :key="index">
					<input type="text" class="input"  v-focus="todo.autofocus"/>
				</div>
			</div>
			<div class="button" v-show="arr.length>0">
				<van-button type="default" size="small" style="background-color: #ccc;" @click="empty">清空</van-button>
			</div>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'vant';
	export default {
		name: 'weibo',
		data() {
			return {
				arr: [],
				text: '',
				show: false,
				first: false
			}
		},
		directives: {
			focus: {
				inserted: function(el, {
					value
				}) {
					if(value) {
						el.focus();
					}
				}
			}
		},
		methods: {
			release() {
				if(this.text.length) {
					//第一次页面不从构，没有active效果，现在发布把它变成true就有了这个效果
					this.first = true;
					this.show = true;
					setTimeout(() => {
						let obj = {
							content: this.text,
							time: new Date().getTime(),
							show: 0,
							autofocus: false,
							other: [{
								user: '佛系少年',
								content: '哈哈哈'
							}]
						}
						this.arr.unshift(obj);
						localStorage.setItem('weibo', JSON.stringify(this.arr));
						this.text = '';
						this.show = false;
					}, 1);
				} else {
					Toast('亲~，内容不能为空哦');
				}
			},
			empty() {
				localStorage.removeItem('weibo');
				this.arr = [];
			},
			changeShow(todo, idx) {
				todo.show = idx;
			},
			startComment(todo) {
				todo.autofocus = !todo.autofocus;
			},
			done() {
				console.log(111)
			}
		},
		created() {
			if(JSON.parse(localStorage.getItem('weibo'))) {
				this.arr = JSON.parse(localStorage.getItem('weibo'));
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.weibo {
		padding: 10px 15px;
		box-sizing: border-box;
	}
	
	.button {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		margin-bottom: 20px;
	}
	
	.text {
		width: 100%;
		min-height: 80px;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 5px 10px;
		box-sizing: border-box;
		font-size: 14px;
		color: #333;
	}
	
	.box {
		margin-top: 15px;
	}
	
	.inbox {
		margin-bottom: 10px;
		padding: 5px;
	}
	
	.time {
		font-size: 12px;
		color: #999;
	}
	
	.content {
		font-size: 14px;
		color: #333;
		line-height: 25px;
		text-indent: 1em;
	}
	
	@keyframes changeColor {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	
	.active {
		animation: changeColor 2s forwards;
	}
	.input_box{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.comment {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		border-top: 1px solid #ccc;
		margin-top: 15px;
	}
	
	.comment img {
		width: 20px;
		margin-right: 10px;
	}
	
	.input {
		border: 1px solid #ccc;
		border-radius: 3px;
		flex:1;
		box-sizing: border-box;
		padding: 3px 10px;
	}
	
	.other {
		font-size: 13px;
		color: #999;
		text-indent: 1em;
		margin-bottom: 10px;
	}
	
	.other span {
		color: #666;
	}
</style>