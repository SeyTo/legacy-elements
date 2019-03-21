import ActionBar from './ActionBar'
import Countdown from './Countdown'

export default function registerComponent (vue) {
  vue.component('action-bar', ActionBar)
  vue.component('countdown', Countdown)
}
