<template>
	<div class="card">
		<div class="tab">
            刮刮乐
        </div>
        <canvas class="c3" ref="canvas" width="200" height="100" @touchmove="touchmove"></canvas>
	</div>
</template>

<script>
	export default {
		name: 'card',
		data() {
			return {
				
			}
		},
		methods: {
			//让canvas显示出来
			getCanvas(){
				let oCc = this.$refs.canvas.getContext('2d');//获取绘制环境
				oCc.fillStyle = 'gray';//填充颜色
				oCc.fillRect(0,0,200,100);//填充颜色在canvas里面的起始坐标点，对角线上(0,0)，对角线下(200,100)
			},
			touchmove(e){
				let oCc = this.$refs.canvas.getContext('2d');//获取绘制环境
				let ev = e || window.event;//获取事件
				//最初给canvas填充了一个对角线上(0,0)，对角线下(200,100)的灰色矩形
				//clearRect清除填充色参数一，二：清除的x坐标，清除的y坐标；参数三，四：清除的矩形宽度和高度
				oCc.clearRect(ev.touches[0].clientX-this.$refs.canvas.offsetLeft+10,ev.touches[0].clientY-this.$refs.canvas.offsetTop+10,20,20);
			}	
		},
		mounted(){
			//在mounted的时候绘制出填充
			this.getCanvas();
		},
		created() {
          
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.c3{
	background-color: #fff;
}
</style>