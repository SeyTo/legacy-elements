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
import TitleBar from './TitleBar'
import SearchField from './SearchField'
import ModList from './ModList'
import SimpleMsg from './SimpleMsg'
import ItemsGrid from './ItemsGrid'

export default function registerComponent (vue) {
  vue.component('ActionBar', ActionBar)
  vue.component('Countdown', Countdown)
  vue.component('AlertDialog', AlertDialog)
  vue.component('ActivityDialog', ActivityDialog)
  vue.component('AvatarList', AvatarList)
  vue.component('UserAvatar', UserAvatar)
  vue.component('MsgLoader', MsgLoader)
  vue.component('SpeedDial', SpeedDial)
  vue.component('StateBar', StateBar)
  vue.component('BaseNavbar', BaseNavbar)
  vue.component('BaseNavdrawer', BaseNavdrawer)
  vue.component('BasicHeader', BasicHeader)
  vue.component('Cloud', Cloud)
  vue.component('ContentRenderer', ContentRenderer)
  vue.component('TooltipIconBtn', TooltipIconBtn)
  vue.component('EditableList', EditableList)
  vue.component('TitleBar', TitleBar)
  vue.component('SearchField', SearchField)
  vue.component('ModList', ModList)
  vue.component('SimpleMsg', SimpleMsg)
  vue.component('ItemsGrid', ItemsGrid)
}
