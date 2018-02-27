<template>
	<div id="app">
		<transition :name="transitionName" mode="out-in">
			<router-view/>
		</transition>
	</div>
</template>

<script>
	/**
 * https://github.com/zhubaoda
 *  .--,       .--,
 * ( (  \.---./  ) )
 *  '.__/o   o\__.'
 *     {=  ^  =}
 *      >  -  <
 *     /       \
 *    //       \\
 *   //|   .   |\\
 *   "'\       /'"_.-~^`'-.
 *      \  _  /--'         `
 *    ___)( )(___
 *   (((__) (__)))    高山仰止,景行行止.虽不能至,心向往之。
 */
	export default {
		name: 'app',
		data() {
			return {
				transitionName: ''
			}
		},
		//对于来自或者去home路径的不执行路由动画
		watch: {
			'$route' (to, from) {	
				if(to.path.split('/')[1] !== 'home' && from.path.split('/')[1] !== 'home') {
					const toDepth = to.path.split('/').length
					const fromDepth = from.path.split('/').length;
					let cont = Math.ceil(Math.random() * 10);
					this.transitionName = cont % 2 === 0 ? 'slide-right' : 'slide-left';
				}else{
					this.transitionName = ''
				}
			}
		}
	}
</script>

<style>
	.slide-right-enter-active,
	.slide-right-leave-active,
	.slide-left-enter-active,
	.slide-left-leave-active {
		transition: all .2s
	}
	
	.slide-right-enter {
		transform: translate(-100%, 0);
	}
	
	.slide-right-leave-active {
		transform: translate(100%, 0);
	}
	
	.slide-left-enter {
		transform: translate(100%, 0);
	}
	
	.slide-left-leave-active {
		transform: translate(-100%, 0);
	}
</style>