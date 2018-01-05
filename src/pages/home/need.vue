<template>
	<div>
		<p v-border id="pp" v-holdDown="{'func':holdDown}">ewqewq</p>
	</div>
</template>

<script>
	//引入Vue，全局注册自定义指令，这个可以单独抽一个js写
	import Vue from 'vue'
	//p标签里面v-border就有了'1px solid red'的样式
	Vue.directive('border', {
		bind(el) {
			el.style.border = '1px solid red'
		}
	})
	//自定义长按事件，在手机上长按1500毫秒，触发holdDown事件，我这里是按了1500毫秒后改变文字颜色
	Vue.directive('holdDown', {
		bind: function(el, binding) {
			let _self = this;
			let start;
			el.addEventListener('touchstart', function(e) {
				start = new Date().getTime();
			}, false)
			el.addEventListener('touchend', function(e) {
				start = new Date().getTime() - start;
				if(start >= 1500) {
					//把binding.value.func绑定到_self上
					binding.value.func.call(_self, e);
				}
			}, false)
		}
	})
	export default {
		name: 'home-need',
		data() {
			return {

			}
		},
		methods: {
		   //holdDown方法
           holdDown(){
           	   document.getElementById("pp").style.color = 'red'
           }
		},
		mounted(){
		
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>