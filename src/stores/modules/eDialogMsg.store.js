import { colorOfType, iconOfType } from '@/utils/constants.js'

export default {
  namespaced: true,
  state: {
    visible: false,
    type: 'info',
    icon: '',
    color: '',
    message: '',
    buttons: [],
    defaultButtons: null
  },
  mutations: {
    /**
     * Sets one button with 'ok', which closes the dialog. Call this after initializing vue.
     */
    resetDialogButtons (state) {
      state.type = 'info'
      state.icon = iconOfType['info']
      state.color = colorOfType['info']
      if (!state.defaultButtons) {
        state.defaultButtons = [{
          name: 'close',
          label: 'ok',
          class: '',
          action: () => { state.visible = false }
        }]
      }
      state.buttons = state.defaultButtons
    },

    /**
     * @param { String } msg
     * @param { [{ name, label, class, action }] } btns
     */
    showDialog (state, { message, type = 'info', buttons }) {
      state.visible = true
      state.message = message
      state.type = type
      state.color = colorOfType[type]
      state.icon = iconOfType[type]
      if (buttons) state.buttons = buttons
    },

    setDialog (state, { visible, message, type, buttons }) {
      if (visible) state.visible = visible
      if (message) state.message = message
      if (type) {
        state.type = type
        state.color = colorOfType[type]
        state.icon = iconOfType[type]
      }
      if (buttons) state.buttons = buttons
    },

    /**
     * @param { String } msg
     * @param { Array } btns should contain array of objects { name, label, class }
     */
    hideDialog (state) {
      state.dialogMsg.visible = false
    }
  }
}
