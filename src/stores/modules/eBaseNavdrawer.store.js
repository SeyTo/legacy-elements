export default {
  namespaced: true,
  state: {
    visible: false,
    disabled: true
  },
  mutations: {
    show (state) {
      state.visible = true
    },
    hide (state) {
      state.visible = false
    },
    toggle (state) {
      state.visible = !state.visible
    },
    enable (state) {
      state.disabled = false
    },
    disable (state) {
      state.disabled = true
    },
    toggleDisable (state) {
      state.disabled = !state.disabled
    }
  }
}
