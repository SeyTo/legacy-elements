// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './stores.js'
import './directives'
import './plugins/vuetify'
import App from './app'

import './styles/lib.styl'

import registerComponent from './components'
import registerGeneric from './generics'
import registerPlugins from './plugins'

registerComponent(Vue)
registerGeneric(Vue)
registerPlugins(Vue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
