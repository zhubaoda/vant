import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = [{
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
