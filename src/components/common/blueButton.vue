<template>
		<div class="begin_common flex" :class="type"  @click="jump">
			<span>{{name}}</span>
		</div>
</template>
<script>
	export default {
		data(){
			return{
				
			}
		},
		props:{
			name:{
				type:String,
				default: '开始'
				
			},
			type:{
				type:String,
				default: 'big'
			}
		},
		methods: {
			jump() {
                 this.$emit('jump')
			}
		}
	}
</script>
<style scoped>
	.begin_common{
		align-items: center;
		justify-content: center;
		color:#fff;
		background-color: #0F88EE;
		border-radius:50%;
	}
	.big{	
		font-size: 21px;
		width:87px;
		height:87px;
	}
	.small{
		font-size:18px;
		width:72px;
		height:72px;
	}
</style>