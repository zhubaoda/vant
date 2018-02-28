<template>
	<div>
		<span>{{name}}</span>
		<br />
		<jsx-example @addRender="addRender"></jsx-example>	
		<div>{{title}}</div>
		<input @keyup.enter="onEnter">
	</div>
</template>

<script>
	/******************************************************************/
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
	import axios from 'axios'
	//模板渲染一个组件,对于element ui里面如果不引入jsx，tree组件render就不能按照官网的写法去实现
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
	/******************************************************************/
	export default {
		name: 'information',
		data() {
			return {
				name: '渲染函数',
				title:''
			}
		},
		methods: {
			addRender() {
               console.log('我是render渲染出来的！！！');
               this.title = '我是render渲染出来的！！！'
			},
			onEnter(){
				console.log(1222)
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	button {
		padding: 5px;
		border: 1px solid #CCCCCC;
		color: red;
		cursor: pointer;
	}
</style>