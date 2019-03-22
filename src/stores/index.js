import BaseNavbarStore from './base-navbar.store.js'

export default function (store) {
  console.log('store module registration')
  store.registerModule('basenavbar', BaseNavbarStore)
}
