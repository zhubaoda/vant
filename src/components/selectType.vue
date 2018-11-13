<template>
	<div class="select_type">
		<div class="box" v-show="selectArr.length>0"  >
				<div class="main_box">
					<div class="item" v-for="(todo, index) in selectArr" :key="todo.id" @click="showSelect(index)" :class="{ item_color: todo.isShow }">
						<span class="item_name">{{todo.name}}</span>
						<i class="iconfont icon-xiangxiajiantou"></i>
						<transition name="slider">
							<div class="select_price" v-if="todo.isShow && todo.id=='price'" >
								<div class="starlevel">
									<div class="title">星级</div>
									<div class="star_box">
										<div class="star_type" v-for="(item, idx) in todo.starLevel" :key="idx">
											{{item.name}}
										</div>
									</div>
								</div>
							</div>

							<div class="select_price"  v-if="todo.isShow && todo.id=='sort'">
								<div class="select_word" v-for="(item, i) in todo.sortList" :key="i">
									<div class="sort_item">{{item.name}}</div>
								</div>
							</div>
						</transition>
						<transition name="slider">
							
						</transition>
					</div>

				</div>

				<!-- <div class="select_price" :class="{ toBottom: todo.isShow===2, 'toTop':  todo.isShow===1}">
					<div class="starlevel">
                         <div class="title">星级</div>
						 <div class="star_box">
                             <div class="star_type" v-for="(item, idx) in todo.starLevel" :key="idx">
                                {{item.name}}
							 </div>
						 </div>
					</div>
				</div>
				<transition name="slider">
				  <div class="black" v-if="todo.isShow===2"></div>
				</transition> -->
			<!-- <div v-if="todo.id==='sort'">
				<div class="main_box">
					<div class="item" @click="showSelect(index)" :class="{ item_color: todo.isShow===2 }">
						<span class="item_name">{{todo.name}}</span>
						<i class="iconfont icon-xiangxiajiantou" :class="{ rotate: todo.isShow===2, 'rotate_back': todo.isShow===1 }"></i>
					</div>
				</div>
                <div class="select_sort">
					<div class="select_word" v-for="(item, i) in todo.sortList" :key="i">
						<div class="sort_item">{{item.name}}</div>
					</div>
				</div>
				<transition name="slider">
				  <div class="black" v-if="todo.isShow===2"></div>
				</transition>
			</div> -->
	    </div>
		
	</div>
</template>

<script>
	export default {
		data () {
			return {

			}
		},
		props: {
          selectArr: {
			  type: Array,
			  default: function() {
				  return []
			  }
		  }
		},
		methods: {
			showSelect (index) {
				this.$emit('showSelect', index);
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.select_type {
		position: relative;
		width: 100%;
		display: flex;
		.box {
			display: flex;
		}
		.main_box {
			width: 100%;
			position: fixed;
			top:0;
			left: 0;
			z-index: 150;
			background: #fafafa;
			
			display: flex;
			.item {
				color: #000;
				font-size: 16px;
			    margin-right: 15px;
                padding: 10px;
			}
			.item_color {
				color: #64a7ec;
			}
		    .select_price{
				width: 100%;
				background: green;
				height: 300px;
				position: fixed;
				top: 41px;
				left: 0;
				z-index: 151;
			}		
			.slider-enter-active, .slider-leave-active {
				transition: all .6s;
			}

			.slider-enter,.slider-leave-to {
				top: -341px;
			}
			
			.slider-leave, .slider-enter-to {
				top:41px;
			}
		}
		// .black {
		// 	width: 100vw;
		// 	height: 100vh;
		// 	background-color: rgba(0, 0, 0, .6);
		// 	position: fixed;
		// 	top:0;
		// 	left: 0;
		// 	z-index: 100;
		// }

        // .slider-enter-active, .slider-leave-active {
		// 	transition: all .6s;
		// }

		// .slider-enter,.slider-leave-to {
		// 	background-color: rgba(0, 0, 0, 0);
		// }
		
		// .slider-leave, .slider-enter-to {
		// 	background-color: rgba(0, 0, 0, .6);
		// }
	}

</style>