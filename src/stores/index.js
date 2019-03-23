import BaseNavbarStore from './modules/base-navbar.store.js'
import EleAppStore from './modules/ele-app.store.js'

export default function (store) {
  store.registerModule('basenavbar', BaseNavbarStore)
  store.registerModule('ele-app', EleAppStore)
}
