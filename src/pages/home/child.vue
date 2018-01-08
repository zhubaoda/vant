<template>
	<div>
		<button @click="add">点击增加</button>
		<span>{{count}}</span>
		<!--在子组件写好插槽，父组件使用-->
		<slot name="header"></slot>
		<slot text="hello from child"></slot>
	</div>
</template>

<script>
	export default {
		name: 'home-resource',
		data() {
			return {

			}
		},
		props: {
			count: {
				type: Number
			}
		},
		methods: {
			add() {
				//可以理解发广播告诉父组件我被点击了，点击事件名字叫add
				this.$emit('add')
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>