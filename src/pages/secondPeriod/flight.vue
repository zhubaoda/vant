<template>
	<div class="flight">
		<flightList
		  :callBackData="callBackData"
		  @selectFight="selectFight"
		></flightList>
	</div>
</template>

<script>
	import flightList from '@/components/common/flightList.vue'
	export default {
		components: { flightList },
		data () {
			return {
			   callBackData: [1, 2, 3]
			}
		},
		methods: {
			selectFight (idx) {

			}
		},
		created () {
			
		}
	}
</script>

<style lang="less" scoped>
    .flight {
	   width: 800px;
    }
	
</style>