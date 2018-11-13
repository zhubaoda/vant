import Vue from 'vue'
import Vuex from 'vuex'
import infor from './modules/infor'
import tabbar from './modules/tabbar'

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		infor,
		tabbar
	}
})
