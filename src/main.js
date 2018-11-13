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
import VueAMap from 'vue-amap';


Vue.component('blueButton',blueButton)
Vue.component('myHeader',myHeader)
Vue.component('optionSuccess',optionSuccess)
//引入公共css
import './assets/main.css'
//这是搭建vue脚手架后引入的vant框架,在main.js这个主路口引入
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import 'mint-ui/lib/style.css';
import '@/assets/iconfont/iconfont.css';
Vue.use(Vant);
Vue.use(VueAMap);


VueAMap.initAMapApiLoader({
  key: 'zhubaodakey',
  plugin: [
          'AMap.Autocomplete',
	        'AMap.PlaceSearch', 
	        'AMap.Scale', 
	        'AMap.OverView', 
	        'AMap.ToolBar', 
	        'AMap.MapType', 
	        'AMap.PolyEditor',
	        'AMap.CircleEditor',
	        'AMap.Geolocation'
        ],
  v: '1.4.4'
});
//全局混合
//最先调用

Vue.mixin({
	methods: {
	  setRouter () {
	  	console.log(2333)
	  }
	},
	created(){
		var myOption = this.$options.myOption;
		if(myOption){
			console.log(myOption)
		}
	}
})

// 自定义长按事件
Vue.directive('holdDown', {
   bind: (el, binding) => {
   	  let start;
   	  el.addEventListener('touchstart', (e) => {
   	  	start = new Date().getTime();
   	  }, false)
   	  el.addEventListener('touchend', (e) => {
   	  	start = new Date().getTime() - start;
   	  	if (start >= 500) {
   	  	  binding.value.func.call(this, e)
   	  	}
   	  }, false)
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
