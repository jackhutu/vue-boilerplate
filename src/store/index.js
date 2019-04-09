import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import showmsg from './modules/showmsg'
import * as actions from './actions'
import * as getters from './getters'


const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    showmsg
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
