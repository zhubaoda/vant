import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//异步组件的使用方法resolve => require(['@/pages/home.vue'], resolve)
let routes = [{
	path:'/',
	component: resolve => require(['@/pages/list.vue'], resolve),
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
	component:resolve => require(['@/pages/norFather.vue'],resolve)
},{
	path:'/mix',
	component:resolve => require(['@/pages/mix.vue'],resolve)
},{
	path:'/filter',
	component:resolve => require(['@/pages/filter.vue'],resolve)
},{
	path:'/active',
	component:resolve => require(['@/pages/active.vue'],resolve)
},{
	path:'/infor',
	component:resolve => require(['@/pages/information.vue'],resolve)
},{
	path:'/render',
	component:resolve => require(['@/pages/render.vue'],resolve)
},{
	path:'/answer/:id',
	component:resolve => require(['@/pages/answer.vue'],resolve)
},{
	path:'/flex',
	component:resolve => require(['@/pages/flex.vue'],resolve)
},{
	path:'/keyBoard',
	component:resolve => require(['@/pages/keyBoard.vue'],resolve)
},{
	path:'/card',
	component:resolve => require(['@/pages/card.vue'],resolve)
},{
	path:'/clock',
	component:resolve => require(['@/pages/clock.vue'],resolve)
}]

var router = new Router({
//	mode: 'history',
//	hashbang: true,
//	history: true,
	saveScrollPosition: true,
//	suppressTransitionError: true,
//	linkActiveClass: "myactive",
	routes: routes
})
export default router;
