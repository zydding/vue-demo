/**
 * Created by vxg on 2019/04/16.
 */
const state = {
  serviceTime: {},
  pageConfig: {},
}

//同步操作
const mutations = {
  //添加 角色
  setServiceTime(state,item){
    state.serviceTime = item;
  },
  //添加 角色
  setPageConfig(state,item){
    state.pageConfig = item;
  },
}

//异步操作
const actions = {

}

//state的一些派生状态，也可以理解为一种计算属性
const getters = {

}

export default {
  namespaced: true,
  getters,
  state,
  mutations,
  actions
}
