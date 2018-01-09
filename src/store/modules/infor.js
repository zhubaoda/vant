import axios from 'axios'
//各个组件共享数据的仓库
const state = {
    name:'小可爱',
    sex:'男'
}
//对state的值进行过滤
const getters = {
    name:state=>state.name,
    sex:state=>state.sex
}
//通过dispatch触发的方法
const actions = {
	getInfor({commit,state}){
		return new Promise((resolve,reject)=>{
			axios.get('../../../static/information.json').then(suc=>{
				commit('getInfor',suc)
				resolve(suc)
			}).catch(err=>{
				reject(err)
			})
		})
	}
}
//在mutation中去改变state的值
const mutations = {
	getInfor(state,{data}){
		//{}es6结构
		state.name = data.name;
		state.sex = data.sex;
	}
}

export default {
    state,
    getters,
    actions,
    mutations
}