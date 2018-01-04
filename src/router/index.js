import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = [{
	path: '/home',
	component: resolve => require(['@/pages/home.vue'], resolve),
	children: [{
		path: '/home',
		component: resolve => require(['@/pages/home/index.vue'], resolve)
	}, {
		path: '/home/need',
		component: resolve => require(['@/pages/home/need.vue'], resolve)
	}, {
		path: '/home/resource',
		component: resolve => require(['@/pages/home/resource.vue'], resolve)
	}, {
		path: '/home/mine',
		component: resolve => require(['@/pages/home/mine.vue'], resolve)
	}]
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
