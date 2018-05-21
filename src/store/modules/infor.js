import axios from 'axios'
import interfaces from '../../interfaces/index'
//各个组件共享数据的仓库
const state = {
  name:'小可爱',
  sex:'男'
}
//对state的值进行过滤
const getters = {
  name: state => state.name,
  sex: state => state.sex
}
//通过dispatch触发的方法
const actions = {
  async getInfor({commit,state}){
    let res = await interfaces.getInfor();
    if (!res.hasError) {
      commit('getInfor', res.data);
    }
  }
}
//在mutation中去改变state的值
const mutations = {
  getInfor(state,data){
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