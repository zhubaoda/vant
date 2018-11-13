<template>
	<div class="vant_lists">
		<van-list v-model="loading" :finished="finished" @load="onLoad">
			<van-cell v-for="item in list" :key="item" :title="item" />
		</van-list>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				loading: false,
				finished: false
			}
		},
		methods: {
			onLoad() {
				// 异步更新数据
				setTimeout(() => {
					for(let i = 0; i < 10; i++) {
						this.list.push(this.list.length + 1);
					}
					// 加载状态结束
					this.loading = false;

					// 数据全部加载完成
					if(this.list.length >= 40) {
						this.finished = true;
					}
				}, 500);
			}
		},
		mounted() {

		}
	}
</script>

<style>
	.vant_lists {}
</style>