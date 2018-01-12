<template>
	<transition :name="transition" mode="out-in">
		<div class="answer allview" v-if="showFlg" @touchstart="getStart" @touchmove="getMove" @touchend="getEnd">
			<myHeader :title="title" :giveUp="giveUp" class="heads" @goOther="goOther">
				<span slot="right-text" class="blue">交卷</span>
			</myHeader>
			<div class="main" style="padding: 0 5%;">
				<div class="title_box flex">
					<div class="title_left flex">
						<span class="left_a">{{id}}</span>
						<span class="left_b">/10</span>
						<span class="left_c" style="margin-left:5px;">单选题</span>
					</div>
					<img src="../../static/images/icon_back_grey@3x.png" class="myicon" />
				</div>
				<div class="test_content">
					办理贷款的房屋竣工日期为5年内的，最长贷款年限为30年,他不知道不知道怎么办，啦啦啦啦啦，哈哈哈哈怎么会是哪，这个坏小子
				</div>
				<option-success :show="todo.show" @select="select(todo)" :key="index" v-for="(todo,index) in answerArr" style="margin-top: 15px;">
					<span slot="start">{{todo.options}}&ensp;</span>
					<span slot="content">{{todo.content}}</span>
				</option-success>
				<blue-button @jump="jump" name="下一题" small="small" style="margin:20px auto 30px auto"></blue-button>
			</div>
		</div>
	</transition>
</template>
<script>
	export default {
		name: 'answer',
		data() {
			return {
				start: '',
				end: '',
				id: '',
				transitionName: '',
				transition: '',
				showFlg: true,
				title: '学习晨会考',
				giveUp: true,
				answerArr: [{
					options: 'A',
					content: '办理贷款的房屋竣工日期为5年内的，最长贷款年限为30年',
					show: 0
				}, {
					options: 'B',
					content: '办理房屋的竣工日期5年内',
					show: 0
				}, {
					options: 'C',
					content: '办理房屋的竣工日期5年内，办理贷款的房屋竣工日期为5年内的，最长贷款年限为30年',
					show: 0
				}, {
					options: 'D',
					content: '办理房屋的竣工日期5年内',
					show: 0
				}]
			}
		},
		watch: {
			//监听路由的时候用v-if销毁vue
			'$route' (to, from) {
				this.showFlg = false;
				let $this = this;
				setTimeout(function() {
					$this.showFlg = true;
				}, 100);
				let obj = JSON.parse(localStorage.getItem('id'));
				this.id = obj.id;
				this.transitionName = obj.transition;
			}
		},
		methods: {
			goOther() {
				console.log(1111)
			},
			getStart($event) {
				let touch = $event.targetTouches[0];
				this.start = touch.pageX;
			},
			getMove($event) {
				let touch = $event.targetTouches[0];
				this.end = touch.pageX;
			},
			//模拟跳转的不同id
			getEnd() {
				//向左滑为负数，向右滑为正数
				console.log(this.start - this.end);
				let _this = this;
				if(this.start - this.end < -50) {
					this.transition = 'slide-right';
					var obj = {
						id: Number(this.id) - 1,
						transition: 'slide-right'
					};
					obj = JSON.stringify(obj)
					localStorage.setItem('id', obj);
					this.$router.push('/answer/' + (this.id - 1));
				}
				if(this.start - this.end > 200) {
					this.transition = 'slide-left'
					var obj = {
						id: Number(this.id) + 1,
						transition: 'slide-left'
					};
					obj = JSON.stringify(obj)
					localStorage.setItem('id', obj);
					this.$router.push('/answer/' + (Number(this.id) + 1))
				}
			},
			//选中选项
			select(todo) {
				console.log(111)
				todo.show = 2;
			},
			jump() {
				console.log('jump')
			}
		},
		mounted() {

		},
		created() {
			//把id存放在localStorage里面
			this.id = this.$route.params.id;
			var obj = {
				id: Number(this.id),
				transition: ''
			};
			obj = JSON.stringify(obj)
			localStorage.setItem('id', obj);
		}
	}
</script>
<style>
	.answer,
	.box {
		width: 100vw;
		height: 100vh;
	}
	
	.blue {
		color: #0F88EE;
	}
	
	.myicon {
		width: 16px;
		height: 19px;
	}
	
	.flex {
		display: flex;
		flex-direction: row;
	}
	
	.title_box {
		padding: 5px 0;
		align-items: center;
		justify-content: space-between;
	}
	
	.title_left {
		align-items: flex-end;
	}
	
	.left_a {
		color: #666;
		font-size: 20px;
	}
	
	.left_b {
		color: #666;
		font-size: 14px;
	}
	
	.left_c {
		color: #999;
		font-size: 16px;
	}
	
	.test_content {
		margin-top: 18px;
		color: #333;
		font-size: 16px;
	}
	
	.slide-right-enter-active,
	.slide-right-leave-active,
	.slide-left-enter-active,
	.slide-left-leave-active {
		transition: all .2s
	}
	
	.slide-right-enter {
		transform: translate(-100%, 0);
	}
	
	.slide-right-leave-active {
		transform: translate(100%, 0);
	}
	
	.slide-left-enter {
		transform: translate(100%, 0);
	}
	
	.slide-left-leave-active {
		transform: translate(-100%, 0);
	}
</style>