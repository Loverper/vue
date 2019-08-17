import Vue from 'vue'

const state = {
  orderList: [],
  params: {}
}
const getters = {
  getOrderList: function(state) {
    return state.orderList
  }
}
const actions = {
  fetchOrderList({ commit, state }) {
    Vue.http.post('/api/getOrderList', state.params)
      .then(function(res) {
        commit('updateOrderList', res.data.list)
      }, function(err) {

      })
  }
}
const mutations = {
  updateOrderList(state, payload) {
    state.orderList = payload
  },
  updateParmas(state, { key, val }) {
    state.params[key] = val
    // console.log(state.params)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
