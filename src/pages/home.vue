<template>
	<div class="home">
		<div class="top">
			<router-view></router-view>
		</div>
		<van-tabbar v-model="active" @change="jump">
			<van-tabbar-item icon="shop">首页</van-tabbar-item>
			<van-tabbar-item icon="chat">需求</van-tabbar-item>
			<van-tabbar-item icon="records">资源</van-tabbar-item>
			<van-tabbar-item icon="gold-coin">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {
				active: 0
			}
		},
		methods: {
			jump(val) {
				switch(val) {
					case 0:
						this.$router.push('/home')
						break;
					case 1:
						this.$router.push('/home/need')
						break;
					case 2:
						this.$router.push('/home/resource')
						break;
					case 3:
						this.$router.push('/home/mine')
						break;
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top{
	height:calc(100vh - 50px);
}
</style>