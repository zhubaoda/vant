<template>
	<div>
		<div @click="select" class="option_success frame normal_color" :class="{active:show==2,'normal':show==1}" v-show="!showColor">
			<slot name="start"></slot>
		    <slot name="content"></slot>
		</div>
		<div @click="select" class="option_success frame red_color" v-show="showColor">
			<slot name="start_red"></slot>
		    <slot name="content_red"></slot>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			show: 0,
			showColor:{
				type:Boolean,
				default:false
			}
		},
		methods: {
			select() {
				this.$emit('select')
			}
		},
		created() {

		}
	}
</script>
<style scoped>
	.frame {
		border-radius: 3px;
		padding: 10px 5px;
	}
	.normal_color{
		border: 1px solid #E5E5E5;
		color: #666;
	}
	.red_color{
		border: 1px solid #FF0F00;
		color: #FF0F00;
	}
	@keyframes color-active {
		0% {
			border: 1px solid #E5E5E5;
			color: #666;
		}
		50% {
			border: 1px solid #16A9FF;
		}
		100% {
			border: 1px solid #0F88EE;
			color: #0F88EE;
		}
	}
	
	@keyframes color-normal {
		0% {
			border: 1px solid #0F88EE;
			color: #0F88EE;
		}
		50% {
			border: 1px solid #16A9FF;
		}
		100% {
			border: 1px solid #E5E5E5;
			color: #666;
		}
	}
	
	.normal {
		animation: color-normal .5s forwards;
	}
	
	.active {
		animation: color-active .5s forwards;
	}
	
	.option_success {
		display: flex;
		flex-direction: row;
	}
</style>