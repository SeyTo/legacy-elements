import ActionBar from './ActionBar'
import Countdown from './Countdown'
import AlertDialog from './AlertDialog'
import ActivityDialog from './ActivityDialog'
import AvatarList from './AvatarList'
import UserAvatar from './UserAvatar'
import MsgLoader from './MsgLoader'

export default function registerComponent (vue) {
  vue.component('action-bar', ActionBar)
  vue.component('countdown', Countdown)
  vue.component('alert-dialog', AlertDialog)
  vue.component('activity-dialog', ActivityDialog)
  vue.component('avatar-list', AvatarList)
  vue.component('user-avatar', UserAvatar)
  vue.component('msg-loader', MsgLoader)
}
