<template>
	<div class="myTest"  @touchstart="getStart" @touchmove="getMove" @touchend="getEnd">	
		<transition :name="transition" mode="out-in">
			<div class="main" style="padding: 0 5%;" v-if="showFlg">
				2212121
			</div>
		</transition>
	</div>
</template>
<script>
	export default {
		name: 'myTest',
		data() {
			return {
				start: '',
				end: '',
				id: '',
				transitionName: '',
				transition: '',
				showFlg: true,
				idx:1,
				list:[1,2,3]
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
				let obj = JSON.parse(sessionStorage.getItem('id'));
				this.id = obj.id;
				
			}
		},
		methods: {
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
				//如果仅仅是点击的话不会触发move事件，所以这里用end存在的情况判断是滑动而不是点击
				if(this.end) {
					var leftRight = null;
					var upDown = null;
					leftRight = this.start - this.end;
					upDown = this.startY - this.endY;
					var id = null;
					console.log(leftRight);
					if(leftRight < -150 && Math.abs(leftRight) > Math.abs(upDown) && this.idx > 1) {
						 console.log(11111);
						//清空这一次的end
						this.end = '';
						this.transition = 'slide-right';
						id = this.list[this.idx - 2];
						var obj = {
							id: Number(id),
							index: this.idx - 1,
							transition: 'slide-right'
						};
						obj = JSON.stringify(obj);
						sessionStorage.setItem('id', obj);
//						this.saveId();
						this.$router.push('/answer/' + id + '?examId=' + this.examId + '&paperId=' + this.paperId);
					}
					if(leftRight > 150 && Math.abs(leftRight) > Math.abs(upDown) && this.idx < this.list.length) {
						console.log(22222);
						//清空这一次的end
						this.end = '';
						this.transition = 'slide-left'
						id = this.list[this.idx];
						var obj = {
							id: Number(id),
							index: this.idx + 1,
							transition: 'slide-left'
						};
						obj = JSON.stringify(obj);
//						this.saveId();
						sessionStorage.setItem('id', obj);
						this.$router.push('/answer/' + id + '?examId=' + this.examId + '&paperId=' + this.paperId);
					}
				}
			}
		},
		mounted() {

		},
		created() {
			//把id存放在sessionStorage里面
			this.id = this.$route.params.id;
			var obj = {
				id: Number(this.id),
				transition: ''
			};
			obj = JSON.stringify(obj)
			sessionStorage.setItem('id', obj);
		}
	}
</script>
<style scoped>
	.slide-right-enter-active,
	.slide-right-leave-active,
	.slide-left-enter-active,
	.slide-left-leave-active {
		transition: all .5s;
		-moz-transition: all .5s;
		/* Firefox 4 */
		-webkit-transition: all .5s;
		/* Safari 和 Chrome */
		-o-transition: all .5s;
		/* Opera */
	}
	
	.slide-right-enter {
		transform: translate(-100%, 0);
		-ms-transform: rotate(-100%, 0);
		/* IE 9 */
		-moz-transform: rotate(-100%, 0);
		/* Firefox */
		-webkit-transform: rotate(-100%, 0);
		/* Safari 和 Chrome */
		-o-transform: rotate(-100%, 0);
		/* Opera */
	}
	
	.slide-right-leave-active {
		transform: translate(100%, 0);
		-ms-transform: rotate(100%, 0);
		/* IE 9 */
		-moz-transform: rotate(100%, 0);
		/* Firefox */
		-webkit-transform: rotate(100%, 0);
		/* Safari 和 Chrome */
		-o-transform: rotate(100%, 0);
		/* Opera */
	}
	
	.slide-left-enter {
		transform: translate(100%, 0);
		-ms-transform: rotate(100%, 0);
		/* IE 9 */
		-moz-transform: rotate(100%, 0);
		/* Firefox */
		-webkit-transform: rotate(100%, 0);
		/* Safari 和 Chrome */
		-o-transform: rotate(100%, 0);
		/* Opera */
	}
	
	.slide-left-leave-active {
		transform: translate(-100%, 0);
		-ms-transform: rotate(-100%, 0);
		/* IE 9 */
		-moz-transform: rotate(-100%, 0);
		/* Firefox */
		-webkit-transform: rotate(-100%, 0);
		/* Safari 和 Chrome */
		-o-transform: rotate(-100%, 0);
		/* Opera */
	}
</style>