<template>
	<div class="card">
		<div class="tab">刮刮乐</div>
		<canvas :class="myback" ref="canvas" width="200" height="100" @touchmove="touchmove"></canvas>
		<div class="box" @click="getCode">
			<span>{{code}}</span>
		</div>
		<div class="tab">抽奖</div>
		<div style="padding: 5px 10px;margin:10px 20px;border:1px solid #ccc;text-align: center;" @click="start">开始</div>
		<div style="padding: 5px 10px;margin:10px 20px;border:1px solid #ccc;text-align: center;" @click="end">结束</div>
		<div class="select">
			<div class="box" v-for="(todo,index) in arr" :class="{active:index==num}" :key="index">
				<span>{{todo}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'card',
		data() {
			return {
				myback: '',
				str: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
				code: '',
				arr: ['桓宪胜', '朱宝达', '张黎光', '徐琪', '魏强', '陈瑶','唐小卓','韩春阳','李敏','邵晟杰','唐婷','胡杰','曹琛','姚恒','吴智慧'],
				num: 0,
				counter: 200,
				time:false
			}
		},
		methods: {
			//让canvas显示出来
			getCanvas() {
				let oCc = this.$refs.canvas.getContext('2d'); //获取绘制环境
				oCc.fillStyle = 'gray'; //填充颜色
				oCc.fillRect(0, 0, 200, 100); //填充颜色在canvas里面的起始坐标点，对角线上(0,0)，对角线下(200,100)
			},
			touchmove(e) {
				let oCc = this.$refs.canvas.getContext('2d'); //获取绘制环境
				let ev = e || window.event; //获取事件
				//最初给canvas填充了一个对角线上(0,0)，对角线下(200,100)的灰色矩形
				//clearRect清除填充色参数一，二：清除的x坐标，清除的y坐标；参数三，四：清除的矩形宽度和高度
				oCc.clearRect(ev.touches[0].clientX - this.$refs.canvas.offsetLeft + 10, ev.touches[0].clientY - this.$refs.canvas.offsetTop + 10, 20, 20);
			},
			//生成验证码
			getCode() {
				this.code = '';
				for(let i = 0; i < 4; i++) {
					if(i === 0) {
						this.code = this.str[Math.floor(Math.random() * 62)] + ' ';
					} else {
						this.code = this.code + ' ' + this.str[Math.floor(Math.random() * 62)];
					}
				}
			},
			start() {
				this.num = 0;
				this.time = false;
				this.counter=200;	
				let addtime = Math.floor(Math.random()*15+5)
                let myFuc = ()=>{
                	    clearInterval(interval);
                	    if(this.num === 14) {
						this.num = 0;
					} else {
						this.num++;
					}		    
                	    if(this.time){
                	    	  this.counter += addtime;
                	    }
                	    if(!this.time && this.counter>10){
                	    	  this.counter -= 9;
                	    }   
                	    if(this.counter<=200)interval = setInterval(myFuc, this.counter);    
                }
				let interval = setInterval(myFuc, this.counter);
			},
			end(){
				this.time = true;
			}
		},
		mounted() {
			//在mounted的时候绘制出填充
			this.getCanvas();
		},
		created() {
			this.str = this.str.split('');
			this.getCode();
			if(Math.random() > 0.5) {
				this.myback = 'c1';
			} else {
				this.myback = 'c3';
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.c1 {
		background: #fff url(../../static/images/first-prize.png) no-repeat center center;
	}
	
	.c3 {
		background: #fff url(../../static/images/ths.png) no-repeat center center;
	}
	
	.box {
		width: 100px;
		height: 40px;
		font-size: 18px;
		border: 1px solid #ccc;
		border-radius: 3px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	
	.select {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	
	.active {
		background-color: red;
		color: #fff;
	}
</style>