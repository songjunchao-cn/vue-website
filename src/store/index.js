import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userObj: {
    }
  },
  mutations: {
    initUser (state) {
      let formatData = JSON.parse(sessionStorage.getItem('userObj'))
      state.userObj = formatData || {}
    }
  },
  actions: {
  },
  modules: {
  }
})
