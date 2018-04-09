import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    switchTabsValueStore: 'newhouse'
  },
  mutations: {
    handleTheTabs(state, value) {
      state.switchTabsValueStore = value
    }
  }
})
export default store
