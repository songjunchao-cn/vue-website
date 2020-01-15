import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userObj: {
      name: '',
      email: null
    }
  },
  mutations: {
    initUser (state, userObj) {
      state.userObj = userObj
    }
  },
  actions: {
  },
  modules: {
  }
})
