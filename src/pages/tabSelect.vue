<template>
	<div class="tab_select">
	<!-- <common-header></common-header> -->
	<div class="selectbox">
	   <selectType 
	   @showSelect="showSelect"
	   :selectArr="selectArr">
	   </selectType>
	</div>
	<black :isShow="showBlack"></black>		
	</div>
</template>

<script>
	import selectType from '@/components/selectType'
	import black from '@/components/black'
	import commonHeader from '@/components/common/header'
	export default {
		components: { selectType, black, commonHeader },
		data () {
			return {
				showBlack: 0,
				selectArr: [{
					id: 'price',
					name: '价格/星级',
					isShow: 0,
					starLevel: [{
						name: '经济型',
						selected: 0
					},{
						name: '舒适/三星',
						selected: 0
					},{
						name: '高档/四星',
						selected: 0
					},{
						name: '豪华/五星',
						selectd: 0
					}],
					startPrice: 100,
					endPrice: '不限'
				},{
					id: 'sort',
					name: '智能排序',
					isShow: 0,
					sortList: [{
						name: '智能排序',
						selected: 0
					}, {
						name: '距离优先',
						selected: 0
					}, {
						name: '好评优先',
						selected: 0
					},{
						name: '低价优先',
						selected: 0
					},{
						name: '高价优先',
						selected: 0
					}]
				}]
			}
		},
		methods: {
			showSelect(index){
				let hasShow = false;
				let hasShowInd = null;
				this.selectArr.map((d,k) => {
					if (d.isShow) {
						hasShow = true;
						hasShowInd = k;
					}
				})
				if (!hasShow) {
                  this.selectArr[index].isShow = 1;
				} else if (index == hasShowInd) {
				  this.selectArr[index].isShow = 0;
				} else {
				  this.selectArr[hasShowInd].isShow = 0;
				  setTimeout(() => {
                    this.selectArr[index].isShow = 1;
				  }, 400)
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.tab_select {
		width: 100%;
		position: relative;
	}
</style>