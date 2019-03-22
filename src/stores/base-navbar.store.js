export default {
  namespaced: true,
  state: {
    visible: true,
    lbtn: {
      visible: true,
      // default action when lbtn is reset.
      primaryAction: null,
      // or set an alternate action when the button is pressed.
      action: () => {},
      icon: 'mdi mdi-dots-vertical'
    },
    rbtn: {
      visible: false,
      primaryAction: null,
      action: () => {},
      icon: 'mdi mdi-dots-vertical'
    }
  },
  mutations: {
    /**
     * Helps to initialize the leftButton visibility and action. The visibility is by default true because we assume that use wants to see the button if they have applied an action to it.
     */
    setlbtn (state, payload) {
      state.lbtn.visible = payload.visible || true
      if (payload.action) state.lbtn.action = payload.action
      if (payload.icon) state.lbtn.icon = payload.icon
    },
    setrbtn (state, payload) {
      state.rbtn.visible = payload.visible || true
      if (payload.action) state.rbtn.action = payload.action
      if (payload.icon) state.rbtn.icon = payload.icon
    },
    /**
     * Resets the lbtn to its primary action and icon.
     */
    resetlbtn (state) {
      state.lbtn.visible = true
      if (state.lbtn.primaryAction) { state.lbtn.action = state.lbtn.primaryAction }
      state.lbtn.icon = 'mdi mdi-dots-vertical'
    },
    resetrbtn (state) {
      state.rbtn.visible = true
      if (state.rbtn.primaryAction) { state.rbtn.action = state.rbtn.primaryAction }
      state.rbtn.icon = 'mdi mdi-dots-vertical'
    },
    /**
     * Changes the navbar to show back button and sets on action to return to previous page.
     */
    setReturnable (state, { visible, router }) {
      state.lbtn.visible = visible || true
      const reserveAction = state.lbtn.action
      state.lbtn.action = () => {
        router.go(-1)
        // restore previous functions
        state.lbtn.icon = 'mdi mdi-dots-vertical'
        state.lbtn.action = reserveAction
      }
      state.lbtn.icon = 'mdi mdi-arrow-left'
    },
    hidelbtn (state) {
      state.lbtn.visible = false
    },
    showlbtn (state) {
      state.lbtn.visible = true
    },
    hiderbtn (state) {
      state.rbtn.visible = false
    },
    showrbtn (state) {
      state.rbtn.visible = true
    },
    /**
     * Hide the leftButton and undefine the action. Usually use when components are destroyed.
     */
    removelbtn (state) {
      state.lbtn.visible = false
      state.lbtn.action = undefined
    },
    removerbtn (state) {
      state.rbtn.visible = false
      state.rbtn.action = undefined
    }
  }
}
