import registerComponent from './components'
import registerGeneric from './generics'
import storePlugin from './stores/index.js'

const prdinsElements = {
  install (vue, args) {
    registerComponent(vue)
    registerGeneric(vue)
  },
  version: '0.1.0'
}

export default {
  components: prdinsElements,
  store: storePlugin
}
