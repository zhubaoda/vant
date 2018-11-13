<template>
	<div class="flight">
		<div class="flight_list_content">
			<div class="flight_list_list" v-show="callBackData.length">
				<ul>
					<li v-for="(item,index) in callBackData" :key="index+'A'">
						<div class="select" @click="selectFight(index)">
							<span>
              			<i v-show="index === current"></i>
              		</span>
						</div>
						<span class="spacing"></span>
						<div class="list_title_box">
							<div class="flight_banci">
								<img src="../../assets/fanchenglogo.png" class="logo-img" alt="">
								<span class="com_title">长龙航空</span>
								<span class="flight_num">GJ8825</span>
								<span class="flight_anum">A320</span>
							</div>
						</div>
						<span class="spacing"></span>
						<div class="flight_list_time">
							<div class="f_time_box">
								<div class="airport-start">
									<span class="f_start_time">09:25</span>
									<span class="airport">杭州萧山国际机场</span>
								</div>
								<div class="f_time_longer_box">
									<span class="f_time_longer">1小时50分钟</span>
									<i></i>
								</div>
								<div class="airport-start">
									<span class="f_start_time">11:25</span>
									<span class="airport">烟台蓬莱国际机场</span>
								</div>
							</div>
						</div>
						<span class="spacing"></span>
						<div class="added_price">
							<span class="f_start_time">民航发展基金+燃油</span>
							<span class="fuel">￥50+ ￥10</span>
						</div>
						<span class="spacing"></span>
						<div class="added_price food">
							<span class="f_start_time">T舱</span>
							<span class="fuel">有餐食</span>
						</div>
					</li>
				</ul>
			</div>
			<div class="no_flight_list" v-show="!callBackData.length">
				没有航班
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				current: 0
			}
		},
		props: {
			callBackData: {
				type: Array,
				default: []
			}
		},
		methods: {
			selectFight(idx) {
				this.current = idx;
				this.$emit("selectFight", idx)
			}
		}
	}
</script>

<style lang="less" scoped>
	.flight {
		width: 100%;
	}
	
	.flight_list_content {
		.flight_list_list {
			background-color: #fff;
			ul {
				li {
					display: flex;
					padding: 20px 20px 15px 20px;
					position: relative;
					border-bottom: 2px solid #eeeeef;
					.spacing {
						flex: 1;
					}
					.select {
						display: flex;
						align-items: center;
						justify-content: center;
						span {
							width: 10px;
							height: 10px;
							padding: 3px;
							display: block;
							border: 2px solid #40A3FF;
							border-radius: 50%;
							cursor: pointer;
							i {
								display: block;
								width: 100%;
								height: 100%;
								border-radius: 50%;
								background-color: #40A3FF;
							}
						}
					}
					.list_title_box {
						display: flex;
						align-items: center;
						img {
							height: 20px;
							width: 20px;
						}
						.flight_banci {
							position: relative;
							padding-left: 20px;
							.logo-img {
								position: absolute;
								top: 3px;
								left: -10px;
							}
							.com_title {
								font-size: 14px;
								color: #3e3a39;
								display: block;
							}
							span {
								font-size: 12px;
								color: #9fa0a0;
							}
							.flight_anum {
								margin-left: 10px;
							}
						}
					}
					.flight_list_time {
						.f_time_box {
							display: flex;
							.airport-start {
								display: flex;
								flex-direction: column;
							}
							.f_start_time {
								font-size: 29px;
								font-weight: 600;
							}
							.airport {
								color: #9e9e9f;
								font-size: 12px;
							}
							.f_time_longer_box {
								position: relative;
								width: 170px;
								text-align: center;
								i {
									height: 10px;
									width: 132px;
									display: inline-block;
									background-image: url(../../assets/aa22222.png);
									background-repeat: no-repeat;
									background-size: 100% 100%;
									position: absolute;
									top: 50%;
									left: 50%;
									transform: translate(-50%, -50%);
								}
								.f_time_longer {}
							}
						}
					}
					.added_price {
						display: flex;
						flex-direction: column;
						align-items: left;
						justify-content: center;
						font-size: 12px;
						color: #333;
						.fuel {
							color: #9e9e9f;
						}
					}
					.food {
						align-items: center;
					}
				}
			}
		}
		.no_flight_list {
			background-color: #fff;
			font-size: 14px;
			text-align: center;
			padding: 20px 0;
		}
	}
</style>