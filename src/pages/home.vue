<template>
	<div class="home">
		<div class="top">
			<!--渲染子路由在router文件夹里面配置的子路由，父路由是home，子路由是index，need，source，mine-->
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
		name: 'home',
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
		},
		created() {
			//通过在子路由配置对应的active的数值，在meta对象里面的index
			this.active = this.$route.meta.index;
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.top {
		height: calc(100vh - 50px);
	}
</style>