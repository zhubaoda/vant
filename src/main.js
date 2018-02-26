// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from '@/store'
//引入全局过滤器js代码
import commonFilters from './common/filter.js'
//引入全局组件
import blueButton from './components/common/blueButton.vue'
import myHeader from './components/common/header.vue'
import optionSuccess from './components/common/optionSuccess.vue'

Vue.component('blueButton',blueButton)
Vue.component('myHeader',myHeader)
Vue.component('optionSuccess',optionSuccess)
//引入公共css
import './assets/main.css'
//这是搭建vue脚手架后引入的vant框架,在main.js这个主路口引入
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import 'mint-ui/lib/style.css';
Vue.use(Vant);
//全局混合
//最先调用
Vue.mixin({
	created(){
		var myOption = this.$options.myOption;
		if(myOption){
			console.log(myOption)
		}
	}
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  myOption: '我是全局混合!',
  router,
  template: '<App/>',
  components: { App }
})
