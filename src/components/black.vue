<template>		
	<transition name="slider">
		<div class="black" v-if="isShow" :style="zIndex"></div>
	</transition>
</template>

<script>
	export default {
		props: {
          isShow: {
              type: Number,
              default: 0
          },
          zIndex: {
              type: Object,
              default: function() {
                  return {
                     zIndex: '100'
                  }
              }
          }
		}
	}
</script>

<style lang="less" scoped>

		.black {
			width: 100vw;
			height: 100vh;
			background-color: rgba(0, 0, 0, .6);
			position: fixed;
			top:0;
			left: 0;
			z-index: 100;
		}

        .slider-enter-active, .slider-leave-active {
			transition: all .6s;
		}

		.slider-enter,.slider-leave-to {
			background-color: rgba(0, 0, 0, 0);
		}
		
		.slider-leave, .slider-enter-to {
			background-color: rgba(0, 0, 0, .6);
		}

</style>