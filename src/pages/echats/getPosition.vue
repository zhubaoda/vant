<template>
	<div class="position">
		<div class="amap-page-container">
			<el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center"> </el-amap>
			<div class="toolbar">
				<span v-if="loaded">location: lng = {{ lng }} lat = {{ lat }}</span>
				<span v-else>正在定位</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			let self = this;
			return {
				center: [121.59996, 31.197646],
				lng: 0,
				lat: 0,
				loaded: false,
				plugin: [{
						pName: 'Geolocation',
						events: {
							init(o) {
								// o 是高德地图定位插件实例
								o.getCurrentPosition((status, result) => {
									if(result && result.position) {
										// 如果key是企业的，还可以直接result.addressComponent获取省市，周边等信息
										self.lng = result.position.lng;
										self.lat = result.position.lat;
										self.center = [self.lng, self.lat];
										self.loaded = true;
										self.$nextTick();
									}
								});
							}
						}
					}]
			}
		},
		methods: {

		}
	}
</script>

<style>
	.amap-demo {
		height: 300px;
	}
</style>