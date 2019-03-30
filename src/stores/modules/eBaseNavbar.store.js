export default {
  namespaced: true,
  state: {
    visible: true,
    lbtn: {
      visible: false,
      // default action when lbtn is reset.
      primaryAction: null,
      // or set an alternate action when the button is pressed.
      action: () => {},
      icon: 'mdi mdi-menu',
      // set of actions for each return pages
      reserveActions: []
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
      if (payload.primaryAction) state.lbtn.primaryAction = payload.primaryAction
    },
    setrbtn (state, payload) {
      state.rbtn.visible = payload.visible || true
      if (payload.action) state.rbtn.action = payload.action
      if (payload.icon) state.rbtn.icon = payload.icon
      if (payload.primaryAction) state.rbtn.primaryAction = payload.primaryAction
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
      state.lbtn.icon = 'mdi mdi-arrow-left'
      // save the original action
      state.lbtn.reserveActions.push(state.lbtn.action)
      state.lbtn.action = () => {
        // go back route
        router.go(-1)
        // restore previous functions
        state.lbtn.reserveActions.pop()
        if (state.lbtn.reserveActions.length === 1) {
          state.lbtn.icon = 'mdi mdi-menu'
          state.lbtn.action = state.lbtn.reserveActions[0]
          // remove main action because it will be pushed again
          state.lbtn.reserveActions = []
        }
      }
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
