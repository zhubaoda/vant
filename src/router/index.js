import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//异步组件的使用方法resolve => require(['@/pages/home.vue'], resolve)
let routes = [{
	path:'/',
	component: resolve => require(['@/pages/list.vue'], resolve),
	props:true
},{
	path: '/home',
	component: resolve => require(['@/pages/home.vue'], resolve),
	children: [{
		path: '/home',
		component: resolve => require(['@/pages/home/index.vue'], resolve),
		meta:{index:0}
	}, {
		path: '/home/need',
		component: resolve => require(['@/pages/home/need.vue'], resolve),
		meta:{index:1}
	}, {
		path: '/home/resource',
		component: resolve => require(['@/pages/home/resource.vue'], resolve),
		meta:{index:2}
	}, {
		path: '/home/mine',
		component: resolve => require(['@/pages/home/mine.vue'], resolve),
		meta:{index:3}
	}]
},{
	path:'/norFather',
	component:resolve => require(['@/pages/firstPeriod/norFather.vue'],resolve)
},{
	path:'/mix',
	component:resolve => require(['@/pages/firstPeriod/mix.vue'],resolve)
},{
	path:'/filter',
	component:resolve => require(['@/pages/firstPeriod/filter.vue'],resolve)
},{
	path:'/active',
	component:resolve => require(['@/pages/firstPeriod/active.vue'],resolve)
},{
	path:'/infor',
	component:resolve => require(['@/pages/firstPeriod/information.vue'],resolve)
},{
	path:'/render',
	component:resolve => require(['@/pages/firstPeriod/render.vue'],resolve)
},{
	path:'/answer/:id',
	component:resolve => require(['@/pages/firstPeriod/answer.vue'],resolve)
},{
	path:'/flex',
	component:resolve => require(['@/pages/firstPeriod/flex.vue'],resolve)
},{
	path:'/keyBoard',
	component:resolve => require(['@/pages/firstPeriod/keyBoard.vue'],resolve)
},{
	path:'/card',
	component:resolve => require(['@/pages/firstPeriod/card.vue'],resolve)
},{
	path:'/clock',
	component:resolve => require(['@/pages/firstPeriod/clock.vue'],resolve)
},{
	path:'/pic',
	component:resolve => require(['@/pages/firstPeriod/pic.vue'],resolve)
},{
	path:'/weibo',
	component:resolve => require(['@/pages/firstPeriod/weibo.vue'],resolve)
},{
	path:'/progress',
	component:resolve => require(['@/pages/firstPeriod/progress.vue'],resolve)
},{
	path:'/aboutClass',
	component:resolve => require(['@/pages/firstPeriod/aboutClass.vue'],resolve)
},{
	path:'/birthday',
	component:resolve => require(['@/pages/firstPeriod/birthday.vue'],resolve)
},{
	path:'/select',
	component:resolve => require(['@/pages/firstPeriod/select.vue'],resolve)
},{
	path:'/find',
	component:resolve => require(['@/pages/firstPeriod/find.vue'],resolve)
},{
	path:'/search',
	component:resolve => require(['@/pages/secondPeriod/search.vue'],resolve)
},{
	path:'/spider',
	component:resolve => require(['@/pages/secondPeriod/spider.vue'],resolve)
},{
    path:'/arr',
	component:resolve => require(['@/pages/secondPeriod/arr.vue'],resolve)
},{
	path:'/layout',
	component:resolve => require(['@/pages/secondPeriod/layout.vue'],resolve)
},{
	path:'/joggle',
	component:resolve => require(['@/pages/secondPeriod/joggle.vue'],resolve)
},{
	path:'/cart',
	component:resolve => require(['@/pages/secondPeriod/cart.vue'],resolve)
},{
	path:'/onpull',
	component:resolve => require(['@/pages/secondPeriod/onPull.vue'],resolve)
}]

var router = new Router({
//	mode: 'history',
//	hashbang: true,
//	history: true,
	saveScrollPosition: true,
//	suppressTransitionError: true,
//	linkActiveClass: "myactive",
	routes: routes,
	//这个因为有路由动画可能用不了
	//https://router.vuejs.org/zh-cn/advanced/scroll-behavior.html
	scrollBehavior (to, from, savedPosition) {
	  return new Promise ((resolve,reject) => {
	  	setTimeout(() => {
		  if (savedPosition) {
		    resolve(savedPosition);
		  } else {
		    resolve({ x: 0, y: 0 });
		  }	
	  	},500)
	  })
	  	
	}
})
export default router;
