<template>
	<div>
		<div @click="jump">es6类</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			func() {
				//Point类
				class Point {
					constructor(x, y) {
						this.x = x;
						this.y = y;
					}
				}
				//ColorPoint继承了Point类的属性和方法
				class ColorPoint extends Point {

				}
				var p = new ColorPoint(1, 2);
				//  	    console.log(p);
			},
			jump() {
				this.$router.push('/');
			}
		},
		mounted() {
			this.func();
			let obj = {
				name:12
			}
			//代理第一个参数是要拦截的目标对象，第二个参数是配置对象
			var proxy = new Proxy(obj,{
				get: function(target,property){
					if(property==='name'){
						return target.name;
					}else{
						return 'not have this property';
					}
				}
			})
			//Reflect
			console.log(Reflect.has(obj,'name'));
		}
	}
</script>