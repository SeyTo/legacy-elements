export default {
  namespaced: true,
  state: {
    stateMsg: {
      visible: false,
      msg: ''
    },
    dialogMsg: {
      visible: false,
      message: '',
      buttons: []
    }
  },
  mutations: {
    showStateMsg (state, msg) {
      state.stateMsg.msg = msg
      state.stateMsg.visible = true
    },
    /**
     * @param { String } msg
     * @param { Array } btns should contain array of objects { name, label, class }
     */
    showAlertMsg (state, { message, buttons }) {
      state.dialogMsg.visible = true
      state.dialogMsg.message = message
      state.dialogMsg.buttons = buttons
    },
    /**
     * @param { String } msg
     * @param { Array } btns should contain array of objects { name, label, class }
     */
    hideAlertMsg (state) {
      state.dialogMsg.visible = false
    }
  }
}
