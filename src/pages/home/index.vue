<template>
	<div class="index">
		<van-pull-refresh v-model="isLoading" class="pull_down">
			<p>首页</p>
			<p>刷新次数: {{ count }}</p>
		</van-pull-refresh>
	</div>
</template>

<script>
	import { Toast } from 'vant';
	export default {
		name: 'home-index',
		data() {
			return {
				count: 0,
				isLoading: false
			}
		},
		watch: {
			isLoading() {
				if(this.isLoading) {
					setTimeout(() => {
						Toast('刷新成功');
						this.isLoading = false;
						this.count++;
					}, 500);
				}
			}
		},
		methods: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
	height: 100%;
}
.pull_down{
	height: 100%;
	overflow-x: hidden;
	overflow-y: scroll;
}
</style>