<template>
	<div>
		<jsx-example @addRender="addRender"></jsx-example>	
	</div>
</template>

<script type="text/babel">
	//如果要想改成react那种写法的话，加typescript
	//使用jsx，github  https://github.com/vuejs/babel-plugin-transform-vue-jsx#usage
	//ts-loader typescript 必须安装,国内也可以用cnpm
	//	安装vue的官方插件
	//  npm i vue-class-component vue-property-decorator --save
	//  ts-loader
	//  npm i ts-loader typescript tslint tslint-loader tslint-config-standard --save-dev
	//	@Component
	//	class App extends Vue {
	//	  get computed () { // h will be injected
	//	    return <div id="foo">bar</div>
	//	  }
	//	}
	import Vue from 'vue'
	//模板渲染一个组件
//	做这个之前要npm install babel-plugin-transform-vue-jsx --save-dev
//    可以理解为全局注册一个组件，使用了jsx，去代替createElement复杂的写法
	Vue.component('jsx-example', {
		render(h) { // <-- h must be in scope
			return(
				<button id="foo" on-click={()=>this.add()}>渲染函数</button>
			)
		},
		methods:{
			add(){
				this.$emit('addRender')
			}
		}
	})
	export default {
		name: 'information',
		data() {
			return {
				blogTitle: '啦啦啦啦'
			}
		},
	    methods: {
			addRender() {
	           console.log('我是render渲染出来的！！！')
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
</style>