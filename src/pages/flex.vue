<style scoped>
	.box1{
		border:1px solid #ccc;
		/*让父盒子成为弹性盒子*/
		display: flex;
		/*父盒子里面子元素排列方向，row是横向，column是纵向*/
		flex-direction: row;
		/*这时候我们的盒子高度如果有,你会发现元素并没有上下居中，这时候我们就可以用到align-items: center;*/
		/*同理还有居左,居右，百度即可*/
		height:50px;
		align-items: center;
	}
	.box1>div{
		/*给每一个元素flex:1就是三个子元素占父元素比例1:1:1,如果给的是1,3,2那子元素比例就是1:3:2;*/
		flex:1;
		/*box1里面的div在作为span元素的父盒子，我们让span元素相对于div左右居中*/
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	
	.box2{
		border:1px solid #ccc;
		/*让父盒子成为弹性盒子*/
		display: flex;
		/*父盒子里面子元素排列方向，row是横向，column是纵向*/
		flex-direction: column;
		/*这时候我们的盒子高度如果有,你会发现元素并没有上下居中，但是这个时候的align-items: center;就变成了左右居中*/
		height:150px;
		/*justify-content: center变成了上下居中*/
		justify-content: center;
	}
	
	.box2>div{
		/*给每一个元素flex:1就是三个子元素占父元素比例1:1:1,如果给的是1,3,2那子元素比例就是1:3:2;*/
		flex:1;
		/*box1里面的div在作为span元素的父盒子，我们让span元素相对于div左右居中*/
		display: flex;
		flex-direction: column;
		align-items: center;
		line-height: 50px;
	}
</style>
<template>
	<div>
		<!--横向排列上下左右居中-->
		<div class="box1">
			<div>
				<span>元素1</span>
			</div>
			<div>
				<span>元素2</span>
			</div>
			<div>
				<span>元素3</span>
			</div>
		</div>
		
		<div class="box2" style="margin-top:10px">
			<div>
				<span>元素1</span>
			</div>
			<div>
				<span>元素2</span>
			</div>
			<div>
				<span>元素3</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		created() {
           
		}
	}
</script>
