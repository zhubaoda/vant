<template>
	<div>
		<canvas class="c2" ref="myclock" :width="w" :height="h"></canvas>
	</div>
</template>

<script>
	export default {
		name: 'clock',
		data() {
			return {
				w: 200,
				h: 200
			}
		},
		methods: {
			getClock() {
				//获取绘制环境
				let oCc = this.$refs.myclock.getContext('2d');
				//绘制中心坐标，圆盘的半径
				let x = 100;
			    let y = 100;
				let r = 50;
				//定时函数
				function toDraw() {
					//clearRect，清除画布的起始坐标，清除的宽度，清除的高度
					//每一次运行这个函数都要重新清除一下画布
					oCc.clearRect(0, 0, oCc.width, oCc.height);
					oCc.strokeStyle = '#000';
					//获取本地时间
					let oDate = new Date();
					let oHour = oDate.getHours();
					let oMin = oDate.getMinutes();
					let oSen = oDate.getSeconds();
					//小时，分钟，秒对应的角度
					let hAngle = (-90 + oHour * 30 + ((oMin * 6) / 60) + (oSen * 6) / 3600) * Math.PI / 180;
					let mAngle = (-90 + oMin * 6 + (oSen * 6) / 60) * Math.PI / 180;
					let sAngle = (-90 + oSen * 6) * Math.PI / 180;
					//画圆盘分的刻度
					for(let i = 0; i < 60; i++) {
						//每一个i从新指定圆盘圆心
						oCc.moveTo(x, y);
						//圆心坐标(100,100),半径50，起始角，结束角
						oCc.arc(x, y, r, 6 * i * (Math.PI / 180), 6 * (i + 1) * Math.PI / 180);
					}
					oCc.stroke();
					//加一个白色填充的圆盘在原来的圆盘上，露出的部分是刻度
					oCc.fillStyle = 'white';
					oCc.beginPath(); //开始一个新的路径
					oCc.arc(x, y, r * (19 / 20), 0, 360 * Math.PI / 180);
					oCc.fill(); //填充开始到结束添加一条线

					//画圆盘，时的刻度
					oCc.beginPath();
					for(var i = 0; i < 12; i++) {
						oCc.moveTo(x, y);
						oCc.lineWidth = 2;
						oCc.arc(x, y, r, 30 * i * Math.PI / 180, 30 * (i + 1) * Math.PI / 180);
					}
					oCc.stroke();

					//加一个白色填充的圆盘在原来的圆盘上，露出的部分是刻度
					oCc.fillStyle = 'white';
					oCc.beginPath();
					oCc.arc(x, y, r * (18 / 20), 0, 360 * Math.PI / 180);
					oCc.fill();

					//时针
					oCc.beginPath();
					oCc.moveTo(x, y);
					oCc.lineWidth = 5; //线的宽度
					oCc.arc(x, y, r * (10 / 20), hAngle, hAngle);
					oCc.stroke();

					//分针
					oCc.beginPath();
					oCc.moveTo(x, y);
					oCc.lineWidth = 3;
					oCc.arc(x, y, r * (14 / 20), mAngle, mAngle);
					oCc.stroke();

					//秒针
					oCc.beginPath();
					oCc.moveTo(x, y);
					oCc.lineWidth = 1;
					oCc.strokeStyle = "red"
					oCc.arc(x, y, r * (17 / 20), sAngle, sAngle);
					oCc.stroke();
				}
                 setInterval(toDraw, 1000);
			},

		},
		mounted() {
			this.getClock()
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>