import ActionBar from './ActionBar'
import Countdown from './Countdown'
import AlertDialog from './AlertDialog'
import ActivityDialog from './ActivityDialog'
import AvatarList from './AvatarList'
import UserAvatar from './UserAvatar'
import MsgLoader from './MsgLoader'
import SpeedDial from './SpeedDial'
import StateBar from './StateBar'
import BaseNavbar from './BaseNavbar'
import BaseNavdrawer from './BaseNavdrawer'
import BasicHeader from './BasicHeader'
import ContentRenderer from './ContentRenderer'
import Cloud from './Cloud'
import TooltipIconBtn from './TooltipIconBtn'
import EditableList from './EditableList'

export default function registerComponent (vue) {
  vue.component('actionBar', ActionBar)
  vue.component('countdown', Countdown)
  vue.component('alertDialog', AlertDialog)
  vue.component('activityDialog', ActivityDialog)
  vue.component('avatarList', AvatarList)
  vue.component('userAvatar', UserAvatar)
  vue.component('msgLoader', MsgLoader)
  vue.component('speedDial', SpeedDial)
  vue.component('stateBar', StateBar)
  vue.component('baseNavbar', BaseNavbar)
  vue.component('baseNavdrawer', BaseNavdrawer)
  vue.component('basicHeader', BasicHeader)
  vue.component('cloud', Cloud)
  vue.component('contentRenderer', ContentRenderer)
  vue.component('tooltipIconBtn', TooltipIconBtn)
  vue.component('EditableList', EditableList)
}
