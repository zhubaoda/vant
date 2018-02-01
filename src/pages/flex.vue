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
	.box3{
		border: 1px solid #ccc;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	    /*flex-wrap: wrap;排列超出换行*/
		flex-wrap: wrap;
	}
	.box3>div{
		padding: 10px 20px;
	}
	.box4{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.box4>.div1{
		width:100px;
		background-color: red;
	}
	.box4>.div2{
		background-color: black;
		color:#fff;
		/*flex:1;就是剩余的宽度*/
		flex:1;
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
		<!--纵向排列上下左右居中-->
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
		<!--横向排列数量多，超出换行-->
		<div class="box3" style="margin-top:10px">
			<div v-for="(todo,index) in list" :key="index"> 
				<span>元素{{todo}}</span>
			</div>
		</div>
		<!--一个元素占100px;另外一个盒子占剩下的-->
		<div class="box4" style="margin-top:10px">
			<div class="div1">
				<span>固定</span>
			</div>
			<div class="div2">
				<span>剩余</span>
			</div>
		</div>
	</div>
</template>
<script>
//	文档http://www.runoob.com/w3cnote/flex-grammar.html
	export default {
		data() {
			return {
				list:[1,2,3,4,5,6,7,8]
			}
		},
		methods: {
			
		},
		created() {
           
		}
	}
</script>
