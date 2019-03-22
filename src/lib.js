import './styles/lib.styl'
import registerComponent from './components'
import storePlugin from './stores/index.js'

console.log(storePlugin)

const prdinsElements = {
  install (vue, args) {
    registerComponent(vue)
  },
  version: '0.0.1'
}

export default {
  elements: prdinsElements,
  store: storePlugin
}
