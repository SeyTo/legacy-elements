import BaseNavbarStore from './modules/eBaseNavbar.store.js'
import BaseNavdrawerStore from './modules/eBaseNavdrawer.store.js'
import EleAppStore from './modules/eApp.store.js'
import EStateMsgStore from './modules/eStateMsg.store.js'
import EDialogMsgStore from './modules/eDialogMsg.store.js'
import EContentCreator from './modules/eContentCreator.store.js'

export default function (store) {
  store.registerModule('eApp', EleAppStore)
  store.registerModule('eBaseNavbar', BaseNavbarStore)
  store.registerModule('eBaseNavdrawer', BaseNavdrawerStore)
  store.registerModule('eStateMsg', EStateMsgStore)
  store.registerModule('eDialogMsg', EDialogMsgStore)
  store.registerModule('eContentCreator', EContentCreator)
}
