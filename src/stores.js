import Vue from 'vue'
import Vuex from 'vuex'
import plugin from './stores/index.js'

Vue.use(Vuex)
const vuex = new Vuex.Store({
  plugins: [plugin]
})

export default vuex
