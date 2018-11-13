<template>
	<div class="keyboard">
		<van-button @touchstart.native.stop="show = true">
			弹出默认键盘
		</van-button>

		<van-number-keyboard :show="show" extra-key="." close-button-text="完成" @blur="show = false" @input="onInput" @delete="onDelete" />
	</div>
</template>

<script>
	export default {
		name: 'keyboard',
		data() {
			return {
				value: 1,
				show: false,
				list: [1, 2, 3, 4, 5, 6]
			}
		},
		methods: {
			onInput(value) {
				console.log(value);
			},
			onDelete() {
				console.log(1111);
			}
		},
		created() {
			//es6多了类的概念
			class Point {
				constructor(x, y) {
					this.x = x;
					this.y = y;
				}
				toString() {
					return `( ${this.x}, ${this.y} )`;
				}
				toValue() {
					return this.x + this.y;
				}
			}		
			var p = new Point(1,2);
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>