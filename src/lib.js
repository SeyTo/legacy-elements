import registerComponent from './components'
import registerGeneric from './generics'
import storePlugin from './stores/index.js'

import { colorOfType, iconOfType } from '@/utils/constants'

import SizeWatcher from '@/mixins/extends/SizeWatcher'
import DeletableModel from '@/mixins/helpers/DeletableModel'
import GlobalMsg from '@/mixins/helpers/GlobalMsg'
import NavRoutable from '@/mixins/helpers/NavRoutable'

const prdinsElements = {
  install (vue, args) {
    registerComponent(vue)
    registerGeneric(vue)
  },
  version: '0.1.0'
}

export default {
  components: prdinsElements,
  store: storePlugin,
  utils: {
    constants: {
      colorOfType,
      iconOfType
    }
  },
  mixins: {
    SizeWatcher,
    DeletableModel,
    GlobalMsg,
    NavRoutable
  }
}
