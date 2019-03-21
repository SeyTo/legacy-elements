import ActionBar from './ActionBar'
import Countdown from './Countdown'
import AlertDialog from './AlertDialog'

export default function registerComponent (vue) {
  vue.component('action-bar', ActionBar)
  vue.component('countdown', Countdown)
  vue.component('alert-dialog', AlertDialog)
}
