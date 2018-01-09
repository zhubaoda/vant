<template>
	<div>
		<span>{{name}}</span>
		<span>{{sex}}</span>
	</div>
</template>

<script>
	export default {
		name: 'information',
		data() {
			return {

			}
		},
		//在computed中计算出state变化的值
		computed:{
			name(){
				return this.$store.state.infor.name;
			},
			sex(){
				return this.$store.state.infor.sex;
			}
		},
		methods: {
			
		},
		created(){
			//触发action里面叫getInfor的方法
			this.$store.dispatch('getInfor')
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>