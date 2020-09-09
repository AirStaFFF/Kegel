import Vue from 'vue'
import Vuex from 'vuex'
import kegel from './kegel'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    kegel
  }
})
