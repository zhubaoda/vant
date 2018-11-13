import interfaces from '../../interfaces/index'
//各个组件共享数据的仓库
const state = {
  list: [],
  total: 0
}
//对state的值进行过滤
const getters = {
  list: state => state.list,
  total: state => state.total
}
//通过dispatch触发的方法
const actions = {
  async getTabBarList({commit,state}){
    let res = await interfaces.getTabBarList();
    if (!res.hasError) { 	  
      commit('getTabBarList', res.data);
    }
  }
}
//在mutation中去改变state的值
const mutations = {
  getTabBarList(state,data){
  	state.list = data.list;
  	state.total = data.total;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}