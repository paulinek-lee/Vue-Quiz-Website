import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    correctCount: 0,
  },
  getters: {
    getCount(state) {
      return state.correctCount;
    }
  },
  mutations: {
    increment (state) {
      state.correctCount++;
    }
  },
  actions: {
    increment ({ commit }) { 
      commit('increment')
    }
  },
  modules: {
  }
})
