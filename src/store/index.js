import Vue from 'vue'
import Vuex from 'vuex'
import rootState from './root-state'
import { modulesA, modulesB, NAME_SPACE_A, NAME_SPACE_B } from './modules'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
const persistedState = createPersistedState({
  storage: window.sessionStorage
})
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    [NAME_SPACE_A]: modulesA,
    [NAME_SPACE_B]: modulesB
  },
  ...rootState,
  plugins: [persistedState]
})
